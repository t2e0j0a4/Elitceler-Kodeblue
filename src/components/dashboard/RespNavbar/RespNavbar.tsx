'use client';
import Image from 'next/image';
import React, { useContext } from 'react'
import styles from "./RespNavbar.module.css";

// React Icons
import { RiMenuUnfoldLine } from "react-icons/ri";

import { AppContext } from '@/context/AppContext';
import { AppContextTypes } from '@/types/context';

const RespNavbar = () => {

    const appContext = useContext(AppContext) as AppContextTypes;
    const { toggleSidebar, setToggleSidebar } = appContext;

    return (
        <nav className={styles.app__respNavbar}>
            <div className={styles.respNavbar__center}>
                <button type="button" onClick={() => {setToggleSidebar(!toggleSidebar)}} title='Main Menu'><RiMenuUnfoldLine fontSize={18}/></button>
                <Image src={"/assets/Kodeblue.svg"} alt='Kodeblue' width={72} height={72} priority={false} />
            </div>
        </nav>
  )
}

export default RespNavbar