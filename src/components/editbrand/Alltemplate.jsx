import React from 'react';
import CAlltemplate from '../childcomponents/CAlltemplate';
import styles from './alltemplate.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsThreeDots } from 'react-icons/bs';

export default function Alltemplate() {
  return (
    <div className={styles.mcontainer}>
      <div className={styles.header}>Alltemplate</div>
      <button type="button" className="btn btn-info btn-block" style={{ marginTop: '10px', marginBottom: '10px' }}>
        + Add New Template
      </button>
      <div className="d-flex justify-content-between border-bottom border-secondary ">
        Template Name
        <BsThreeDots />
      </div> 
      <CAlltemplate data="[Major update] Freelance Auto Bidding Bot" />
      <CAlltemplate data="FreeLancer Auto Bidder" />
      <CAlltemplate data="FreeLancer Auto Bidder" />
      <CAlltemplate data="[Final Reminder]FreeLancer Auto Bidder - Here is your 60% Discount" />
      <CAlltemplate data="[Final Reminder]FreeLancer Auto Bidder - Here is your 60% Discount" />
      <CAlltemplate data="[Final Reminder]FreeLancer Auto Bidder - Here is your 70% Discount" />  
    </div>
  );
}
