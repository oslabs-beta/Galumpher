import React from "react";
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';

const Memory = ({chartData}) => {

  return (
    <div className="memory">
      <h5>Memory Usage</h5>
      < Line data={chartData}/>
    </div>
  );
};


export default Memory;