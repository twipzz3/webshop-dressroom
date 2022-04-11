import React from 'react';
//import Image from 'next/image'

import styles from './card.module.scss';

export default function Cards({ bgColor, name, price, image, ...props }) {
  return (
    <div className={styles.Cards} style={{ backgroundColor: bgColor || '' }}>
      <div className={styles.imageContainer}>
        {image && <img className={styles.image} src={image} />}
      </div>
      <div className={styles.textContainer}>
        <h3>{name}</h3>
        <span className={styles.price}>{price || 0}$</span>
      </div>
    </div>
  );
}
