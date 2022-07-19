import React from 'react';
import { useState } from 'react';

import CPU from './cpu';
import Memory from './memory';
import InputOutput from './InputOutput';
import Swap from './swap';
// import { UserData } from './data';


const MetricsContainer = () => {

  const ContainerData = [
    {
      id: 1,
      year: 2016,
      userGain: 45677,
      userLost: 345
    },
    {
      id: 2,
      year: 2017,
      userGain: 45677,
      userLost: 345
    },
    {
      id: 3,
      year: 2018,
      userGain: 78888,
      userLost: 555
    },
    {
      id: 4,
      year: 2019,
      userGain: 90000,
      userLost: 4555
    },
    {
      id: 3,
      year: 2020,
      userGain: 4300,
      userLost: 234
    }
  ];

  // useEffect get fetch request to server->database
    // populate arrays

  // useState for CPU  
  const [userData, setUserData] = useState({
    // labels = x axis
    labels: ContainerData.map((data) => data.year),
    datasets: [{
      label: 'DeepFake Data',
      // data = y-axis
      data: ContainerData.map((data) => data.userGain),
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

  // useState for memory
  // useState for in/out
  // useState swap

  return (
    <div className="metrics-container">
      {/* <h2>This is the Metrics Container</h2> */}
      <button className="update-metrics">Update Metrics</button>
      < CPU chartData={userData}/>
      < Memory chartData={userData}/>
      < InputOutput chartData={userData}/>
      < Swap chartData={userData}/>
    </div>
  );
};

export default MetricsContainer;