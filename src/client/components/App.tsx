import React, { useEffect, useState } from 'react';
import Dashboard from './dashboard/Dashboard';
import Header from './Header';
import NavBar from './navbar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// TS TYPES
import { containerInfo } from '../../types/globalTypes';

const App = () => {

  const [navList, setNavList] = useState<containerInfo[]>([]);
  const [defaultContainer, setDefaultContainer] = useState<string>('');

  useEffect(() => {
    fetch('/containers').then((res) => res.json()).then((containers) => {
      setNavList(containers);
      setDefaultContainer(containers[0].name);
    });
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
