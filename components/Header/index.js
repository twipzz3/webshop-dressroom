import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import styles from './header.module.scss';
import ArrowIcon from '@/icons/arrow';
import CartIcon from '@/icons/cart';

import { useAuth } from '@/firebase/context';
import { useCart } from 'hooks/cart.hook';
import { useRouter } from 'next/router';
import MenuIcon from '@/icons/menu';
import HangerIcon from '@/icons/hanger';

export default function Header() {
  const [showHeader, setShowHeader] = useState({
    transform: 'translate3d(100vw, 0, 0)',
  });
  const router = useRouter();

  const { user } = useAuth();

  const cart = useCart().data;
  const cartLength = Object.keys(cart).reduce((a, b) => a + cart[b].length, 0);

  return (
    <nav className={styles.container}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <a className={styles.logo}>eclipse</a>
        </Link>
        <div className={styles.rightContentMobile}>
          <Link href="/">
            <div className={styles.vrContainer}>
              <HangerIcon
                width={28}
                height={28}
                className={styles.hangerIcon}
              />
            </div>
          </Link>
          <Link href="/cart">
            <div className={styles.cartContainer}>
              <CartIcon width={28} height={28} className={styles.cartIcon} />
              <div>
                <span>{cartLength || 0}</span>
              </div>
            </div>
          </Link>
          <div className={styles.profileContainer}>
            <MenuIcon
              width={30}
              height={30}
              className={styles.menuIcon}
              onClick={() =>
                setShowHeader({ transform: 'translate3d(0vw, 0, 0)' })
              }
            />
          </div>
        </div>
      </div>
      <div className={styles.rightMenu}>
        <div className={styles.menuContent} style={showHeader}>
          {user ? (
            <>
              <Link href="/account">My Account</Link>
              <Link href="/account/orders">My Orders</Link>
              <Link href="/account/logout">Logout</Link>
            </>
          ) : (
            <>
              <Link href="/login">Login</Link>
              <Link href="/login">Register</Link>
            </>
          )}
        </div>
        <div
          className={styles.background}
          style={showHeader}
          onClick={() =>
            setShowHeader({ transform: 'translate3d(100vw, 0, 0)' })
          }
        />
      </div>
      <div className={styles.leftContent}>
        <div className={styles.roomContainer}>
          <Link href="/virtual-room">
            <span>VIRTUAL ROOM</span>
          </Link>
        </div>
      </div>
      <div className={styles.rightContent}>
        <Link href="/cart">
          <div className={styles.cartContainer}>
            <span>CART ({cartLength || 0})</span>
          </div>
        </Link>

        <Link href="/account">
          <div className={styles.profileContainer}>
            <span>
              Hello,{' '}
              <span style={{ fontWeight: 'normal' }}>
                {user?.name || 'Guest'}
              </span>
            </span>
            <ArrowIcon width={12} height={12} className={styles.arrowIcon} />
            <div className={styles.dropdown}>
              <div className={styles.arrowUp} />
              <div className={styles.dropdownMenu}>
                {user ? (
                  <>
                    <Link href="/account">My Account</Link>
                    <Link href="/account/logout">Logout</Link>
                  </>
                ) : (
                  <>
                    <Link href="/login">Login</Link>
                    <Link href="/login">Register</Link>
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
