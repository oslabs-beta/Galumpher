import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend } from 'chart.js';
ChartJS.register( CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend); 

// eslint-disable-next-line react/prop-types
const Cpu = ({ chartData }) => {

  return (
    <div className="cpu">
      <h5>CPU Usage Percentage</h5>
      < Line data={chartData} />
    </div>
  );
};


export default Cpu;