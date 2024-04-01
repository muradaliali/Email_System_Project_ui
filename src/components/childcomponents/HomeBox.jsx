// Box.js
import React from 'react';
import styles from "../home/home.module.css"

const HomeBox = ({ title, subtitle, icon }) => {
  return (
    <div className={styles.box}>
      <div className={styles.box1}>
        <span>{title}</span>
        <p>{subtitle}</p>
      </div>
      <div className={styles.logo}>
        {icon}
      </div>
    </div>
  );
};

export default HomeBox;


