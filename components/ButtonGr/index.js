import React from 'react';

import styles from './buttongr.module.scss';

export default function ButtonGr({ children, ...props }) {
  return (
    <button className={styles.container} {...props}>
      {children}
    </button>
  );
}
