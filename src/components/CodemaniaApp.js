import './CodemaniaApp.css';

import React, { Component } from 'react';

import logo from '../images/2017/logo2.svg';

class CodemaniaApp extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p className="App-intro">
          <h1 className="oswald-bold">COMING SOON</h1>
          <h1 className="oswald-light">25th May 2018</h1>
        </p>
      </div>
    );
  }
}

export default CodemaniaApp;
