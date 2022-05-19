import React from 'react';
import ReactDOM from 'react-dom/client';
import CustomToggle from './toggle-switch.jsx';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<CustomToggle />);
