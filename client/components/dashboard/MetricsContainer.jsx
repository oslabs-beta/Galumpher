import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import CPU from './cpu';
import Memory from './memory';
import InputOutput from './InputOutput';
// import Swap from './swap';
import { dummyData } from './data';

//make fetch request in here here to server 
//receiving a JSON from the server
//need to test
const dataArr = [];

//net io amount of data the container has sent and recieved 
//block io the amount of data the container has read to write from the devices on the host

//wrap with the use effect hook to be on load
//declare state up here

const MetricsContainer = () => {
  //wrap with the use effect hook to be on load
  //declare state up here
// const [dataList,setDataList] = useState({ dataPoints:[] })



useEffect(() => {
  const fetch = async () => {
    const results = await axios(
      '/container/stats'
    )
    // declare created_at array and reassign to all labels properties

    // const createdAt = [2022-07-19 16:02:51 +0000, 2022-07-19 18:02:51 +0000]
    // const cpu = [.04, .06]
    // const memory = [51.45, 51.00]
    // const userIO = [0.001, 0.002]

    // call each set state callback to update labels array and datasets.data array in relevent graphs
    setUserCpu(results.dataList)
  
  }
}, [])

    // fetch get request to server will return an array of objects
    // loop through incoming array of objects
    // push values of created_at into labels array
    // push values of each property into datasets.data array

  // should initialize labels and datasets.data to empty arrays

  const [userCpu,setUserCpu] = useState({
    // created_at values
    labels: [],
    datasets: [{
      label: 'CPU Percentage',
      // data = y-axis
      // cpu_percent values
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

  //Memory graph and state
  const [userMemory,setUserMemory] = useState({
    labels: [],
    datasets: [{
      label: 'Memory Percentage',
      // data = y-axis
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
    labels: [],
    datasets: [{
      label: 'Net Input Output',
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
  const [userSwap,setUserSwap] = useState({
    labels: [],
    datasets: [{
      label: 'Container Swap',
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


  /*
    [
        {
            container_name: 'first container',
            container_id: '57',
            cpu_percent: 0.04,
            avg_cpu: 0.04,
            mem_usage: 51.45,
            mem_Limit: 2114.56,
            mem_percent: 2.49,
            net_input: 0.001,
            net_output: 0.003,
            block_input: 59.45,
            block_output: 0.008,
            pids: 35,
            created_at: 2022-07-19 16:02:51 +0000
        },
        {
            container_name: 'first container',
            container_id: '57',

            cpu_percent: 0.04,
            avg_cpu: 0.04, // how much on average you're using (%)

            mem_usage: 51.00, // amount mem MB
            mem_Limit: 2114.56, // MB
            mem_percent: 2.49, // mem usage compared to mem limit

            net_input: 0.002,
            net_output: 0.003,

            block_input: 59.45,
            block_output: 0.008,
            
            pids: 35,
            created_at: 2022-07-19 18:02:51 +0000
        }
    ] 
*/

   // declare created_at array and reassign to all labels properties

    // const createdAt = [2022-07-19 16:02:51 +0000, 2022-07-19 18:02:51 +0000]
    // const cpu = [.04, .06]
    // const memory = [51.45, 51.00]
    // const userIO = [0.001, 0.002]

    // call each set state callback to update labels array and datasets.data array in relevent graphs


  // fetch data when Update Metrics button is clicked
  const updateMetrics = () => {
    fetch('/containers/stats', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    })
      .then(data => {
        console.log(data);
        data.json();
      })
      .then(data => {
        //loop through data and replace each object in containderData array with incoming objects
        const createdAt = [];

        const cpuPercent = [];
        const memory = [];
        const userIO = [];

        for (const obj of data) {
          for (const key in obj) {
            if (key === 'created_at') {
                createdAt.push(obj[key])
            }
            if (key === 'cpu_percent') {
                cpuPercent.push(obj[key])
            }
            if (key === 'mem_percent') {
                memory.push(obj[key])
            }
          }
        }

        setUserCpu({
            labels: createdAt,
            datasets: [{
                data: cpuPercent
            }]
        });

        setUserMemory({
            labels: createdAt,
            datasets: [{
                data: memory,
            }]
        });
        setUserIO({
            labels: createdAt,
            datasets: [{
                data: userIO,
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