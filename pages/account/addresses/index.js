import React from 'react';

import AccountSidebar from '@/components/AccountSidebar';
import Layout from '@/components/Layout';

import styles from './address.module.scss';

export default function Addresses() {
  return (
    <Layout noCategories>
      <AccountSidebar />
      <main className={styles.container}>
        <h1 className={styles.title}>My Addresses</h1>
        <div className={styles.content}></div>
      </main>
    </Layout>
  );
}
