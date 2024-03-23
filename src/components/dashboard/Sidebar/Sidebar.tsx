'use client';
import Link from 'next/link';
import Image from 'next/image';
import React, { useContext, useState } from 'react';
import styles from "./Sidebar.module.css";

// Next Client
import { usePathname } from 'next/navigation';

// React Icons
import { RiUserAddLine } from "react-icons/ri";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { TbActivityHeartbeat } from "react-icons/tb";
import { MdLogout, MdOutlineDashboard } from "react-icons/md";
import { IoHelpSharp, IoSettingsOutline } from "react-icons/io5";

// Context API
import { AppContext } from '@/context/AppContext';
import { AppContextTypes } from '@/types/context';

const Sidebar = () => {

  const pathName = usePathname();

  const [toggleSubMenu, setToggleSubMenu] = useState({
    cases: false,
    staff: false
  });

  const appContext = useContext(AppContext) as AppContextTypes;
  const { toggleSidebar, setToggleSidebar } = appContext;

  return (
    <aside className={`${styles.app__sidebar} ${toggleSidebar && styles.toggle__sidebar}`}>
      <div className={styles.sidebar__center}>

        {/* Logo */}
        
        <div className={styles.sidebar__logo}>
          <Image src={"/others/Kodeblue.svg"} alt='Kodeblue' width={210} height={40} priority={false} />
          <button className={toggleSidebar ? styles.move__out : ''} type="button" onClick={() => {setToggleSidebar(!toggleSidebar)}} title='Close Sidebar'><FaAngleDoubleLeft fontSize={18} /></button>
        </div>

        {/* Logo */}

        {/* Menu Stand - 1 */}

        <div className={styles.sidebar__menu}>

          <p>MAIN</p>

          <ul className={styles.main__menu}>

            <li onClick={() => {setToggleSubMenu({cases: false, staff: false})}} className={styles.menu__item}><Link href="/dashboard" className={pathName === '/dashboard' ? styles.active__page : ''}><MdOutlineDashboard fontSize={21}/><span>Dashboard</span></Link></li>

            <li className={styles.menu__item}>
              <button type="button" className={pathName.includes('cases') ? styles.active__page : ''} onClick={() => {setToggleSubMenu({cases: !toggleSubMenu.cases, staff: false})}}><TbActivityHeartbeat fontSize={21}/><span>Cases</span></button>
              <ol className={`${styles.sub__menu} ${toggleSubMenu.cases && styles.active__submenu}`}>
                <li><Link className={pathName === '/dashboard/livecases' ? styles.active__page : ''} tabIndex={toggleSubMenu.cases ? 0 : -1} href="/dashboard/livecases"><span>Live Cases</span></Link></li>
                <li><Link className={pathName === '/dashboard/newcases' ? styles.active__page : ''} tabIndex={toggleSubMenu.cases ? 0 : -1} href="/dashboard/newcases"><span>New Cases</span></Link></li>
              </ol>
            </li>

            <li className={styles.menu__item}>
              <button type="button" className={(pathName.includes('doctors') || pathName.includes('paramedics')) ? styles.active__page : ''} onClick={() => {setToggleSubMenu({cases: false, staff: !toggleSubMenu.staff})}}><RiUserAddLine fontSize={21}/><span>Staff</span></button>
              <ol className={`${styles.sub__menu} ${toggleSubMenu.staff && styles.active__submenu}`}>
                <li><Link className={pathName === '/dashboard/doctors' ? styles.active__page : ''} tabIndex={toggleSubMenu.staff ? 0 : -1} href="/dashboard/doctors"><span>Doctors</span></Link></li>
                <li><Link className={pathName === '/dashboard/paramedics' ? styles.active__page : ''} tabIndex={toggleSubMenu.staff ? 0 : -1} href="/dashboard/paramedics"><span>Paramedics</span></Link></li>
              </ol>
            </li>

          </ul>

        </div>

        {/* Menu Stand - 1 */}

        {/* Menu Stand - 2 */}

        <div className={styles.sidebar__menu}>
          
          <p>HELP & SETTINGS</p>

          <ul className={styles.main__menu}>

            <li onClick={() => {setToggleSubMenu({cases: false, staff: false})}} className={styles.menu__item}><Link href="/dashboard/helpcenter"><IoHelpSharp fontSize={21}/><span>Help & Center</span></Link></li>

            <li onClick={() => {setToggleSubMenu({cases: false, staff: false})}} className={styles.menu__item}><Link href="/dashboard/settings"><IoSettingsOutline fontSize={21}/><span>Settings</span></Link></li>

          </ul>

        </div>

        {/* Menu Stand - 2 */}

      </div>

      <div className={styles.sidebar__logout}>
        <button type="button"><MdLogout fontSize={21}/><span>Logout</span></button>
      </div>

    </aside>
  )
}

export default Sidebar