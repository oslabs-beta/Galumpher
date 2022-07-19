import React from 'react';
import { useState } from 'react';

import CPU from './cpu';
import Memory from './memory';
import InputOutput from './InputOutput';
import Swap from './swap';
import { UserData } from './data';

const MetricsContainer = () => {
  const [userData, setUserData] = useState({
    // labels = x axis
    labels: UserData.map((data) => data.year),
    datasets: [{
      label: 'DeepFake Data',
      // data = y-axis
      data: UserData.map((data) => data.userGain),
      // backgroundColor = color of each individual bar/dot/slice
      backgroundColor: [  
        'rgba(75,192,192,1)',
        '#ecf0f1',
        '#50AF95',
        '#f3ba2f',
        '#2a71d0'
      ],
      borderColor: 'grey',
      borderWidth: 2
    }]
  });



  return (
    <div className="metrics-container">
      {/* <h2>This is the Metrics Container</h2> */}
      < CPU chartData={userData}/>
      < Memory chartData={userData}/>
      < InputOutput chartData={userData}/>
      < Swap chartData={userData}/>
    </div>
  );
};

export default MetricsContainer;