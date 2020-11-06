import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { theme } from './themes/theme';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';

ReactDOM.render(
  <Router>
    <ThemeProvider theme = {theme}>
      <App/>
    </ThemeProvider>
  </Router>,
  document.getElementById('root')
)