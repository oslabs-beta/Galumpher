import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import CPU from './cpu';
import Memory from './memory';
import InputOutput from './InputOutput';
// import Swap from './swap';
import { dummyData } from './data';


const MetricsContainer = () => {
  console.log(dummyData);

  useEffect(() => {
    fetch('/containers/stats', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }).then((data) => data.json())
      .then( res => {
    res = res.reverse();
    console.log(res);
    const createArr = [];
    const cpuArr = [];
    const memArr = [];
    const ioArr = [];
    const userOutput = [];

    for (let i = 0; i < res.length; i++) {
      console.log('entered loop');
      createArr.push(res[i].created_at);
      cpuArr.push(res[i].cpu_perc);
      memArr.push(res[i].memory_perc);
      ioArr.push(res[i].net_input);
      userOutput.push(res[i].net_output);
    }
    console.log(createArr);
    console.log(cpuArr);
    console.log(memArr);
    console.log(ioArr);

    setUserCpu({
      labels:createArr,
      datasets:[{
        label: 'CPU Percentage',
        data:cpuArr,
        fill: true,
        backgroundColor: [
          '#355070'
        ],
        borderColor: 'grey',
        borderWidth: 2
      },
      ]
    });
    setUserMemory({
      labels:createArr,
      datasets:[{
        label: 'Memory Percentage',
        data:memArr,
        fill: true,
        backgroundColor: [
          '#6d597a'
        ],
        borderColor: 'grey',
        borderWidth: 2
      }]
    });
    setUserIO({
      labels:createArr,
      datasets:[{
        label: 'Net Input',
        data:ioArr,
        fill: true,
        backgroundColor: [
          '#e56b6f'
        ],
        borderColor: 'grey',
        borderWidth: 2
      },
      {
        label: 'Net output',
        // data = y-axis
        //pass in memArr
        data: userOutput,
        fill: true,
        backgroundColor: [  
          '#b56576'
        ],
        borderColor: 'grey',
        borderWidth: 2
      }]
    });
    
      }
      );
  }, []);
  

    // initial states
  const [userCpu,setUserCpu] = useState({
    //passing in created_at array
    labels: [],
    datasets: [{
      label: 'CPU Percentage',
      // data = y-axis
      //passing in cpuArr
      data:[],
      fill: true,
      backgroundColor: [
        '#355070'
      ],
      borderColor: 'grey',
      borderWidth: 2
    }]
  });

  //Memory graph and state
  const [userMemory,setUserMemory] = useState({
    //pass in created_at array
    labels: [],
    datasets: [{
      label: 'Memory Percentage',
      // data = y-axis
      //pass in memArr
      data: [],
      fill: true,
      backgroundColor: [
        '#6d597a'
      ],
      borderColor: 'grey',
      borderWidth: 2
    }]
  });
  //InputOutput graph and state
  const [userIO,setUserIO] = useState({
    //
    labels: [],
    datasets: [{
      label: 'Net Input',
      // data = y-axis
      data: [],
      fill: true,
      backgroundColor: [
        '#b56576'
      ],
      borderColor: 'grey',
      borderWidth: 2
    },
    {
      label: 'Net output',
      // data = y-axis
      //pass in memArr
      data: [],
      fill: true,
      backgroundColor: [  
        '#e56b6f'
      ],
      borderColor: 'grey',
      borderWidth: 2
    }
    ]
  });
  //Swap graph and state
  //   const [userSwap,setUserSwap] = useState({
  //     labels: [],
  //     datasets: [{
  //       label: 'Container Swap',
  //       // data = y-axis
  //       data: [],
  //       // backgroundColor = color of each individual bar/dot/slice
    
  //       backgroundColor: [  
  //         '#f0ecf6',
  //         '#e1d9ec',
  //         '#d3c5e3',
  //         '#c4b2d9',
  //         '#b59fd0',
  //         '#a68cc6',
  //         '#9779bd',
  //         '#8965b3',
  //         '#7a52aa',
  //         '#6b3fa0'
  //       ],
  //       borderColor: 'grey',
  //       borderWidth: 2
  //     }]
  //   });


  // fetch data when Update Metrics button is clicked
  const updateMetrics = () => {
    fetch('/containers/stats', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })

      .then(data => data.json())
      .then(res => {
        res = res.reverse();
    // console.log('RES:', res);
    //loop through data and replace each object in containderData array with incoming objects
    const createdAt = [];

    const cpuPercent = [];
    const memory = [];
    const userInput = [];
    const userOutput = [];

    for (let i = 0; i < res.length; i++) {
      createdAt.push(res[i].created_at);
      cpuPercent.push(res[i].cpu_perc);
      memory.push(res[i].memory_perc);
      userInput.push(res[i].net_input);
      userOutput.push(res[i].net_output);
    }

    setUserCpu({
      labels: createdAt,
      datasets: [{
        label: 'CPU Percentage',
        // data = y-axis
        //pass in memArr
        data: cpuPercent,
        fill: true,
        backgroundColor: [
          '#355070'
        ],
        borderColor: 'grey',
        borderWidth: 2
      }]
    });

    setUserMemory({
      labels: createdAt,
      datasets: [{
        label: 'Memory Percentage',
        // data = y-axis
        //pass in memArr
        data: memory,
        fill: true,
        backgroundColor: [
          '#6d597a'
        ],
        borderColor: 'grey',
        borderWidth: 2
      }]
    });
    setUserIO({
      labels: createdAt,
      datasets: [{
        label: 'Net input',
        // data = y-axis
        //pass in memArr
        data: userInput,
        fill: true,
        backgroundColor: [
          '#e56b6f'
        ],
        borderColor: 'grey',
        borderWidth: 2
      },
      {
        label: 'Net output',
        // data = y-axis
        //pass in memArr
        data: userOutput,
        fill: true,
        backgroundColor: [  
          '#b56576'
        ],
        borderColor: 'grey',
        borderWidth: 2
      }
      ]
    });
  };
  )

    .catch((error) => {
      console.error('Error: ', error);
    });
  };



  return (
    <div className="metrics-container">
      {/* <h2>This is the Metrics Container</h2> */}
      <button className="update-metrics" onClick={updateMetrics}>Update Metrics</button>
      < CPU chartData={userCpu}/>
      < Memory chartData={userMemory}/>
      < InputOutput chartData={userIO}/>
    </div>
  );
};

  

export default MetricsContainer;