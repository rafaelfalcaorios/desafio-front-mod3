import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
    {/* <SignIn /> */}
    {/* <Register /> */}
    {/* <Main /> */}
  </React.StrictMode>,
  document.getElementById('root')
);