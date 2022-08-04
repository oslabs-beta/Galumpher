import React from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';


const InputOutput = ({ chartData }:any) => {

  return (
    <div className='input-output'>
      <h5>Input/Output</h5>
      < Line data={chartData}/>
    </div>
  );
};


export default InputOutput;