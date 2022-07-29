import React from 'react';
import Dashboard from './dashboard/Dashboard.jsx';
import Header from './Header.jsx';
import NavBar from './navbar/NavBar.jsx';
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
