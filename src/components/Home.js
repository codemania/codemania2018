import React, { Component } from "react";

import Jaguar from "../components/Jaguar";
import SpeakerList from "../components/SpeakerList";
import HeaderLogo from '../components/HeaderLogo'
import BuyTickets from '../components/BuyTickets'


class Home extends Component {
  render() {
    return (
      <div className="flex-container">
        <style jsx="true">{`
            .flex-container {
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
              flex: 7 0 200px;
              max-width: 700px;
            }
            .buy-tickets {
              flex: 3 0 80px;
              padding-top: 100px;
              max-width: 200px;
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
            and (max-width : 600px) {
                .home {
                  margin: auto;
                  flex-order: row;
                }
                .logo, .kitty, .speaker-list, .about, .ticket-table, .sponsors, .footer {
                  width: 95%;
                  margin: 10px auto;
                  flex: 10 0 auto;
                }
                .buy-tickets {
                  flex: 6 0 200px;
                  padding: 0;
                }
                .ticket-mobile-sidebar {
                  flex: 2 0 auto;
                  display: block;
                }
            }
        `}</style>
        <div className="flex-container">
          <HeaderLogo />
          <BuyTickets />
        </div>
        <div className="flex-container">
        <div className="kitty placeholder" />
        <div className="speaker-list placeholder" />
        <div className="about placeholder" />
        <div className="ticket-table placeholder" />
        <div className="sponsors placeholder" />
        <div className="footer placeholder" />
        </div>


      </div>
    );
  }
}

export default Home;
