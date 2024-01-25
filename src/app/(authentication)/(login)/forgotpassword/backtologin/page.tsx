import React from 'react'
import Link from 'next/link';
import styles from "./page.module.css";

// React Icons
import { RiLock2Line } from "react-icons/ri";

const BacktoLogin = () => {
  return (
    <section className={styles.app__backlogin}>
      <div className={styles.reset__success}>
        <RiLock2Line fontSize={72} color="#0C9B45" />
        <h3>Password Reset Successfully!</h3>
        <p>Your password has been successfully reset. Click below to login in Kode Blue</p>
        <Link href="/">Back to Login</Link>
      </div>
    </section>
  )
}

export default BacktoLogin