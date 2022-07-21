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
    
      });
  }, []);
  

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
    fetch('/containers/stats', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })

      .then(data => data.json())
      .then(res => {
        res = res.reverse();
        console.log('RES:', res);
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
            label: 'CPU Percentage',
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
            label: 'Net input',
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
      })

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