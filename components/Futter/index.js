import React from 'react';
import Link from 'next/link';

import styles from './futter.module.scss';
import InstaIcon from '@/icons/instagram';

export default function Futter() {
  return (
    <nav className={styles.container}>
      <div className={styles.firstLine}>
        <div className={styles.instaContainer}>
          <Link href="/">
            <InstaIcon className={styles.instaIcon} />
          </Link>
        </div>
        <div>
          <Link href="/">
            <span>SHIPPING & RETURNS</span>
          </Link>
        </div>
        <div>
          <Link href="/">
            <span>TERMS OF SERVICE</span>
          </Link>
        </div>
        <div>
          <Link href="/">
            <span>PRIVACY POLICY</span>
          </Link>
        </div>
      </div>
      <div className={styles.secondLine}>
        <a>Copyright © 2022. All rights reserved.</a>
      </div>
    </nav>
  );
}
