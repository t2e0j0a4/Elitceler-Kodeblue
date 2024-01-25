import React from 'react'
import styles from "./page.module.css"

// Components
import FormInputs from '@/components/authentication/FormInputs/FormInputs'

const Reset = () => {
  return (
    <section className={styles.app__resetform}>

      <form className={styles.reset__form}>
        <div className={styles.reset__head}>
          <h2>Reset Password</h2>
          <p>Reset your password must be different from previous used passwords.</p>
        </div>
        <FormInputs inputUsingFor='password' inputLabel='New Password' uniqueId='password' placeholder='Password' inputTitle='Password Hide/Show' inputName='password' inputType='password' inputPattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,24}' />
        <FormInputs inputUsingFor='password' inputLabel='Confirm Password' uniqueId='confirmPassword' placeholder='Confirm Password' inputTitle='Password Hide/Show' inputName='confirmPassword' inputType='password' inputPattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,24}' />
        <button type='submit'>Reset Password</button>
      </form>

    </section>
  )
}

export default Reset