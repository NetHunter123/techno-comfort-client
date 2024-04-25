import React from 'react';
import styles from '@/components/modules/Logo/logo.module.css'

const Logo = () => {
  return (
    <div className={styles.logo__root}>
      <div className={styles.logo__name}>
        <span >TechnoComfort</span>
      </div>
      <span className={styles.logo__motto}>Comfort For Everyone</span>

    </div>
  );
};

export default Logo;
