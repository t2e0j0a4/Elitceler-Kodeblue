import React from 'react';
import styles from "./Beds.module.css";

// React Icons
import { FaBed } from "react-icons/fa6";

const Beds = () => {
  return (
    <div className={styles.beds__card}>
        <div className={styles.card__head}>
            <span style={{ backgroundColor: '#EEF0FB' }} ><FaBed fontSize={21} color='#6541CD'/></span>
            <p>Beds</p>
        </div>
        <div className={styles.card__main}>
            <div className={styles.beds__show}>
                <p>Total Beds</p>
                <div className={styles.beds__count}>
                    <button type="button" disabled title='Decrease (-)'>-</button>
                    <h3>-</h3>
                    <button type="button" disabled title='Increse (+)'>+</button>
                </div>
            </div>
            <div className={styles.beds__show}>
                <p>Used Beds</p>
                <div className={styles.beds__count}>
                    <button type="button" disabled title='Decrease (-)'>-</button>
                    <h3>-</h3>
                    <button type="button" disabled title='Increse (+)'>+</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Beds