'use client';
import React, { useState } from 'react'
import styles from "./page.module.css";
import Link from 'next/link';
import FormInputs from '@/components/authentication/FormInputs/FormInputs';
import FormSelect from '@/components/authentication/FormSelect/FormSelect';

const Register = () => {

  const [currentRegisterSlide, setCurrentRegisterSlide] = useState< 1 | 2 | 3 | 4 | 5 >(1);

  return (
    <section className={styles.app__register}>

      <div className={styles.login__hint}>
        <p>Already have an account? <Link href="/">Login</Link></p>
      </div>

      <div className={styles.register__progress}>
        {
          Array.from({length: 5}).map((_, index) => { 
            return <span className={`${currentRegisterSlide >= index + 2 && styles.done__slide}`} key={index}>{index + 1}</span>
          })
        }
      </div>
      
      {/* Now we have to display those forms each in a slide according to slide number. */}

      <div className={styles.register__form}>

        {
          currentRegisterSlide === 1 && (
            <form className={styles.form} onSubmit={(e) => {
              e.preventDefault();
              setCurrentRegisterSlide(2)
            }}>
              <h2>Create Account</h2>
              <p>Signup now and start exploring our app has to offer you. We&#39;re excited to welcome you to our community.</p>
              <FormInputs inputLabel='Hospital Name' inputUsingFor='normal' inputType='text' uniqueId='hospitalName' placeholder='Enter hospital name' inputName='hospitalName' inputTitle='Enter Hospital Name' />
              <FormInputs inputLabel='Email Address' inputUsingFor='normal' inputType='email' uniqueId='hospitalEmail' placeholder='Enter email address' inputName='hospitalEmail' inputTitle='Provide a valid email address' />
              <FormInputs inputLabel='Hospital Reg Id' inputUsingFor='normal' inputType='text' uniqueId='hospitalRegId' placeholder='Enter hospital Registration Id' inputName='hospiatlRegId' inputTitle='Provide hospitals Registration Id' />
              <FormInputs inputLabel='Create a Password' inputUsingFor='password' inputType='password' uniqueId='hospitalPassword' placeholder='Create a Password' inputName='hospitalPassword' inputTitle='Password hide/show' fieldTitle="Password should be 6-24 long containing atleat 1 Uppercase, 1 Lowercase, 1 Numeric & a special symbol." inputPattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,24}' />
              <FormSelect />
              <button type='submit'>Next</button>
            </form>
          )
        }

        {
          currentRegisterSlide === 2 && (
            <form className={styles.form} onSubmit={(e) => {
              e.preventDefault();
              setCurrentRegisterSlide(3)
            }}>
              <h2>Contact Information</h2>
              <p>Signup now and start exploring our app has to offer you. We&#39;re excited to welcome you to our community.</p>
              
            </form>
          )
        }

      </div>

    </section>
  )
}

export default Register;