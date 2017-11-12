import React, { Component } from "react";

import SpeakerList from "../components/SpeakerList";
import type Year from "../constants";
import logo from "../images/2017/logo2.svg";

type CodemaniaAppState = {
  focusedYear: Year
};

const defaultState = (): CodemaniaAppState => {
  return {
    focusedYear: "2018"
  };
};

class Home extends Component<Props, SnowflakeAppState> {
  constructor(props: Props) {
    super(props);
    this.state = defaultState();
  }

  render() {
    return (
      <div className="home">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="App-intro">
          <h1 className="oswald-bold">COMING SOON</h1>
          <h1 className="oswald-light">23rd May 2018</h1>
        </div>
        <SpeakerList year="2018" />
      </div>
    );
  }
}

export default Home;
