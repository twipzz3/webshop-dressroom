import React from 'react';

import styles from './sidebar.module.scss';
import Link from 'next/link';

import { useAuth } from '@/firebase/context';

const SidebarItem = ({ name, link, emoji }) => {
  return (
    <li className={styles.sidebarItem}>
      <Link href={link || '/account'}>
        <a>
          <span className={styles.emoji}>{emoji}</span>
          <span className={styles.categoryName}>{name}</span>
        </a>
      </Link>
    </li>
  );
};

export default function AccountSidebar() {
  const { user } = useAuth();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Menu</h2>
      <ul className={styles.categories}>
        <SidebarItem name="Account" emoji="🔒" />
        <SidebarItem name="Orders" emoji="📦" link="/account/orders" />
        <SidebarItem name="Addresses" emoji="🏘️" link="/account/addresses" />
        <SidebarItem name="Logout" emoji="🚪" link="/account/logout" />
      </ul>
    </div>
  );
}
