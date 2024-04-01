// 
import React, { useState } from 'react';
import styles from "./wallet.module.css"
import {IoGlobeOutline ,IoPieChartSharp } from "react-icons/io5";
import { LiaMailBulkSolid , LiaCertificateSolid } from "react-icons/lia";
import { RiMailCheckLine } from "react-icons/ri";
import { IoMdTime } from "react-icons/io";
import Slider from '@mui/material/Slider';

export default function Wallet() {
  const [slider1Value, setSlider1Value] = useState(0);
  const [slider2Value, setSlider2Value] = useState(0);
  const [totalValue, setTotalValue] = useState(0);
  //updating value
  const [updatedValue1, setUpdatedValue1] = useState(0);
  const [updatedValue2, setUpdatedValue2] = useState(0);

  const handleSlider1Change = (event, newValue) => {
    setSlider1Value(newValue);
    updateTotalValue(newValue, slider2Value);
  };

  const handleSlider2Change = (event, newValue) => {
    setSlider2Value(newValue);
    updateTotalValue(slider1Value, newValue);
  };

  const updateTotalValue = (value1, value2) => {
    const updatedValue1 = 0.0002 * value1; // Update value1
    const updatedValue2 = 0.0050 * value2; // Update value2
    const total = updatedValue1 + updatedValue2;
    setTotalValue(total); // Update total value state
    setUpdatedValue1(updatedValue1); // Update updatedValue1 state
    setUpdatedValue2(updatedValue2); // Update updatedValue2 state

  };
  
  return (
    <div className={styles.container}>
      <div className={styles.tBoxContainer}>
          <div className={styles.box}>
            <div className={styles.box1}>
              <span>Oregons</span>
                <p>SES region</p>
                  </div>
                    <div className={styles.logo}>
                   <IoGlobeOutline />
               </div>
              </div>
              <div className={styles.box}>
            <div className={styles.box1}>
              <span>50,000 </span>
              <p>Daily quota</p>
              </div>
              <div className={styles.logo}>
              <IoPieChartSharp />
              </div>
              </div>
            <div className={styles.box}>
            <div className={styles.box1}>
             <span>49,996</span>
              <p>Sent left</p>
              </div>
              <div className={styles.logo}>
              <LiaMailBulkSolid />
              </div>
              </div>
            <div className={styles.box}>
            <div className={styles.box1}>
              <span>4</span>
              <p>Today Sent</p>
              </div>
              <div className={styles.logo}>
              <RiMailCheckLine />
              </div>
              </div>
            <div className={styles.box}>
            <div className={styles.box1}>
              <span>14 per sec</span>
              <p>Send rate</p>
              </div>
              <div className={styles.logo}>
              <IoMdTime />
              </div>
              </div>
            <div className={styles.box}>
            <div className={styles.box1}>
              <span>1</span>
              <p>Brands</p>
              </div>
              <div className={styles.logo}>
              < LiaCertificateSolid />
              </div>
            </div>
          </div>
                                      {/* buttom container  ...... */}

    <div className={styles.bottomContainer}>
    <div className={styles.leftContainerb}>
     <div className={styles.firstSlider}>
     <span><b>Email Sending Quota</b></span>
     <div className={styles.mail}>
     <span>0</span>
     <p>1000000</p>
     </div>
        <div className={styles.slider}>
          <Slider
            size="medium"
            defaultValue={0}
            step={10000}
            max={1000000}
            aria-label="Small"
            valueLabelDisplay="auto"
            value={slider1Value}
            onChange={handleSlider1Change}
          />
          </div>
     </div>
     <div className={styles.secondSlider}>
      
     <span><b>Email Varification Quota</b></span>
     <div className={styles.mail}>
     <span>0</span>
     <p>1000000</p>
     </div>
        <div className={styles.slider}>
          <Slider
            size="medium"
            defaultValue={0}
            step={10000}
            max={1000000}
            aria-label="medium"
            valueLabelDisplay="auto"
            value={slider2Value}
            onChange={handleSlider2Change}
          />
      </div>
     </div>
    </div>

    <div className={styles.rightContainerb}>
      <div className={styles.mainContant}>
    <div className={styles.contant1}>
    <span><b>@ Total Email Quota : </b> ${updatedValue1}</span> <br></br>
    <span>$ 0.0002/per Email</span> <br></br>
    <span id="rangeValue">Qty: {slider1Value} </span><br></br>
      </div>
    <div className={styles.contant2}>
    <span><b>@ Total Verification Quota: </b> ${updatedValue2}</span> <br></br>
    <span>$ 0.0050/per Verification</span> <br></br>
    <span id="rangeValue1">Qty: {slider2Value}</span> <br></br>
    </div>
    <div className={styles.contant3}>
    <span id="totalValue"><b>$ Total Amount :</b> {totalValue}</span> <br></br>
    </div>

     </div>
     </div>
  

      </div>
   </div>
  )
} 
