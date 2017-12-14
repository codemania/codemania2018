import React, { Component } from "react";

import Jaguar from "../components/Jaguar";
import SpeakerList from "../components/SpeakerList";

class Home extends Component<Props, SnowflakeAppState> {
  render() {
    return (
      <div className="home">
        <style jsx="true">{`
            .home {
              width: 100%;
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              align-items: flex-start;
              align-content: flex-start;
              margin: auto;
              border: 1px dotted #000;
            }
            .placeholder {
              background-color: red;
              margin: 10px;
            }
            .logo {
              width:600px;
              height:200px;
              flex: 8 0 auto;
            }
            .buy-tickets {
              width: 100px;
              height: 200px;
              flex: 2 0 auto;
            }
            .kitty {
              width: 600px;
              height: 600px;
              flex: 6 0 auto;
            }
            .speaker-list, .about, .ticket-table, .sponsors {
              width: 100%;
              height: 1000px;
              flex: 10 0 auto;
            }
            .footer {
              width: 100%;
              height: 200px;
              flex: 10 0 auto;
            }
            @media only screen
            and (max-width : 700px) {
                .home {
                  margin: auto;
                }
                .logo, .kitty, .speaker-list, .about, .ticket-table, .sponsors, .footer {
                  width: 95%;
                  magin: 10px auto;
                }
            }
        `}</style>
        <div className="logo placeholder" />
        <div className="buy-tickets placeholder" />
        <div className="kitty placeholder" />
        <div className="speaker-list placeholder" />
        <div className="about placeholder" />
        <div className="ticket-table placeholder" />
        <div className="sponsors placeholder" />
        <div className="footer placeholder" />


      </div>
    );
  }
}

export default Home;
