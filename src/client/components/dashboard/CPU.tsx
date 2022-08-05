import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import type { ChartData } from 'chart.js';
ChartJS.register (
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
); 


const Cpu = ({ chartData }:any) => {

  return (
    <div className="cpu">
      <h5>CPU Usage Percentage</h5>
      < Line data={chartData} />
    </div>
  );
};


export default Cpu;