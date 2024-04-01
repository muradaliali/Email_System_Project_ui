import React from 'react';
import { MdOutlineDehaze } from 'react-icons/md';

const Viewlist = () => {
  return (
    <div className='h-100'>
    <div style={{ display:'flex', color:'dodgerblue',
  fontSize:"larger", fontWeight:'bolder', paddingLeft:'5px', borderBottom:'1px solid'}}>View All List </div>
    <div className="container mt-3">
      <table className="table">
        <thead>
          <tr>
            <th className="solid-bottom">ListName</th>
            <th className="solid-bottom">Autoresponder</th>
            <th className="solid-bottom">Type</th>
            <th className="solid-bottom">Emails Sent</th>
            <th className="solid-bottom">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>  
            <td>Trial Expired</td>
            <td>Freelancer</td>
            <td>drip campaign</td>
            <td>505</td>
            <td><MdOutlineDehaze /></td>
            </tr>
            <tr>
            <td>Trial Expired(copied)</td>
            <td>bulk_list</td>
            <td>drip campaign</td>
            <td>0</td>
            <td><MdOutlineDehaze /></td>
            </tr>
            <tr>
            <td>Trial Expired(cipied)</td>
            <td>new_list</td>
            <td>drip campaign</td>
            <td>0</td>
            <td><MdOutlineDehaze /></td>
            </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Viewlist;
