'use client'
import React, { useState } from 'react';
import styles from "./FormInputs.module.css";

// React Icons
import { FiEyeOff, FiEye } from "react-icons/fi";

type FormInputType = {
    uniqueId: string,
    inputName: string,
    inputLabel: string,
    inputTitle: string,
    placeholder: string,
    inputPattern?: string,
    fieldTitle?: string
    inputValue?: string,
    inputValueChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    inputUsingFor: 'normal' | 'password'
    inputType: 'email' | 'text' | 'password',
}

const FormInputs = ({ uniqueId, inputUsingFor, inputLabel, inputType, inputName, placeholder, inputTitle, inputPattern, fieldTitle, inputValue, inputValueChange }: FormInputType) => {

    const [ showPassword, setShowPassword ] = useState<boolean>(false);
  
    return (inputUsingFor === 'password') ? (
        
        <div className={styles.form__input}>
          <label htmlFor={uniqueId}>{inputLabel}</label>
          <div className={styles.password__wrap}>
            <input required aria-required type={showPassword ? 'text' : 'password'} title={`${fieldTitle ? fieldTitle : 'Enter your password'}`} pattern={inputPattern} placeholder={placeholder} id={uniqueId} name={inputName} value={inputValue}  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              inputValueChange && inputValueChange(e)
            }} />
            <button type='button' title={inputTitle} onClick={() => {
                setShowPassword(!showPassword)
            }}>{
                showPassword ? <FiEye/> : <FiEyeOff/>
            }</button>
          </div>
        </div>

    ) : (

        <div className={styles.form__input}>
          <label htmlFor={uniqueId}>{inputLabel}</label>
          <input required aria-required type={inputType} value={inputValue} onChange={(e) => {
            inputValueChange && inputValueChange(e);
          }} title={inputTitle} placeholder={placeholder} pattern={inputPattern} id={uniqueId} name={inputName} />
        </div>
        
    )

}

export default FormInputs