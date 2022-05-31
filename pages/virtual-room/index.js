import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import styles from './virtual.module.scss';

export default function VirtualRoom() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>eclipse</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>
            <span className={styles.emoji}>❓</span>How to use virtual dressing
            room?
          </h1>
          <h3>
            Virtual dressing room is implemented via the{' '}
            <u style={{ color: '#FFFC00' }}>Snapchat</u> application.
          </h3>
          <h3>
            If you want to try out the clothes you like, you will need to:
            <ol>
              <li>Go to the Main Page.</li>
              <li>Choose the clothes you want to try out.</li>
              <li>Scan the QR-code via the Snapchat application.</li>
            </ol>
          </h3>
          <h1 className={styles.title}>
            <span className={styles.emoji}>🎯</span>Detailed guide
          </h1>
          <h3>You need to install the Snapchat application on your device.</h3>
          <h3>After installing, you need to create an account.</h3>
          <h3>
            After these 2 steps you ready to go! Just scan the QR-code and try
            out the clothes.
          </h3>
        </main>
      </div>
    </Layout>
  );
}
