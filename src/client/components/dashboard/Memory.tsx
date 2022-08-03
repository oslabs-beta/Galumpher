import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
//import { LineType } from '../../../types/globalTypes'
//import type { ChartData, ChartOptions } from 'chart.js';

// eslint-disable-next-line react/prop-types
const Memory = ( { chartData }:any ) => {

  return (
    <div className='memory'>
      <h5>Memory Usage Percentage</h5>
      <Line data={chartData}/>
    </div>
  );
};


export default Memory;