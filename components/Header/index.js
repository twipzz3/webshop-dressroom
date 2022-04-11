import React from 'react';
import Link from 'next/link';

import styles from './header.module.scss';

export default function Header() {
  return (
    <div className={styles.container}>
      <Link href="/">
        <a className={styles.logo}>eclipse</a>
      </Link>
      <div className={styles.leftContent}>
        <div className={styles.homeContainer}>
          <Link href="/">
            <span>HOME</span>
          </Link>
        </div>
        <div className={styles.roomContainer}>
          <Link href="/">
            <span>3D ROOM</span>
          </Link>
        </div>
      </div>
      <div className={styles.rightContent}>
        <div className={styles.cartContainer}>
          <Link href="/">
            <span>CART (0)</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
