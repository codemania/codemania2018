import React, { Component } from "react";

import SpeakerList from "../components/SpeakerList";
import HeaderLogo from '../components/HeaderLogo'
import BuyTickets from '../components/BuyTickets'
import Intro from '../components/Intro'
import About from '../components/About'
import Tickets from '../components/Tickets'
import Sponsors from '../components/Sponsors'


import lost1 from '../images/2019/lost-1.svg'
import saved1 from '../images/2019/saved-1.svg'
import winning1 from '../images/2019/winning-1.svg'

import lost2 from '../images/2019/lost-2.svg'
import saved2 from '../images/2019/saved-2.svg'
import winning2 from '../images/2019/winning-2.svg'


class Home extends Component {
  render() {
    console.log('Randomising gender representation...')
    var choice = Math.floor(Math.random() * 2)+1
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
            .speaker-container {
              margin-top: -100px;
            }
            .lost {
              width: 1200px;
              height: 400px;
              margin-top: -40px;
            }
            .tickets {
              z-index: 10;
            }
            .saved {
              width: 900px;
              height: 700px;
              margin-top: -150px;
              z-index: -10;
            }
            .winning {
              width: 900px;
              height: 600px;
              margin-top: 0;
              margin-bottom: -60px;
              z-index: -10;
            }
            .footer {
              width: 100%;
              height: 200px;
              flex: 10 0 auto;
            }
            @media only screen
            and (max-width : 1200px) {
              .image-break {
                width: 100%;
                text-align: center;
              }
              .lost, .saved, .winning {
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
                  margin-top: -50px;
                }
                .speaker-container {
                  margin-top: -20px;
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
        `}</style>
        <div className="flex-container">
          <HeaderLogo />
          {/* <BuyTickets /> */}
        </div>
        <div className="flex-container">
          <Intro />
        </div>
        <div className="flex-container">
          <SpeakerList year="2019" />
          <div className="image-break"><img className="lost" src={choice===1?lost1:lost2} alt="Lost" /></div>
          <About />
          <div className="image-break"><img className="saved" src={choice===1?saved1:saved2} alt="Saved" /></div>
          <Tickets />
          <div className="image-break"><img className="winning" src={choice===1?winning1:winning2} alt="Winning" /></div>
          <Sponsors />
        </div>
      </div>
    );
  }
}

export default Home;
