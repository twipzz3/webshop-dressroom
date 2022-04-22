import React, { useState } from 'react';
import { useRouter } from 'next/router';

import styles from './login.module.scss';
import LoginForm from './login-form';
import RegisterForm from './register-form';
import { auth } from '../../config/firebase';
import Link from 'next/link';

export default function LoginPage() {
  const [page, setPage] = useState('login');

  const router = useRouter();

  auth.onAuthStateChanged(function (user) {
    if (user) {
      console.log(user);
      typeof window !== 'undefined' && router.push('/');
    }
  });

  return (
    <div className={styles.container}>
      <Link href="/">
        <a className={styles.logo}>eclipse</a>
      </Link>
      <div className={styles.content}>
        <div className={styles.switchContainer}>
          <button
            className={styles.switchButton}
            onClick={() => setPage('login')}
            style={{
              backgroundColor: page === 'login' ? '#212121' : '#0F0F0F',
            }}
          >
            <span>Login</span>
          </button>
          <button
            className={styles.switchButton}
            onClick={() => setPage('register')}
            style={{
              backgroundColor: page === 'register' ? '#212121' : '#0F0F0F',
            }}
          >
            <span>Register</span>
          </button>
        </div>
        {page === 'login' ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
}
