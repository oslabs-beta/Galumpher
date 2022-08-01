import React from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';
type chartData = {
  labels?: string[];
  datasets?: [{
    label?: string;
    data?: string[];
    fill?: boolean;
    backgroundColor?: string[]
    borderColor?: string;
    borderWidth?: number;
  }]

}

const Memory = ({chartData:chartData}) => {

  return (
    <div className='memory'>
      <h5>Memory Usage Percentage</h5>
      < Line data={chartData}/>
    </div>
  );
};


export default Memory;