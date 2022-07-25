import React from 'react';
import Dashboard from './dashboard/Dashboard';
import Header from './Header';
import NavBar from './dashboard/NavBar';

const App = () => {

  return (
    <div className='app'>
      < Header />
      <div className='app-body'>
        < NavBar />
        < Dashboard />
      </div>
    </div>
  );
};

export default App;
