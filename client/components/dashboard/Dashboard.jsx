import React from 'react';
import NavBar from './navbar';
import MetricsContainer from './MetricsContainer';

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <h1>This is the dashboard</h1>
            < NavBar />
            < MetricsContainer />
        </div>
    )
}

export default Dashboard;