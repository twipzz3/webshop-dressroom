import React from 'react';
import Link from 'next/link';

import styles from './header.module.scss';
import ArrowIcon from '@/icons/arrow';

import { useAuth } from '@/firebase/context';

export default function Header() {
  const { user } = useAuth();
  return (
    <nav className={styles.container}>
      <Link href="/">
        <a className={styles.logo}>eclipse</a>
      </Link>
      <div className={styles.leftContent}>
        <div className={styles.roomContainer}>
          <Link href="/">
            <span>VIRTUAL ROOM</span>
          </Link>
        </div>
      </div>
      <div className={styles.rightContent}>
        <Link href="/">
          <div className={styles.cartContainer}>
            <span>CART (0)</span>
          </div>
        </Link>
        <Link href="/">
          <div className={styles.profileContainer}>
            <span>
              HELLO{' '}
              <span style={{ fontWeight: 'normal' }}>
                {user?.name || 'GUEST'}
              </span>
            </span>
            <ArrowIcon width={12} height={12} className={styles.arrowIcon} />
            <div className={styles.dropdown}>
              <div className={styles.arrowUp} />
              <div className={styles.dropdownMenu}>
                {user ? (
                  <>
                    <Link href="/account">My Account</Link>
                    <Link href="/account/orders">My Orders</Link>
                    <Link href="/account/favorites">Favourites</Link>
                    <Link href="/account/logout">Logout</Link>
                  </>
                ) : (
                  <>
                    <Link href="/login">Login</Link>
                    <Link href="/register">Register</Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </nav>
  );
}
