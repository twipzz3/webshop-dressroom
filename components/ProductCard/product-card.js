import React, { useState } from 'react';

import styles from './product.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ProductCard({
  bgColor,
  id,
  name,
  price,
  image,
  ...props
}) {
  const router = useRouter();

  const goToProduct = (target) => {
    console.log(target);
    target?.localName !== 'button' &&
      typeof window !== 'undefined' &&
      router.push(`/${id}`);
  };

  return (
    <Link href={`/${id}`} passHref>
      <div
        className={styles.Cards}
        style={{ backgroundColor: bgColor || '' }}
        onClick={(e) => goToProduct(e.target)}
        {...props}
      >
        <div className={styles.imageContainer}>
          {image && <img className={styles.image} src={image} loading="lazy" />}
        </div>
        <div className={styles.textContainer}>
          <h3>{name}</h3>
          <span className={styles.price}>{price || 0}$</span>
        </div>
      </div>
    </Link>
  );
}
