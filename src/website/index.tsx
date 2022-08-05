import React from 'react';
// import {createRoot} from 'react-dom/client';
import * as ReactDOM from 'react-dom';
import App from '../client/components/App';
import '../client/scss/dashboard.scss';

const app = document.getElementById('root');

// const root = createRoot(document.getElementById('root'));
// root.render(<App />);
ReactDOM.render(<App />, app);