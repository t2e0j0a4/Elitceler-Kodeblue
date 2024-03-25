import React from 'react';
import styles from "./Stats.module.css";

// React Icons
import { IconType } from 'react-icons';

const Stats = ({MainIcon, title, ShowIcon, stat, dayStat, dayTitle, iconColor, bgColor }: { MainIcon: IconType, title: string, ShowIcon: IconType, stat: number, dayStat: number, dayTitle: string, iconColor: string, bgColor: string }) => {
  return (
    <div className={styles.stats__card}>
      <div className={styles.card__head}>
        <span style={{ backgroundColor: bgColor }} ><MainIcon fontSize={21} color={iconColor}/></span>
        <p>{title}</p>
      </div>
      <div className={styles.card__main}>
        <h3>{stat}</h3>
        <ShowIcon fontSize={32} color={iconColor}/>
      </div>
      <div className={styles.stats__result}>
        <p>{dayTitle}</p><p>{dayStat}</p>
      </div>
    </div>
  )
}

export default Stats;