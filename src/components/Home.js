import React, { Component } from "react";

import SpeakerList from "../components/SpeakerList";
import HeaderLogo from '../components/HeaderLogo'
import BuyTickets from '../components/BuyTickets'
import Intro from '../components/Intro'
import About from '../components/About'
import Tickets from '../components/Tickets'
import Sponsors from '../components/Sponsors'


import lost from '../images/2019/lost.svg'
import saved from '../images/2019/saved.svg'
import winning from '../images/2019/winning.svg'


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
            and (max-width : 600px) {
                .home {
                  margin: auto;
                  flex-order: row;
                }
                .flex-container {
                  width: 100%;
                }
                .logo, .kitty {
                  width: 95%;
                  margin: 10px auto;
                  flex: 10 0 auto;
                }
                h1 {
                  margin: 0 auto 40px auto;
                }
                .buy-tickets {
                  flex: 6 0 200px;
                  padding: 0;
                }
                .speaker-container {
                  margin-top: -20px;
                }
                .ticket-mobile-sidebar {
                  flex: 2 0 auto;
                  display: block;
                }
                .image-break {
                  width: 100%;
                  text-align: center;
                }
                .lost, .saved, .winning {
                  width: 80%;
                  height: auto;
                  margin: 0 auto;
                }
                .cave {
                  width: 95%;
                  margin-top: -50px;
                }
            }
        `}</style>
        <div className="flex-container">
          <HeaderLogo />
          <BuyTickets is2019="true" />
        </div>
        <div className="flex-container">
          <Intro />
        </div>
        <div className="flex-container">
          <SpeakerList year="2019" />
          <div className="image-break"><img className="lost" src={lost} alt="Lost" /></div>
          <About />
          <div className="image-break"><img className="saved" src={saved} alt="Saved" /></div>
          <Tickets is2019="true" />
          <div className="image-break"><img className="winning" src={winning} alt="Winning" /></div>
          <Sponsors />
        </div>


      </div>
    );
  }
}

export default Home;
