import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from "../page.module.css";

// Components
import FormInputs from '@/components/authentication/FormInputs/FormInputs';

export const metadata: Metadata = {
  title: "Login | Kode Blue Technologies",
  description: "Login for dashboard for your hospital admin.",
};

const page = () => {
  return (
    <section className={styles.app__login}>

      <div className={styles.login__option}>
        <p>Don&#39;t have an account yet? <Link href="/register">Register</Link></p>
      </div>

      <form className={styles.login__form}>
        <div className={styles.form__head}>
          <h2>Welcome Back</h2>
          <p>We’re excited to have you back, can&#39;t wait to see what you&#39;ve been up to since you last logged in.</p>
        </div>
        <FormInputs inputUsingFor='normal' inputLabel='Email Address' uniqueId='email' placeholder='Enter your email address' inputTitle='Provide a valid email address' inputName='email' inputType='email' />
        <FormInputs inputUsingFor='password' inputLabel='Password' uniqueId='password' placeholder='Enter your password' inputTitle='Password Show/Hide' inputName='password' inputType='password' />
        <div className={styles.forgot__pass}>
          <Link href="/forgotpassword">Forgot Password?</Link>
        </div>
        <button type='submit'>Login</button>
      </form>
      
    </section>
  )
}

export default page;