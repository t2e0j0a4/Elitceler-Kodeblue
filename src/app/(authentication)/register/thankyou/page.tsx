import React from 'react';
import styles from "./page.module.css";
import Image from 'next/image';

const ThanksforRegistration = () => {
  return (
    <main className={styles.register__thanks}>
        <Image src="/assets/Thankyou.svg" alt='Thank you' width={200} height={200} />
        <h2>Thank You For Your Registration</h2>
        <p>Waiting for your approval Kode Blue will reach out to you soon with the updates.</p>
        <button type="button">Contact Us</button>
    </main>
  )
}

export default ThanksforRegistration