import React from 'react';

import styles from './social-media.module.scss';
import GoogleIcon from '@/icons/google';

export default function SocialMediaButton({ icon, children, ...props }) {
  return (
    <button className={styles.container} {...props}>
      {icon === 'google' && <GoogleIcon />}
      {children}
    </button>
  );
}
