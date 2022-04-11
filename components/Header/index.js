import React from 'react';
import Link from 'next/link';
import ArrowIcon from '@/icons/arrow';

import styles from './header.module.scss';

export default function Header() {
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
              Hi, <span style={{ fontWeight: 'bold' }}>GUEST</span>
            </span>
            <ArrowIcon width={10} height={10} className={styles.arrowIcon} />
          </div>
        </Link>
      </div>
    </nav>
  );
}
