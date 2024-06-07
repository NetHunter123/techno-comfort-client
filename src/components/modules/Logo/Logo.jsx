import React from 'react';
import styles from '@/components/modules/Logo/logo.module.css'
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={'/'} className={styles.logo__root}>
      <div className={styles.logo__name}>
        <span >TechnoComfort</span>
      </div>
      <span className={styles.logo__motto}>Comfort For Everyone</span>

    </Link>
  );
};

export default Logo;
