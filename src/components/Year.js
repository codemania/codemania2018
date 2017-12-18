import React, { Component } from "react";

import SpeakerList from "../components/SpeakerList";
import logo from "../images/2018/logo-cm.svg";

class YearLayout extends Component {
  render() {
    const yearId = this.props.match.params.id;
    if (yearId === "2018") {
      // 2018 so redirect to home!
      window.location = "/";
    }
    return (
      <div className="Year">
        <style jsx="true">{`
            .Year {
                margin: 10px;
            }
            li {
                list-style: none;
                display: inline-block;
                margin: 5px;
            }

        `}</style>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h2>Codemania in History: {yearId}</h2>
        <SpeakerList year={yearId} />
      </div>
    );
  }
}

export default YearLayout;
