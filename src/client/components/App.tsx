import React, { useEffect, useState } from 'react';
import Dashboard from './dashboard/Dashboard';
import Header from './Header';
import NavBar from './navbar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { NavbarData } from './navbar/NavbarData.js';

const App = () => {

  const [navList, setNavList] = useState([]);
  const [defaultContainer, setDefaultContainer] = useState<string>('');

  useEffect(() => {
    setNavList(NavbarData);
    setDefaultContainer(NavbarData[0].title);
  }, []);

  return (
    <div className='app'>
      < Header />
      <div className='app-body'>
        <Router>
          < NavBar navbarData={navList} changeDisplay={setDefaultContainer}/>
        </Router>
  
        < Dashboard defaultContainer={defaultContainer}/>
      </div>
    </div>
  );
};

export default App;
