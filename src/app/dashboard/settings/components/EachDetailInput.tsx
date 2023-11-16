import React from 'react'
import styles from "../page.module.css";

// React Icons
import { BsPencilFill } from 'react-icons/bs';

export default function EachDetailsInput ({label, placeholder, inputType = 'text'}: {label: string, placeholder: string, inputType?: 'email' | 'text'}) {

    const {details__input, input__group} = styles;

    return (
        <div className={details__input}>
            <div className={input__group}>
                <label htmlFor={label.toLowerCase().replaceAll(' ','-')}>{label}</label>
                <input type={inputType} placeholder={placeholder} id={label.toLowerCase().replaceAll(' ','-')} />
            </div>
            <button type='button' title="Edit"><BsPencilFill aria-hidden fontSize={19}/></button>
        </div>
    )
}