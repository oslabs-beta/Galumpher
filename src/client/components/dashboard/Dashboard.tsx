import React from 'react';
import MetricsContainer from './MetricsContainer';

const Dashboard = ({defaultContainer}) => {
  return (
    <div className='dashboard'>
      {/* <h3>Dashboard</h3> */}
      < MetricsContainer defaultContainer={defaultContainer} />
    </div>
  );
};

export default Dashboard;