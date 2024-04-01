import React from 'react';
import styles from "../editbrand/newtemplate.module.css";
import { MdReorder } from "react-icons/md";

const CNewtemplate = ({ leftContent, rightContent }) => {
  return (
   
    <div className={styles.fotter}>
    <div className={styles.fleft}>
      {leftContent.map((content, index) => (
        <div key={index}>{content}</div>
      ))}
    </div>
    <div className={styles.fright}>
      {rightContent.map((content, index) => (
        <div key={index}>{content}</div>
      ))}
      <div><MdReorder /></div>
    </div>
  </div>
  );
};

export default CNewtemplate;