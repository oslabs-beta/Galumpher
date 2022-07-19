import React from "react";
import { Pie } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';

const InputOutput = ({chartData}) => {

  return (
    <div className='input-output'>
      <h5>Input output graph</h5>
      < Pie data={chartData}/>
    </div>
  );
};


export default InputOutput;