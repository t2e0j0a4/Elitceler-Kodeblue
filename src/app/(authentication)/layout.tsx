import React from 'react';
import styles from "./page.module.css";

// Components
import AuthBanner from '@/components/authentication/AuthBanner/AuthBanner';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={styles.app__auth}>
        <AuthBanner/>
        <div className={styles.auth__page}>
          {children}
        </div>
    </main>
  )
}

export default layout