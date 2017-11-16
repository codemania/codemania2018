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
            .home { 
              display: flex;
              flex-direction: column;
              flex: 1 0 auto;
            }
            @media only screen 
            and (min-device-width : 414px) 
            and (max-device-width : 736px) {
                .home { 
                  display: flex;
                  flex-direction: row;
                  flex: 0 1 auto;
                  margin: auto;
                }
            }
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
