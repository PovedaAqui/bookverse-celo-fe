import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DefaultContainer } from './App';
import reportWebVitals from './reportWebVitals';
import { StyledEngineProvider } from '@mui/material/styles';
import AppBar from './components/AppBar';
import ButtonAppBar from './components/ButtonAppBar';
import BasicCard from './components/BasicCard';



ReactDOM.render(
  <React.StrictMode>
    <DefaultContainer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
