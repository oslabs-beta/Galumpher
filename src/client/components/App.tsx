import React from 'react';
import Dashboard from './dashboard/Dashboard';
import Header from './Header';
import NavBar from './navbar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <div className='app'>
      < Header />
      <div className='app-body'>
        <Router>
          < NavBar />
        </Router>
  
        < Dashboard />
      </div>
    </div>
  );
};

export default App;
