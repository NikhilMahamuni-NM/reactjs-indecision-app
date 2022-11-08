import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

//components
import IndecisionApp from './components/IndecisionApp'

// css
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const container = document.getElementById('app');
const root = createRoot(container); 
root.render(<IndecisionApp />);
