import React from 'react';
import type { Metadata } from 'next'
import styles from "./layout.module.css";
import Sidebar from '@/components/dashboard/Sidebar/Sidebar';
import RespNavbar from '@/components/dashboard/RespNavbar/RespNavbar';

export const metadata: Metadata = {
  title: 'Dashboard | Kodeblue',
  description: 'Welcome to Admin Dashboard of Kodeblue Hospital Management',
}

const layout = ({children}: {children: React.ReactNode}) => {

  return (
    <main className={styles.dashboard__layout}>
      <Sidebar/>
      <div className={styles.responsive__layout}>
        <RespNavbar/>
        <main className={styles.app__outerLayer}>
          {children}
        </main>
      </div>
    </main>
  )
}

export default layout;