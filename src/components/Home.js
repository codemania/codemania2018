import React, { Component } from "react";

import SpeakerList from "../components/SpeakerList";
import HeaderLogo from '../components/HeaderLogo'
import BuyTickets from '../components/BuyTickets'
import KittersPyramid from '../components/KittersPyramid'
import About from '../components/About'
import Tickets from '../components/Tickets'


import team from '../images/2018/team.svg'
import cave from '../images/2018/cave.svg'


class Home extends Component {
  render() {
    return (
      <div className="flex-container">
        <style jsx="true">{`
            .flex-container {
              width: 1000px;
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              align-items: flex-start;
              align-content: flex-start;
              margin: auto;
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
              flex: 6 0 auto;
              margin-top: -40px;
            }
            h1 {
              background-size: 200px;
              line-height: 1.8em;
              font-family: 'Oswald', sans-serif;
              font-weight: bold;
              transform: rotate(-5deg);
              background-color: #fff;
              width: 200px;
              text-align: center;
              text-transform: uppercase;
              margin: 0 auto 75px auto;
              color: #ff595a;
            }
            .speaker-list, .about, .ticket-table, .sponsors {
              width: 100%;
              flex: 10 0 auto;
            }
            .speaker-container {
              margin-top: -300px;
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
                .flex-container {
                  width: 100%;
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
                .speaker-container {
                  margin-top: -160px;
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
          <KittersPyramid />
        </div>
        <div className="flex-container">
          <SpeakerList year="2018" />
          <About />
          <div className="image-break"><img src={team} alt="Codemania team" /></div>
          <Tickets />
          <div className="image-break"><img src={cave} alt="Codemania team" /></div>
          <div className="sponsors placeholder" />
          <div className="footer placeholder" />
        </div>


      </div>
    );
  }
}

export default Home;
