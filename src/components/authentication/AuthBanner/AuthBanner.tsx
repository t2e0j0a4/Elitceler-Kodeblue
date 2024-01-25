import React from 'react'
import styles from "./AuthBanner.module.css";
import Image from 'next/image';

const AuthBanner = () => {
  return (
    <div className={styles.auth__banner}>
        <Image src="/assets/Kodeblue.svg" alt='Kode Blue' width={180} height={180} />
        <Image src="/assets/IllustHospital.svg" alt='Hospital' width={600} height={360} />
    </div>
  )
}

export default AuthBanner