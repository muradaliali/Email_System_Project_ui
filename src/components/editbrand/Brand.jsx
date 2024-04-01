import styles from "./brand.module.css";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

export default function Brand() {
  const [isShowMore, setIsShowMore] = useState(false);
  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };
  const [isShowMore1, setIsShowMore1] = useState(false);
  const toggleReadMoreLess1 = () => {
    setIsShowMore1(!isShowMore1);
  };
  const [isShowMore2, setIsShowMore2] = useState(false);
  const toggleReadMoreLess2 = () => {
    setIsShowMore2(!isShowMore2);
  };
  const [isShowMore3, setIsShowMore3] = useState(false);
  const toggleReadMoreLess3 = () => {
    setIsShowMore3(!isShowMore3);
  };

  const [values, setValues] = useState({
    name: '',
    fname: '',
    email: '',
    replayemail: '',
    logo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (

     <div className={styles.headerFotter}>
      <div className={styles.header}>Edit Brand </div>
      <div className={styles.brandContainer}>

      <div className={styles.leftContainer}>
    <form >
      <label for="name">Brand Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Freelancer Auto Bidder"
          value={values.name}
          onChange={handleChange}
        />
      
      <label for="fname">From Name: </label>
        <input
          type="text"
          id ="fname"
          name="fname"
          placeholder="Freelancer Auto Bidder"
          value={values.fname}
          onChange={handleChange}
          />
      
      <label for="email"> From Email: </label> 
        <input
          type="email"
          id ="email"
          name="email"
          placeholder="muradaligpi@gmail.com"
          value={values.email}
          onChange={handleChange}
          />
      
      <label for="replayemail"> Reply to Email </label>
        <input
          type="email"
          id="replayemail"
          placeholder="muradaligpi@gmail.com"
          name="replayemail"
          value={values.replayemail}
          onChange={handleChange}
          />
     
      <label> Brand Logo: </label>
        <input for="log" className={styles.logoBrand}
          type="file"
          id ="logo"
          name="logo"
          value={values.logo}
          onChange={handleChange}
          />
    </form>
    </div>
      
    <div className={styles.rightContainer}>
    <h2>Brand settings</h2>
    <p>if you want this brand manager by your employee, you can allow them to sent
      newsietter on you behalf. Send them the login details and they will be able to Send
      compaigns, create segments, and manage subcribers.
    </p>

    <button onClick={toggleReadMoreLess} className={styles.button}>
  <div className={styles.buttonContent}>
  {isShowMore ? (
  <div>
    <IoIosArrowDown /> Employee Login Details
  </div>
) : (
  <div>
    <IoIosArrowForward /> Employee Login Details
  </div>
)}  </div>
</button>

    {isShowMore && (
    <div className={styles.loginDetail}>
  <div className={styles.inputRow}>
    <label>Login URL:</label>
    <span>https://marketting.frelancerautobidding.com</span>
  </div>
  <div className={styles.inputRow}>
    <label for="login">Login Email:</label>
    <input type="text" id="login" placeholder="name@domain.com" />
  </div>
  <div className={styles.inputRow}>
    <label>Password:</label>
    <span>Generate new password</span>
  </div>
  <div className={styles.inputPara}>two-factor authentication of currently 
  (two -factor authentication can only be enable by the brand while 
  login into new account!)</div>
  <div className={styles.inputRow}>
    <label for="language">Language:</label>
   </div>
   <select type="dropdown" id="language" >
  <option value="english">english</option>
  <option value="urdu">urdu</option>
  <option value="chines">chines</option>
</select>
</div> )}
{/* here was toogle*/}
<button onClick={toggleReadMoreLess1} className={styles.button}>
  <div className={styles.buttonContent}>
    {isShowMore1 ? (
  <div>
    <IoIosArrowDown /> Employee privileges
  </div>
) : (
  <div>
    <IoIosArrowForward /> Employee privileges
  </div>
)}
  </div>
</button>

{isShowMore1 && (
<div className={styles.empPrivileges} >
    <div className={styles.firstPara} >
    by default,you employee will have full aceess to the brand so they
    can manage lists, subscriber, campaigns, templates and see reports 
    you can hower adjust thede priviligese below.
    </div>
    <div className={styles.secondPara} >
      <ul>
      <li>Employee can access campaigns</li>
      <li>Employee can access templates</li>
      <li>Employee can access lists and subscribers</li>
      <li>Employee can access campaigns reports</li>
      </ul>
    </div>
  </div> )}

  <button onClick={toggleReadMoreLess2} className={styles.button}>
  <div className={styles.buttonContent}>
    {isShowMore2 ? (
  <div>
    <IoIosArrowDown /> Compaign Sent Notification
  </div>
) : (
  <div>
    <IoIosArrowForward /> Compaign Sent Notification
  </div>
)}
  </div>
</button>

{isShowMore2 && (
  <div className={styles.compaignSent} >
    <div className={styles.firstPara} >
    wha a compaign is sent successfully, a compaign sent email notification 
    is sent to the 'From email' address that was used to send out the compaing.
    if you want the same email notification to be sent to you main login email
    address as well so thath your notified each time you employee sends out a 
    compaign, check the box bellow.
    </div>
    <div className={styles.secondPara} >
      <ul>
      <li>Send email notification to my main login email</li>
      <li>(freelancerautobidder@gmail.com)</li>
      </ul>
    </div>
  </div>
      )}
  <div>
    <button className={styles.saveButton}>Save</button>
  </div>
    </div>
    </div> 
    <button onClick={toggleReadMoreLess3} className={styles.button}>
  <div className={styles.buttonContent}>
  {isShowMore3 ? (
  <div>
    <IoIosArrowDown /> Google reCAPTCHA v2 
  </div>
) : (
  <div>
    <IoIosArrowForward /> Google reCAPTCHA v2 
  </div>
)}  </div>
</button>

    {isShowMore3 && (

  <div className={styles.fotter}>
  <div className={styles.fotterPara} >
   you can use Google's reCAPTCHA v2 to protect your subscription forms spam
   boots. To enable, register your site on   Google's reCAPTCHA website 
   and select reCAPTCHA v2 " I'm not a robot" to get your "site key and "Secret 
   Key", then paste them below. reCAPTCHA will be disabled if the following fields
   are empty.
    </div>
  <div className={styles.fotterInput}>
    <label for="sitekey">Site Key</label>
    </div> 
    <input type="text" id="sitekey" placeholder="name@domain.com" />
  <div className={styles.fotterInput}>
    <label for="secretkey">Secret Key</label>
    </div> 
    <input type="text" id="secretkey" placeholder="name@domain.com" />
  </div> )}

</div> 

  )
}

