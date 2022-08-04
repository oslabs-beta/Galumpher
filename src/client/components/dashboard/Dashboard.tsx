import React from 'react';
import MetricsContainer from './MetricsContainer';

// eslint-disable-next-line react/prop-types
const Dashboard = ({ defaultContainer }) => {
  return (
    <div className='dashboard'>
      {/* <h3>Dashboard</h3> */}
      < MetricsContainer defaultContainer={defaultContainer} />
    </div>
  );
};

export default Dashboard;