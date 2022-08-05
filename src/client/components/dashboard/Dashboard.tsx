import React from 'react';
import MetricsContainer from './MetricsContainer';

const Dashboard = ({ defaultContainer }) => {
  return (
    <div className='dashboard'>
      < MetricsContainer defaultContainer={defaultContainer} />
    </div>
  );
};

export default Dashboard;