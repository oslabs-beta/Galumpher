import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import CPU from './cpu';
import Memory from './memory';
import InputOutput from './InputOutput';
// import Swap from './swap';
// import { dummyData } from './data';

//make fetch request in here here to server 
//receiving a JSON from the server
//need to test

//net io amount of data the container has sent and recieved 
//block io the amount of data the container has read to write from the devices on the host

//wrap with the use effect hook to be on load
//declare state up here
// {
//   container_name: 'first container',
//   container_id: '57',
//   cpu_percent: 0.04,
//   avg_cpu: 0.04,
//   mem_usage: 51.45,
//   mem_Limit: 2114.56,
//   mem_percent: 2.49,
//   net_input: 0.001,
//   net_output: 0.003,
//   block_input: 59.45,
//   block_output: 0.008,
//   pids: 35,
//   created_at: 2022-07-19 16:02:51 +0000
// }



const MetricsContainer = () => {
  //wrap with the use effect hook to be on load
  //declare state up here

  const res = [
    {
      'id': 9,
      'container_name': 'practical_sanderson',
      'container_id': 'a0b0f0dfc386',
      'cpu_perc': '0.88',
      'avg_cpu_perc': '0.88',
      'mem_usage': '51.03',
      'mem_limit': '2114.56',
      'memory_perc': '2.47',
      'net_input': '0.0008',
      'net_output': '0.0018',
      'block_input': '57.95',
      'block_output': '0.008',
      'pid': 31,
      'created_at': '2022-07-21T02:25:37.115Z'
    },
    {
      'id': 8,
      'container_name': 'practical_sanderson',
      'container_id': 'a0b0f0dfc386',
      'cpu_perc': '0.33',
      'avg_cpu_perc': '0.33',
      'mem_usage': '50.75',
      'mem_limit': '2114.56',
      'memory_perc': '2.46',
      'net_input': '0.0009',
      'net_output': '0.002',
      'block_input': '57.95',
      'block_output': '0.008',
      'pid': 31,
      'created_at': '2022-07-21T02:02:41.010Z'
    },
    {
      'id': 7,
      'container_name': 'practical_sanderson',
      'container_id': 'a0b0f0dfc386',
      'cpu_perc': '0.37',
      'avg_cpu_perc': '0.37',
      'mem_usage': '50.75',
      'mem_limit': '2114.56',
      'memory_perc': '2.46',
      'net_input': '0.0009',
      'net_output': '0.002',
      'block_input': '57.95',
      'block_output': '0.008',
      'pid': 31,
      'created_at': '2022-07-21T02:01:52.319Z'
    },
    {
      'id': 6,
      'container_name': 'practical_sanderson',
      'container_id': 'a0b0f0dfc386',
      'cpu_perc': '0.45',
      'avg_cpu_perc': '0.45',
      'mem_usage': '50.74',
      'mem_limit': '2114.56',
      'memory_perc': '2.46',
      'net_input': '0.0009',
      'net_output': '0.002',
      'block_input': '57.95',
      'block_output': '0.008',
      'pid': 31,
      'created_at': '2022-07-21T02:00:36.114Z'
    },
    {
      'id': 5,
      'container_name': 'practical_sanderson',
      'container_id': 'a0b0f0dfc386',
      'cpu_perc': '0.76',
      'avg_cpu_perc': '0.76',
      'mem_usage': '50.73',
      'mem_limit': '2114.56',
      'memory_perc': '2.46',
      'net_input': '0.0008',
      'net_output': '0.0018',
      'block_input': '57.95',
      'block_output': '0.008',
      'pid': 31,
      'created_at': '2022-07-21T01:58:12.755Z'
    },
    {
      'id': 4,
      'container_name': 'practical_sanderson',
      'container_id': 'a0b0f0dfc386',
      'cpu_perc': '1.05',
      'avg_cpu_perc': '1.05',
      'mem_usage': '50.72',
      'mem_limit': '2114.56',
      'memory_perc': '2.46',
      'net_input': '0.0008',
      'net_output': '0.0018',
      'block_input': '57.95',
      'block_output': '0.008',
      'pid': 31,
      'created_at': '2022-07-21T01:57:16.253Z'
    },
    {
      'id': 3,
      'container_name': 'practical_sanderson',
      'container_id': 'a0b0f0dfc386',
      'cpu_perc': '1.77',
      'avg_cpu_perc': '1.77',
      'mem_usage': '50.72',
      'mem_limit': '3.64',
      'memory_perc': '2.46',
      'net_input': '0.0008',
      'net_output': '0.0017',
      'block_input': '57.95',
      'block_output': '0.008',
      'pid': 31,
      'created_at': '2022-07-21T01:56:16.258Z'
    },
    {
      'id': 2,
      'container_name': 'practical_sanderson',
      'container_id': 'a0b0f0dfc386',
      'cpu_perc': '3.83',
      'avg_cpu_perc': '3.83',
      'mem_usage': '50.72',
      'mem_limit': '3.64',
      'memory_perc': '2.46',
      'net_input': '0.0007',
      'net_output': '0.0015',
      'block_input': '57.95',
      'block_output': '0.008',
      'pid': 31,
      'created_at': '2022-07-21T01:55:28.853Z'
    },
    {
      'id': 1,
      'container_name': 'practical_sanderson',
      'container_id': 'a0b0f0dfc386',
      'cpu_perc': '4.94',
      'avg_cpu_perc': '4.94',
      'mem_usage': '50.72',
      'mem_limit': '3.64',
      'memory_perc': '2.46',
      'net_input': '0.0007',
      'net_output': '0.0015',
      'block_input': '57.95',
      'block_output': '0.008',
      'pid': 31,
      'created_at': '2022-07-21T01:55:20.193Z'
    }
  ];



  useEffect(() => {
    fetch('/containers/stats', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then( res => {
        console.log(res);
        const createArr = [];
        const cpuArr = [];
        const memArr = [];
        const ioArr = [];
        for (let i = 0; i < res.length; i++) {
          console.log('entered loop');
          createArr.push(res[i].created_at);
          cpuArr.push(res[i].cpu_perc);
          memArr.push(res[i].memory_perc);
          ioArr.push(res[i].net_input);
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
            backgroundColor: [
              '#f0ecf6',
              '#e1d9ec',
              '#d3c5e3',
              '#c4b2d9',
              '#b59fd0',
              '#a68cc6',
              '#9779bd',
              '#8965b3',
              '#7a52aa',
              '#6b3fa0'
            ],
            borderColor: 'grey',
            borderWidth: 2
          }]
        });
        setUserMemory({
          labels:createArr,
          datasets:[{
            label: 'Memory Percentage',
            data:memArr,
            backgroundColor: [
              '#f0ecf6',
              '#e1d9ec',
              '#d3c5e3',
              '#c4b2d9',
              '#b59fd0',
              '#a68cc6',
              '#9779bd',
              '#8965b3',
              '#7a52aa',
              '#6b3fa0'
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
            backgroundColor: [
              '#f0ecf6',
              '#e1d9ec',
              '#d3c5e3',
              '#c4b2d9',
              '#b59fd0',
              '#a68cc6',
              '#9779bd',
              '#8965b3',
              '#7a52aa',
              '#6b3fa0'
            ],
            borderColor: 'grey',
            borderWidth: 2
          }]
        });
    
      },[]);
  });
  

  // fetch get request to server will return an array of objects
  // loop through incoming array of objects
  // push values of created_at into labels array
  // push values of each property into datasets.data array

  // should initialize labels and datasets.data to empty arrays

  const [userCpu,setUserCpu] = useState({
    //passing in created_at array
    labels: [],
    datasets: [{
      label: 'CPU Percentage',
      // data = y-axis
      //passing in cpuArr
      data:[],
      // backgroundColor = color of each individual bar/dot/slice
      backgroundColor: [  
        '#f0ecf6',
        '#e1d9ec',
        '#d3c5e3',
        '#c4b2d9',
        '#b59fd0',
        '#a68cc6',
        '#9779bd',
        '#8965b3',
        '#7a52aa',
        '#6b3fa0'
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
      // backgroundColor = color of each individual bar/dot/slice
      //we need to add 10 colors here 
      backgroundColor: [  
        '#f0ecf6',
        '#e1d9ec',
        '#d3c5e3',
        '#c4b2d9',
        '#b59fd0',
        '#a68cc6',
        '#9779bd',
        '#8965b3',
        '#7a52aa',
        '#6b3fa0'
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
      // backgroundColor = color of each individual bar/dot/slice
      backgroundColor: [  
        '#f0ecf6',
        '#e1d9ec',
        '#d3c5e3',
        '#c4b2d9',
        '#b59fd0',
        '#a68cc6',
        '#9779bd',
        '#8965b3',
        '#7a52aa',
        '#6b3fa0'
      ],
      borderColor: 'grey',
      borderWidth: 2
    }]
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
    // console.log(res);
    // console.log('hi');
    //     console.log(dataF);
    // fetch('/containers/stats', {
    //   method: 'GET',
    //   headers: { 'Content-Type': 'application/json' },
    // })

    //   .then(res => {
    //     console.log(res);
    //     res.json();
    //   })
    //   .then(data => {
    //loop through data and replace each object in containderData array with incoming objects
    const createdAt = [];

    const cpuPercent = [];
    const memory = [];
    const userIO = [];

    for (let i = 0; i < res.length; i++) {
      createdAt.push(res[i].created_at);
      cpuPercent.push(res[i].cpu_perc);
      memory.push(res[i].memory_perc);
      userIO.push(res[i].net_input);
    }

    setUserCpu({
      labels: createdAt,
      datasets: [{
        label: 'Memory Percentage',
        // data = y-axis
        //pass in memArr
        data: cpuPercent,
        // backgroundColor = color of each individual bar/dot/slice
        //we need to add 10 colors here 
        backgroundColor: [  
          '#f0ecf6',
          '#e1d9ec',
          '#d3c5e3',
          '#c4b2d9',
          '#b59fd0',
          '#a68cc6',
          '#9779bd',
          '#8965b3',
          '#7a52aa',
          '#6b3fa0'
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
        // backgroundColor = color of each individual bar/dot/slice
        //we need to add 10 colors here 
        backgroundColor: [  
          '#f0ecf6',
          '#e1d9ec',
          '#d3c5e3',
          '#c4b2d9',
          '#b59fd0',
          '#a68cc6',
          '#9779bd',
          '#8965b3',
          '#7a52aa',
          '#6b3fa0'
        ],
        borderColor: 'grey',
        borderWidth: 2
      }]
    });
    setUserIO({
      labels: createdAt,
      datasets: [{
        label: 'Memory Percentage',
        // data = y-axis
        //pass in memArr
        data: userIO,
        // backgroundColor = color of each individual bar/dot/slice
        //we need to add 10 colors here 
        backgroundColor: [  
          '#f0ecf6',
          '#e1d9ec',
          '#d3c5e3',
          '#c4b2d9',
          '#b59fd0',
          '#a68cc6',
          '#9779bd',
          '#8965b3',
          '#7a52aa',
          '#6b3fa0'
        ],
        borderColor: 'grey',
        borderWidth: 2
      }]
    });
    //  })

    //   .catch((error) => {
    //     console.error('Error: ', error);
    //   });
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