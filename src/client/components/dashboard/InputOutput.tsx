import React from 'react';
import { Chart, Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { ChartData } from 'chart.js';
//import 'chart.js/auto';

// eslint-disable-next-line react/prop-types
const InputOutput = ({ chartData }:any) => {

  return (
    <div className='input-output'>
      <h5>Input/Output</h5>
      < Line data={chartData}/>
    </div>
  );
};


export default InputOutput;