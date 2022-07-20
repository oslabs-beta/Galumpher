import React from 'react';
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';
// import Chart from 'chart.js';

const CPU = ({chartData}) => {

  return (
    <div className="cpu">
      <h5>CPU Usage</h5>
      < Bar data={chartData}/>
    </div>
  );
};


export default CPU;