import styles from "./editbrand.module.css"; 
import React, { useState } from 'react';
import { IoAddCircleOutline ,IoHomeOutline, IoLayersOutline  } from "react-icons/io5";
import { GrTemplate } from "react-icons/gr";
import { PiGitForkBold,PiHeartbeatBold,PiArrowsLeftRightBold } from "react-icons/pi";
import { FiMinusCircle } from "react-icons/fi";
import { LuSend } from "react-icons/lu";
import { MdOutlineViewList,MdOutlineModeEdit } from "react-icons/md";
import { FaChartLine } from "react-icons/fa6";
import Test from "../test/Test";
import Brand from "./Brand";
import AllCompaign from "./AllCompaign";
import Newcompaign from "./Newcompaign";
import Alltemplate from "./Alltemplate";
import Newtemplate from "./Newtemplate";
import Premiumtemp from "./Premiumtemp";
import Housekeeping from "./Housekeeping";
import Viewlist from "./Viewlist";
import Blacklist from "./Blacklist";


export default function Editbrand() {
  const [pages, setpages] = useState(Array(12).fill(false));

  const handleClick = (index) => {
    const newpages = pages.map((page, i) => i === index ? !page : false);
    setpages(newpages);
  }

  return (
    <div className={styles.container}>
      <div className={styles.novContainer}>
          <h4>Navigation <PiArrowsLeftRightBold className={styles.piArrow}>
          </PiArrowsLeftRightBold>
          </h4>
        <span>ALL CAMPAIGN</span> 
        <div className={styles.pageContainer}>
          <div onClick={() => handleClick(11)}><MdOutlineModeEdit /> Edit-brand</div>
          <div onClick={() => handleClick(0)}><IoHomeOutline /> All Campaign</div>
          <div onClick={() => handleClick(1)}><IoAddCircleOutline /> New campaign</div>
        </div>
        <span>TEMPLATE</span>
        <div className={styles.pageContainer}>
          <div onClick={() => handleClick(2)}><GrTemplate /> All template</div>
          <div onClick={() => handleClick(3)}><PiGitForkBold class={styles.piGiticon}></PiGitForkBold> New template</div>
          <div onClick={() => handleClick(4)}><PiGitForkBold class={styles.piGiticon}></PiGitForkBold> Premium template</div>
        </div>
        <span>LIST & SUBSCRIBER</span>
        <div className={styles.pageContainer}>
          <div onClick={() => handleClick(5)}><IoLayersOutline /> View All List</div>
          <div onClick={() => handleClick(6)}><PiHeartbeatBold /> House keepings</div>
          <div onClick={() => handleClick(7)}><FiMinusCircle /> Black List</div>
        </div>
        <span>RESPONDER</span>
        <div className={styles.pageContainer}>
          <div onClick={() => handleClick(8)}><LuSend /> All Auto Responder</div>
        </div>
          <span>OTHERS</span>
        <div className={styles.pageContainer}>
          <div onClick={() => handleClick(9)}><MdOutlineViewList /> Rules</div>
          </div>
          <span>REPORTS</span>
        <div className={styles.pageContainer}>
          <div onClick={() => handleClick(10)}><FaChartLine /> See Reports</div>
          </div>
          </div>
        {pages.some(page => page) && (
          <div className={styles.dropdown}>
            {pages.map((page, index) => page && (
              <div key={index}>
                {index === 0 && <div><AllCompaign /></div>}
                {index === 1 && <div><Newcompaign /></div>}
                {index === 2 && <div>< Alltemplate /></div>}
                {index === 3 && <div><Newtemplate /></div>}
                {index === 4 && <div><Premiumtemp /></div>}
                {index === 5 && <div><Viewlist /></div>}
                {index === 6 && <div><Housekeeping /></div>}
                {index === 7 && <div><Blacklist /></div>}
                {index === 8 && <div><Test /></div>}
                {index === 9 && <div>Rules page</div>}
                {index === 10 && <div>See Reports page</div>}
                {index === 11 && <><Brand /></>}
              </div>
            ))}
          </div>
        )}
     
    </div>
  );
}

