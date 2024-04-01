import React from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import CNewtemplate from "../childcomponents/CNewtemplate";  // Import the First component
import styles from "./newtemplate.module.css";
import Button from '@mui/material/Button';

export default function Newtemplate() {
  return (
    <div>
      <div className={styles.header}>New Template</div>
      <div className={styles.maincontainer}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <div style={{ paddingLeft: "10px" }}>
              <button type="button" className="btn btn-info ">
                + Add New list
              </button>
            </div>
          </div>
          <div className={styles.right}>
            <Button style={{ height: '30px' }} variant="outlined" size="small">
              search compaign
            </Button>
            <input type="text" id='search' className={styles.midText} />
          </div>
        </div>

        <div className={styles.wrapperbottom}>
          <div className={styles.bleft}>
            <div>ID</div>
            <div><IoMdArrowDropdown />list</div>
          </div>
          <div className={styles.bright}>
            <div><IoMdArrowDropdown />active </div>
            <div><IoMdArrowDropdown />sengs</div>
            <div><IoMdArrowDropdown />ARs</div>
            <div><IoMdArrowDropdown />ussubscribe</div>
            <div><IoMdArrowDropdown />Bounce</div>
            <div><IoMdArrowDropdown />...</div>
          </div>
        </div>
      </div>

      {/* Use First component for each footer section */}
      <CNewtemplate
        leftContent={["XZDAd15ewdkifhn", "New list"]}
        rightContent={[
          <div className="badge bg-danger">230</div>,
          <div className="badge bg-warning">0</div>,
          <div className="badge bg-dark">1</div>,
          <div> 0 </div>,
         <div> 5 </div>,
        ]}
      />
      <CNewtemplate
        leftContent={["XZDAd1557dkifhn", "bulk_list"]}
        rightContent={[
          <div className="badge bg-danger">241</div>,
          <div className="badge bg-warning">0</div>,
          <div className="badge bg-dark">6</div>,
          <div> 1 </div>,
          <div> 0 </div>,
        ]}
      />
      <CNewtemplate
        leftContent={["XZDAd175wdkifhn", "New list"]}
        rightContent={[
          <div className="badge bg-danger">414</div>,
          <div className="badge bg-warning">0</div>,
          <div className="badge bg-dark">12</div>,
          <div> 2 </div>,
          <div> 0 </div>,
        ]}
      />
      <CNewtemplate
        leftContent={["XZDAd175wdkifhn", "New list"]}
        rightContent={[
          <div className="badge bg-danger">124</div>,
          <div className="badge bg-warning">1</div>,
          <div className="badge bg-dark">11</div>,
          <div> 2 </div>,
          <div> 0 </div>,
        ]}
      />
    </div>
  );
}
