import styles from "./allCompaign.module.css";
import { IoWifi } from "react-icons/io5";
import Button from '@mui/material/Button';
import { IoMdArrowDropdown } from "react-icons/io";
import { IoBug } from "react-icons/io5";
import { MdReorder } from "react-icons/md";
import { IoMailOpenOutline } from "react-icons/io5";

export default function AllCompaign() {

  return (
  <div className={styles.headerFotter}>
  <div className={styles.header}>All Compaign </div>
    <div className={styles.maincontainer}>

    <div className={ styles.wrapper}>
      <div className={styles.left}> 
        < Button  style={{ height: '30px', backgroundColor:'dodgerblue',color:'white'}} 
        variant="outlined" size="small" >
          create &sent new compaign
          </Button></div>
      <div className={styles.right}>
        <div><IoWifi /></div>
        
          <input type= "text"
           id='search' 
          className={styles.midText}
          />
      
        < Button  style={{ height: '30px' }} variant="outlined" size="small" >
          search compaign
          </Button>
      </div>
    </div>


    <div className={styles.wrapperbottom}>
    <div className={styles.bleft}>
      <div>compaign</div>
      <div><IoMdArrowDropdown />internal/tag</div>
    </div>
      <div className={styles.bright}>
        <div><IoMdArrowDropdown />recipient </div>
        <div><IoMdArrowDropdown />sent</div>
        <div><IoMdArrowDropdown />unique opens</div>
        <div><IoMdArrowDropdown />unique click</div>
        <div><IoMdArrowDropdown />...</div>
      </div>
    </div>

    </div>

   <div className={styles.fotter}>
    <div className={styles.fleft}>
      <div>[major update] freelancer auto bidding bot</div>
      <div>freelancer auto biddder bot update</div>
    </div>
      <div className={styles.fright}>
        <div>237 </div>
        <div>3 week ago</div>
        <div>28.043% <IoMailOpenOutline /> 64</div>
        <div>0.42% <IoBug /> 1</div>
        <div><MdReorder /></div>
      </div>

    </div>

</div> 

  )
}

