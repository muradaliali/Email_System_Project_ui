import React from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Bar, Tooltip 
} from "recharts";

const Blacklist = () => {
  const data = [{name: "", pv: 26,}, 
  { name: "", pv: 150,},
  {name: "",pv: 200,}, 
  {name: "", pv: 50, },
  { name: "", pv: 100, }, 
  { name: "", pv: 20,},
  { name: "", pv: 10,},
 ];
  return (
    <>
      <div class="d-flex flex-column bd-highlight">
      <div class="p-2 bd-highlight">
      
      <li><b>Subject: </b>[Major Update] Freelancer Auto Bidding Bot</li>
      <li><b>From </b>Freelance auto bidder muradali@gmail.com</li>
      <li><b>To </b>List Freelance </li>
  
      </div>
      <div class="d-flex  bd-highlight ">
      <div class="m-1 flex-fill bd-highlight w-50 border">
       <h5>top 10 country</h5>
      <div className="m-1 d-flex">
      <iframe title='country' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12283822.835598765!2d74.34608373514487!3d41.26576735001527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3806008cfd7b4dab%3A0xa84116ec366707a1!2sXinjiang%2C%20China!5e0!3m2!1sen!2s!4v1711517820350!5m2!1sen!2s"
       width="600" height="400" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      </div>

      <div class="m-1 d-flex flex-fill bd-highlight align-items-center w-50 border">
      <div>
      <BarChart
      layout="vertical"
      width={500}
      height={200}
      data={data}
      margin={{ top: 2, right: 1, bottom: 1, left: 1,
        }}
      >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis  type="number"   interval={'preserveStartEnd'}/>
      <YAxis dataKey="name" type="category" />
      <Tooltip />
      <Bar dataKey="pv" stackId="a" fill="#8884d8" label />
    </BarChart> 
    </div>  
      </div>
      </div>
         </div>
    </>
  );
};

export default Blacklist;