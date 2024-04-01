import styles from "./premiumtemp.module.css"; 
import { BarChart, CartesianGrid, XAxis, YAxis, Bar,
  PieChart, Pie, Tooltip 
} from "recharts";

const Premiumtemp = () => {
  const data = [{name: "", pv: 26,}, 
                { name: "", pv: 14,},
                {name: "",pv: 10,}, 
                {name: "activities", pv: 5, },
                { name: "", pv: 8, }, 
                { name: "", pv: 1,},
                { name: "", pv: 2,},
               ];
              // pie data 
              const datab = [
                { name: 'Group A', value: 800 },
                { name: 'Group B', value: 300 },
                { name: 'Group C', value: 300 },
                { name: 'Group D', value: 200 },
                { name: 'Group E', value: 200 },
              ];

  
  return(
    <div className={styles.main}>
    <div className={styles.header}>Auto responder Report  </div>
    <ul >
      <li><h4>Subject: [welcome] Freelancer Auto Bidder Free Trial</h4></li>
      <li><b>autoresponder </b>Trial Expired</li>
      <li><b>type </b>Drip compaign</li>
      <li><b>From </b>Freelance auto bidder  </li>
    </ul>
    <div className={styles.charts}>
  <div className={styles.pieContainer}>
  <PieChart width={400} height={200}>
    <Pie data={datab} dataKey="value"
    isAnimationActive={false} 
    outerRadius={80} 
    fill="#8884d8"
    label 
    />
      <Tooltip />
        </PieChart>
</div>
  <div className={styles.barContainer}>
    <BarChart
      layout="vertical"
      width={700}
      height={200}
      data={data}
      margin={{ top: 1, right: 1, bottom: 1, left: 1,
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

  <div class="d-flex justify-content-around pt-2 bg-light p-2">
  <div class="badge bg-success ml-1 d-flex pb-2">
   10 %
  </div> Open
  <div class="badge bg-danger ml-1 ">
  14 unique/opened18times 
  </div>  
  <div class="badge bg-primary ml-1">
   10 %
  </div> not opened
  <div class="badge bg-warning ml-1">
   8 %
  </div> Clicked a link
  <div class="badge bg-success ml-1">
   1 %
  </div>1 unsubcribed
  <div class="badge bg-success ml-1">
   2 %
  </div> 2 Bounced

</div>
  </div>
  
  ); 
};
 
export default Premiumtemp;