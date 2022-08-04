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

const InputOutput = ({chartData:chartData}) => {

  return (
    <div className='input-output'>
      <h5>Input/Output</h5>
      < Line data={chartData}/>
    </div>
  );
};


export default InputOutput;