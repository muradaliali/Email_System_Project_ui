import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { IoSettingsOutline } from "react-icons/io5";
import { CiShoppingTag, CiWallet } from "react-icons/ci";
import { RiLogoutCircleLine } from "react-icons/ri";
import { LuArrowDownCircle } from "react-icons/lu";
import { ImPriceTag } from "react-icons/im";
import { MdSettings } from "react-icons/md";

export default function Navbar() {
  const [showOptions, setShowOptions] = useState(false);
  const [showOptions1, setShowOptions1] = useState(false);
  const [showOptions2, setShowOptions2] = useState(false);

  const handleClick = () => {
    setShowOptions(!showOptions);
    setShowOptions1(false);
    setShowOptions2(false);
  }

  const handleClick1 = () => {
    setShowOptions1(!showOptions1);
    setShowOptions(false);
    setShowOptions2(false);
  }

  const handleClick2 = () => {
    setShowOptions2(!showOptions2);
    setShowOptions(false);
    setShowOptions1(false);
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <Link to="/" className={styles.logo}>
            <img src="assets/logo.png" alt="bedding logo" className={styles.logoContainer} />
          </Link>
        </div>
        <div className={styles.right}>
          <span>
            <img src="assets/email.png" alt="mail" className={styles.emailIcon}/>
          </span>
          <span>
            <img src="assets/checkicon.png" alt="checkicon" className={styles.checkIcon}/>
          </span>
          <span>
            <img src="assets/profile.png" alt="profile logo"className={styles.profileContainer}/>
          </span>
          <div className={styles.onSetting}>
            <div className={styles.fabars} onClick={handleClick}>
              <small>Freelancer Auto Bidder</small>
            {showOptions && (
            <div className={styles.dropdown} >
              <Link to="/wallet"><CiWallet /> wallet</Link>
              <Link to="/logout"><RiLogoutCircleLine /> logout </Link>
            </div>
             )}
             </div>
          </div>
        </div>
      </div>    
     
      <div className={styles.ulContainer}>
        <div>
          <div className={styles.rightInside}>
            <span className={styles.brandContainer}>
              <div className={styles.fabars} onClick={handleClick1}>
              <ImPriceTag /> Brand<small> <LuArrowDownCircle /></small>
                {showOptions1 && (
            <div className={styles.dropdown} >
              <Link to="/"><CiShoppingTag  /> Show all Brands</Link>
            </div>
             )}
              </div>
            </span>
            <div>
              <span className={styles.fabars} onClick={handleClick2}>
              <MdSettings /> Setting<small> <LuArrowDownCircle /></small>
                  {showOptions2 && (
            <div className={styles.dropdown} >
              <Link to="/allsetting"><IoSettingsOutline /> All setting</Link>
            </div>
             )}     
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
  ); 
}


