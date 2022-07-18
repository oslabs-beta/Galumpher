import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from '../client/components/App.jsx';

// const Index = () => {
//     return <div>Hello React!</div>;
// };

const root = createRoot(document.getElementById('root'));
root.render(<App />);