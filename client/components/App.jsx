import React from 'react';
import Dashboard from './dashboard/Dashboard.jsx';
import Header from './Header.jsx';
import NavBar from './dashboard/navbar.jsx';

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
