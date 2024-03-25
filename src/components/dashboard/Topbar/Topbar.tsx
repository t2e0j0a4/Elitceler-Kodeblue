'use client';
import React, { useEffect, useRef, useState } from 'react'
import styles from "./Topbar.module.css";

// React Icons
import { FaRegBell } from "react-icons/fa";
import Image from 'next/image';

const Topbar = ({mainTitle} : {mainTitle: string}) => {

    const [showNotificationModal, setShowNotificatonModal] = useState(false);

    const selectRef = useRef<HTMLDivElement | null>(null);

    const handleClickOutside = (event: MouseEvent) => {
        console.log(event.target);
        if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
            setShowNotificatonModal(false);
        }
    };

    useEffect(() => {
            document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className={styles.app__topbar}>
            <div className={styles.topbar__center}>
                <h1>{mainTitle}</h1>
                <div className={styles.topbar__options}>
                    <div className={styles.notifications} ref={selectRef}>
                        <button type='button' title='Notifications' onClick={() => {
                            setShowNotificatonModal(!showNotificationModal);
                        }} ><FaRegBell fontSize={20} /></button>
                        <div className={`${styles.notify__modal} ${showNotificationModal && styles.open__modal}`}>
                            Notifications adding soon...
                        </div>
                    </div>
                    <div className={styles.hospital__name}>
                        <Image src="/others/Building.svg" alt='Hospital' width={48} height={48} />
                        <div>
                            <p>Hospital Name</p>
                            <span>Management</span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Topbar