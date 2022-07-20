import React from 'react';
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';

const Memory = ({chartData}) => {

  return (
    <div className='memory'>
      <h5>Memory Usage Percentage</h5>
      < Bar data={chartData}/>
    </div>
  );
};


export default Memory;