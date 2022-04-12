import React from 'react';

import styles from './card.module.scss';
import Link from 'next/link';

export default function ProductCard({
  bgColor,
  id,
  name,
  price,
  image,
  ...props
}) {
  return (
    <Link href={`/${id}`} passHref>
      <div
        className={styles.Cards}
        style={{ backgroundColor: bgColor || '' }}
        {...props}
      >
        <div className={styles.imageContainer}>
          {image && <img className={styles.image} src={image} />}
        </div>
        <div className={styles.textContainer}>
          <h3>{name}</h3>
          <span className={styles.price}>{price || 0}$</span>
        </div>
      </div>
    </Link>
  );
}
