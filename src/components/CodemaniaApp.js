import "./CodemaniaApp.css";

import React, { Component } from "react";

import type Year from "../constants";
import YearLayout from "../components/Year.js";
import YearSelector from "../components/YearSelector.js";
import logo from "../images/2017/logo2.svg";

type CodemaniaAppState = {
  focusedYear: Year,
}

const defaultState = (): CodemaniaAppState => {
  return {
    focusedYear: "2018"
  }
}

class CodemaniaApp extends Component<Props, SnowflakeAppState> {
  constructor(props: Props) {
    super(props)
    this.state = defaultState()
  }

  render() {
    return (
      <div className="App">
        <div className="content">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <div className="App-intro">
            <h1 className="oswald-bold">COMING SOON</h1>
            <h1 className="oswald-light">25th May 2018</h1>
          </div>
          <YearLayout year={this.state.focusedYear} />
        </div>
        <YearSelector setFocusedYearFn={this.setFocusedYear.bind(this)} />
      </div>
    );
  }

  setFocusedYear(year: Year) {
    const focusedYear = year
    this.setState({ focusedYear })
  }
}

export default CodemaniaApp;
