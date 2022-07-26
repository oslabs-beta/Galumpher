import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '../client/components/App.jsx';
import styles from '../client/scss/dashboard.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddContainer from '../client/components/dashboard/AddContainer';



const root = createRoot(document.getElementById('root'));
root.render(<BrowserRouter>
  <Routes>
    <Route path="/addcontainer" element={<AddContainer />} />
    <Route path="/" element={<App />}/>
  </Routes>
</BrowserRouter>);


