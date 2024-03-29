import React from 'react';
import { useState, useEffect } from 'react';

// COMPONENTS
import Memory from './Memory';
import Cpu from './CPU';
import InputOutput from './InputOutput';

const MetricsContainer = ({ defaultContainer }) => {
  
  // fetch data for graphs on load
  useEffect(() => {
    fetch(`/containers/stats/${defaultContainer}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }).then((data) => data.json())
      .then( res => {
        res = res.reverse();
       
        const createArr: string[] = [];
        const cpuArr: string[] = [];
        const memArr: string[] = [];
        const ioArr: string[] = [];
        const userOutput: string[] = [];

        for (let i = 0; i < res.length; i++) {
          createArr.push(res[i].created_at);
          cpuArr.push(res[i].cpu_perc);
          memArr.push(res[i].memory_perc);
          ioArr.push(res[i].net_input);
          userOutput.push(res[i].net_output);
        }

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
  }, [defaultContainer]);

  // initial states
  const [userCpu,setUserCpu] = useState({
    labels: ['Loading...'],
    datasets: [{
      label: 'Loading...',
      data:['null'],
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
    labels: ['Loading...'],
    datasets: [{
      label: 'Loading...',
      data:['null'],
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
    labels: ['Loading...'],
    datasets: [{
      label: 'Loading...',
      data:['null'],
      fill: true,
      backgroundColor: [
        '#e56b6f'
      ],
      borderColor: 'grey',
      borderWidth: 2
    },
    {
      label: 'Loading...',
      data:['null'],
      fill: true,
      backgroundColor: [
        '#b56576'
      ],
      borderColor: 'grey',
      borderWidth: 2
    }]
  });

  // function to fetch data when Update Metrics button is clicked
  const updateMetrics = () => {
    fetch(`containers/stats/${defaultContainer}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })

      .then(data => data.json())
      .then(res => {
        res = res.reverse();
        const createdAt: string[] = [];
        const cpuPercent: string[] = [];
        const memory: string[] = [];
        const userInput: string[] = [];
        const userOutput: string[] = [];

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
            label:'Memory Percentage',
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
      })
      .catch((error) => {
        console.error('Error: ', error);
      });
  };
  
  return (
    <div className="metrics-container">
      <button className="update-metrics" onClick={updateMetrics}>Update Metrics</button>
      < Cpu chartData={userCpu}/>
      < Memory chartData={userMemory}/>
      < InputOutput chartData={userIO}/>
    </div>
  );
};

  

export default MetricsContainer;