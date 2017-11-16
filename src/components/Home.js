import React, { Component } from "react";

import Jaguar from "../components/Jaguar";
import SpeakerList from "../components/SpeakerList";
import type Year from "../constants";

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
        <style jsx="true">{`
            .Jaguar { height: 100% }
        `}</style>
        <Jaguar />
        {/* <div className="App-intro">
          <h1 className="oswald-bold">COMING SOON</h1>
          <h1 className="oswald-light">23rd May 2018</h1>
        </div>
        <SpeakerList year="2018" /> */}
      </div>
    );
  }
}

export default Home;
