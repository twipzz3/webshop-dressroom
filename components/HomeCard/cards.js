import React from 'react';

import styles from './card.module.scss';

export default function Cards({ bgColor, ...props }) {
  return (
    <div
      className={styles.Cards}
      style={{ backgroundColor: bgColor || '' }}
    ></div>
  );
}
