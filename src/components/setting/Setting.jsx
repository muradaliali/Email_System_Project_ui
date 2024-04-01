import styles from "./setting.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
export default function Setting() {
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
    <div className={styles.container}>
        <div class="container-fluid">
  <div class="row m-1">
    <div class="col-sm-12 col-md-8 ">
    
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

    </div>
    <div class="col-sm-12 col-md-4 bg-secondary">

        Content for 4 columns in medium devices and 12 columns in small devices
      
    </div>
  </div>
</div>

    </div>
  )
}

////////////
