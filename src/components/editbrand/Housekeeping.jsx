import styles from "./housekeeping.module.css"; 
import { RiDeleteBin6Line } from "react-icons/ri";
import { TiDownload } from "react-icons/ti";


const Housekeeping = () => {
  return(
  <div className={`p-2 d-flex flex-column ${styles.container}`}>
  <div className={styles.header}>HouseKeeping</div> 
  <div class="d-flex mb-3">
  <div class="p-2">
  <button type="button" class="btn btn-light border">Unconfirmed subscribers</button>
  </div>
  <div class="p-2">
  <button type="button" class="btn btn-light border">unactive subscribers</button>
  </div>
    </div>
 <p class="p-2 border border-primary-subtle bg-info bg-opacity-10">
  Housekeeping for unconfirmed subscribers allows you to bulk
  remove whow signe up to double opt-in lists but did not cleck
  the confirmation link to confirm their subscription
 </p>
    <h5 class="pb-3">unactive subscribers</h5>
   <div class="d-flex justify-content-between  border-2 border-bottom pb-2">
     <div>List </div>
     <div>status</div>
     <div>Did not open</div>
     <div className={styles.pl}>Did not click</div>
   </div>

   <div class="d-flex justify-content-between pb-2">
     <div class="rounded-pill badge  bg-success mt-2">freelancer241</div>
     <div class="rounded-pill badge  bg-warning mt-2 text-primary">inactive</div>
     <div className={`d-flex justify-content-around ${styles.flexgap}`}>
     <div>163</div>
     <div class="text-success"><TiDownload />download</div>
     <div class="text-success"><RiDeleteBin6Line />delete</div>
     </div>
     <div className={`d-flex ${styles.flexgap}`}>  
    <div>163</div>
     <div class="text-danger"><TiDownload /></div>
     <div class="text-danger"><RiDeleteBin6Line /></div>
 
     </div>
   </div>
 </div>
  ); 
};
 
export default Housekeeping;