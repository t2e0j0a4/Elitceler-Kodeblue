import React from 'react';
import Link from 'next/link';
import styles from "../page.module.css";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
        {children}
        <div className={styles.auth__terms}>
            <p>By continuing, you agree to our <Link href="/tnc">Terms & Conditions</Link> and <Link href="/privacypolicy">Privacy Policy</Link>.</p>
        </div>
    </>
  )
}

export default layout