import styles from "./home.module.css";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import {IoGlobeOutline ,IoPieChartSharp ,IoStatsChartSharp ,IoLayers } from "react-icons/io5";
import { LiaMailBulkSolid , LiaCertificateSolid } from "react-icons/lia";
import { RiMailCheckLine } from "react-icons/ri";
import { IoIosAdd , IoMdTime, IoMdSettings } from "react-icons/io";
import Button from '@mui/material/Button';
import { BsThreeDots } from "react-icons/bs";
import { FaHome, FaBars, FaPlusCircle } from "react-icons/fa";
import { GrPieChart , GrView } from "react-icons/gr";
import { FiBox } from "react-icons/fi";
import { LuBox } from "react-icons/lu";

export default function Home() {
  const [showOptions, setShowOptions] = useState(false);
  const handleClick = () => {
    setShowOptions(!showOptions);
  }
  return (
    <div className={styles.container}>
       <p class={styles.p1}>  All Brands </p>
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
        {/* mid container */}
        <div className={styles.midContainer}>
        <div className={styles.leftmidContainer}>
          < Button  style={{ height: '30px' }} variant="outlined" size="small" startIcon={<IoIosAdd />}>
           Add New Brand
          </Button>
        </div>
        <div className={styles.righttmidContainer}>
  <input type= "text"
   id='search' 
   className={styles.midText}
  />
  <Button 
    style={{ height: '30px', marginLeft: '5px' }} // Adjust marginLeft to remove spacing
    for = "serach"
    variant="outlined" 
    size="small" 
  >
    Search Brand
  </Button>
</div>
  </div>
        <div className={styles.lastContainer}>
        <div className={styles.leftlastContainer}>
        Brand
        </div>
       <span>Send Via</span>
        <BsThreeDots />
        </div>
        {/* mid container End */}
        <div className={styles.freelance} > 
        <FiBox /> FreeLancer Auto Bidder</div>
      <div className={styles.bottomContainer}>
      <div className={styles.bleftContainer}>
      < FaHome  />
      < FaPlusCircle/>
      < IoLayers />
      < IoStatsChartSharp />
      < GrPieChart />
        </div>
        <div className={styles.brightContainer}>
        <LuBox  className={styles.lubox}  />

         <div className={styles.fabars} onClick={handleClick}>
        <FaBars />
      {showOptions && (
        <div className={styles.dropdown}>
          <Link to="/edit"><GrView /> View</Link>
          <Link to="/editbrand"><IoMdSettings /> Brand Setting</Link>
        </div>
      )}
      </div>
        </div>

      </div>
    </div>
  )
} 
