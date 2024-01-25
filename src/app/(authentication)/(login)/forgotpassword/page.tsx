'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from "./page.module.css";

// Components
import FormInputs from '@/components/authentication/FormInputs/FormInputs';

// React Icons
import { LuMailCheck } from "react-icons/lu";
import { IoArrowBack } from "react-icons/io5";

const ForgotPassword = () => {

  const [ resetPasswordRequestSent, setResetPasswordRequestSent ] = useState<boolean>(false);

  return (
    <section className={styles.app__forgotpass}>

      <div className={styles.forgotpass__option}>
        <Link href="/" title='Back to Login'><IoArrowBack aria-hidden /></Link>
      </div>

      {
        resetPasswordRequestSent ? (

          <div className={styles.checkmail__req}>
            <LuMailCheck fontSize={64} color="#6759A8" />
            <h3>Check your Mail</h3>
            <p>We have sent a link to reset your password to your mentioned email.</p>
            <p>Did not recevied the email? Check your spam filter, or  <button type="button" title='Resend'>Resend</button></p>
          </div>

        ) : (
          <form className={styles.forgotpass__form}>
            <div className={styles.form__head}>
              <h2>Forgot Password</h2>
              <p>Enter the email associated with your account and we&#39;ll send a link to reset your password.</p>
            </div>
            <FormInputs inputUsingFor='normal' inputLabel='Email Address' uniqueId='email' placeholder='Enter your email address' inputTitle='Provide a valid email address' inputName='email' inputType='email' />
            <button type='submit'>Send Reset Link</button>
          </form>
        )
      }

    </section>
  )
}

export default ForgotPassword