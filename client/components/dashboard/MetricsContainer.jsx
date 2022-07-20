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
const [dataList,setDataList] = useState({ dataPoints:[] })
useEffect(() => {
  const fetch = async () => {
    const results = await axios(
      '/container/stats'
    )
    setDataList(results.dataList)
  }
})
  
  const [userCpu,setUserCpu] = useState({
    labels: dummyData.map((data) => data.created_at),
    datasets: [{
      label: 'CPU Percentage',
      // data = y-axis
      data: dummyData.map((data) => data.cpu_percent),
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
    labels: dummyData.map((data) => data.created_at),
    datasets: [{
      label: 'Memory Percentage',
      // data = y-axis
      data: dummyData.map((data) => data.mem_percent),
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
    labels: dummyData.map((data) => data.created_at),
    datasets: [{
      label: 'Net Input Output',
      // data = y-axis
      data: dummyData.map((data) => data.net_io),
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
    labels: dummyData.map((data) => data.created_at),
    datasets: [{
      label: 'Container Swap',
      // data = y-axis
      data: dummyData.map((data) => data.swap),
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

  return (
    <div className="metrics-container">
      {/* <h2>This is the Metrics Container</h2> */}
      < CPU chartData={userCpu}/>
      < Memory chartData={userMemory}/>
      < InputOutput chartData={userIO}/>
      {/* < Swap chartData={userSwap}/> */}
    </div>
  );
};

  

export default MetricsContainer;