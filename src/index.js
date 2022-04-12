import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './pages/Main';
import SignIn from './pages/SingIn';
import Register from './pages/Register'


ReactDOM.render(
  <React.StrictMode>
    {/* <SignIn /> */}
    {/* <Register /> */}
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);