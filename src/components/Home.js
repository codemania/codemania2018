import React, { Component } from "react";

import SpeakerList from "../components/SpeakerList";
import HeaderLogo from '../components/HeaderLogo';
import BuyTickets from '../components/BuyTickets';
import Intro from '../components/Intro';
import About from '../components/About';
import Tickets from '../components/Tickets';
import Sponsors from '../components/Sponsors';
import Community from '../components/Community';

import speakersAfter from '../images/2020/assets/speakers-after.svg';
import aboutAfter from '../images/2020/assets/about-after.svg';
import ticketsAfter from '../images/2020/assets/tickets-after.svg';
import escape from '../images/2020/assets/escape.svg';


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
            .anchor {
              display: block;
              position: relative;
              top: -100px;
              visibility: hidden;
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
            .intro {
              flex: 6 0 auto;
              margin-top: -80px;
            }
            h1 {
              background-size: 200px;
              line-height: 1.8em;
              font-size: 2rem;
              font-weight: bold;
              transform: rotate(-3deg);
              background-color: rgb(255,0,153);
              width: 20rem;
              text-align: center;
              text-transform: uppercase;
              margin: 0 auto 75px auto;
              color: rgb(0,0,0);
            }
            .animation {
              animation: float 4s infinite ease-in;
            }
            .lost {
              width: 900px;
              height: 700px;
              margin-top: -40px;
            }
            .tickets {
              z-index: 10;
            }
            .saved {
              width: 900px;
              height: 700px;
              margin-top: -50px;
              z-index: -10;
            }
            .escape {
              width: 900px;
              height: 320px;
              margin-top: 0;
              margin-bottom: -60px;
              z-index: -10;
            }
            .tickets-after {
              text-align: center;
              width: 900px;
              height: 700px;
              margin-top: 0;
              margin-bottom: -60px;
              z-index: -10;
              background-image: url(`}{ticketsAfter}{`);
              background-repeat: no-repeat;
              background-size: cover;
            }
            .footer {
              width: 100%;
              height: 0px;
              flex: 10 0 auto;
            }
            @media only screen
            and (max-width : 1200px) {
              .image-break {
                width: 100%;
                text-align: center;
              }
              .lost, .saved, .escape, .intro, .tickets-after {
                width: 80%;
                height: auto;
                margin: 0 auto;
              }
            }
            @media only screen
            and (max-width : 600px) {
                .home {
                  margin: auto;
                  flex-order: row;
                }
                .anchor {
                  display: inline-block;
                }
                .flex-container {
                  width: 100%;
                }
                .logo, .kitty {
                  width: 95%;
                  margin: 10px auto;
                }
                h1 {
                  margin: 0 auto 40px auto;
                }
                .buy-tickets {
                  flex: 6 0 200px;
                  padding: 0;
                  margin-top: -20px;
                  margin-bottom: 2rem;
                }
                .speaker-container {
                  margin-top: 20px;
                }
                .ticket-mobile-sidebar {
                  flex: 2 0 auto;
                  display: block;
                }
                .cave {
                  width: 95%;
                  margin-top: -50px;
                }
            }

            .alert {
              padding: 15px;
              margin-bottom: 20px;
              border: 1px solid transparent;
              border-radius: 4px;
              text-align: center;
            }

            .alert-info {
              background-color: #d9edf7;
              border-color: #bce8f1;
              color: #31708f;
            }

        `}</style>
        <div className="alert alert-info">
          <h2>Important Update!</h2>
          <p>Codemania has been rescheduled for September 14th. See <a href="https://mailchi.mp/321c217535b2/codemania-important-announcement-covid-19">here</a> for more details.</p>
        </div>
        <div className="flex-container">
          <HeaderLogo />
          <BuyTickets />
        </div>
        <div className="flex-container">
          <Intro />
        </div>
        <div className="flex-container">
          <SpeakerList year="2020" />
          <div className="image-break"><img className="lost animation" src={speakersAfter} alt="Lost" /></div>
          <About />
          <div className="image-break"><img className="saved animation" src={aboutAfter} alt="Saved" /></div>
          <Tickets />
          <div className="image-break"><div className="tickets-after" ><img className="escape animation" src={escape} alt="Escape" /></div></div>
          <Sponsors />
          <Community />
        </div>
      </div>
    );
  }
}

export default Home;
