import styles from "./newcompaign.module.css";
import React, { useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Button from '@mui/material/Button';

export default function Newcompaign() {
 
  const [values, setValues] = useState({
    iname: '',
    subject: '',
    fname: '',
    email: '',
    replayemail: '',
    logo: '' ,
    plain: '',
    query: ''
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
      <div className={styles.header}>New compaign </div>
      <div className={styles.mainContainer}>

      <div className={styles.leftContainer}>
    <form >
    < Button  style={{ height: '30px', backgroundColor:'dodgerblue',
    color:'white',cursor: 'none' }}  >
          Salect Template
          </Button>
      <label for="iname">Internal Title/Tage </label>
        <input
          type="text"
          id="iname"
          name="iname"
          placeholder="internal title/tage"
          value={values.iname}
          onChange={handleChange}
        />
      <label for="subject">Subject </label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="subject of this email"
          value={values.subject}
          onChange={handleChange}
        />
      
      <label for="fname">From Name </label>
        <input
          type="text"
          id ="fname"
          name="fname"
          placeholder="Freelancer Auto Bidder"
          value={values.fname}
          onChange={handleChange}
          />
      
      <label for="email"> From Email </label> 
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
     
      <label for ="text"> plaine text version </label>
        <textarea cols={27} rows={12}
          id="text" 
          type="text"
          name="plain"
          placeholder="plaine text version of this email"
          value={values.plain}
          onChange={handleChange}
          />

<label for="query"> Query Setting </label>
        <input
          type="text"
          id="query"
          placeholder="eg.utm_source=newsletter$utm-mediu"
          name="query"
          value={values.query}
          onChange={handleChange}
          />
   <label for="language">web version language</label>
   
   <select type="dropdown" id="language" >
  <option value="Don'translate">Don'translate</option>
  <option value="other">other</option>
</select>
<label>Attachments</label>
        <input for="log" className={styles.logoBrand}
          type="file"
          id ="logo"
          name="logo"
          value={values.logo}
          onChange={handleChange}
          />
<label>Track open</label>
<div>
< Button  style={{ height: '30px', backgroundColor:'darkblue',
    color:'white',borderRadius: '0'}}  >
          yes
          </Button>
< Button  style={{ height: '30px', backgroundColor:'navy',
    color:'white',borderRadius: '0'}}  >
          no
          </Button>
< Button  style={{ height: '30px', backgroundColor:'dodgerblue',
    color:'white',borderRadius: '0'}}  >
          anonymousely
          </Button>
          </div>
       
<label>Track click</label>
<div>
< Button  style={{ height: '30px', backgroundColor:'darkblue',
    color:'white',borderRadius: '0'}}  >
          yes
          </Button>
< Button  style={{ height: '30px', backgroundColor:'navy',
    color:'white',borderRadius: '0'}}  >
          no
          </Button>
< Button  style={{ height: '30px', backgroundColor:'dodgerblue',
    color:'white',borderRadius: '0'}}  >
          anonymousely
          </Button>
          </div>      
          
    </form>
    </div>
      
    <div className={styles.rightContainer}>
    <h2>HTML code</h2>
    <span>
    < Button  style={{ height: '30px', backgroundColor:'dodgerblue'
    ,color:'white',cursor:'none'}} >
          Save & Switch to HTML Editor
          </Button>
      Switch to HTML editor if the WYSIWYG editor is 
      causing your newitter to look weird.
    </span>
    
    <div className= {styles.ckeditor} >
     <CKEditor 
       
        editor={ ClassicEditor }
      />
      <button className={styles.saveButton}>Save</button>
  </div>
  {/* inside right container  */}
  <div>Use the following tags in your subject plain text or HTML 
      code and the'll automatically be formatted whe your compaign
      is sent. for web version and unsubscribe tags. you can stlye 
      with inline css.
    </div> 
  <div className={styles.insideright}>
  <div className={styles.left}>
    <h4>Essential tags (HTML only)</h4>
    <div>the following tags can only used on 
      Html version
    </div>
    <label>Webversion Link:</label>
    <span>&lt;webversion&gt;view web version&lt;/webversion&gt;</span>
    <label>Unsubscribe Link:</label>
    <span>&lt;unsubscribe&gt;unsubscribe here&lt;/unsubscribe&gt;</span>
    <h4>Essential tags</h4>
    <div>the following tags can be used on both plain text or
      HTML version
    </div>
    <label>Webversion  Link:</label>
    <span>[Webversion]</span>
    <label>Unsubscribe Link:</label>
    <span>[Unsubscribe]</span>
    <h4>GDPR re-consent tag</h4>
    <div>when requesting your subcriber to re cosent to your
      future compaign, you can use this taf as the re-consent link. 
      Upon clicking this link, the subscriber will tagged with
      GDPR. in your brand setting if you turn on the gDPR state switch,
      future compaign and Autoresponders will only sent ot subcribers 
      tagged with GDPR.
    </div>
    <label>Reconsent Link:</label>
    <span>[reconsent]</span>

  </div>
  <div className={styles.right}>
    <h4>Personalization tags</h4>
    <div>the following tags can be used on both plan text or
      Html version
    </div>
  <label>Name:</label>
  <span>[name,fallback=] Or [name]</span>
  <label>Email:</label>
  <span>[email]</span>
  <label>Two digit day of the month(eg.01 to 31):</label>
  <span>[currentdaynumber]</span>
  <label>A full textual representation of the day(eg.Friday):</label>
  <span>[currentday]</span>
  <label>two digit representation of the month(eg.01 to 12):</label>
  <span>[currentmonthnumber]</span>
  <label>full month name(eg.May):</label>
  <span>[currentmonth]</span>
  <label>Four digit representation of the year(eg.2041):</label>
  <span>[currentyear]</span>
  <h4>Custom field tags</h4>
  <div>
    you can also use sustom fields to personalize you newsietter 
    to manage or get a refrence of tags from custom fields go to 
    any subscriber list . then click customer fields' buttom at the 
    top right.
  </div>

  </div>
  </div>
    {/* end inside right container */}
  </div>
    </div> 
</div> 

  )
}
