import React, { Component } from "react";

import logo from "../images/2018/logo.png";
import BuyTickets from '../components/BuyTickets'
import Tickets from '../components/Tickets'


class Placeholder extends Component {
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
                margin: 50px;
                color: #fff;
                z-index: 10;
                text-align: center;
                margin-top: -70px;
            }
            .logo {
              flex: 7 0 200px;
              max-width: 700px;
              margin-top: 20px;

            }
            .logo img {
                max-width: 750px;
                margin: auto;
            }
            .buy-tickets {
              flex: 3 0 80px;
              padding-top: 160px;
              max-width: 200px;
            }
            .kitty {
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
              margin-top: -300px;
            }
            .team {
              width: 800px;
              height: 600px;
              margin-top: -50px;
            }
            .tickets {
              z-index: 10;
            }
            .cave {
              width: 700px;
              height: 700px;
              margin-top: -150px;
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
                .placeholder {
                    margin: 0;
                }
                .placeholder h1 {
                    font-size: 16pt;
                }
                .placeholder p {
                    font-size: 16pt;
                    margin: 0 10px 15px 10px;
                }
                .logo, .kitty {
                  width: 95%;
                  margin: 10px auto;
                  flex: 10 0 auto;
                  text-align: center;
                }
                .logo img {
                    width: 80%;
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
                  margin-top: -120px;
                }
                .ticket-mobile-sidebar {
                  flex: 2 0 auto;
                  display: block;
                }
                .image-break {
                  width: 100%;
                  text-align: center;
                }
                .team, .cave {
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
          <div className="logo">
            <img src={logo} alt="Codemania Logo" />
          </div>
          <BuyTickets />
        </div>
        <div className="flex-container">
          <div className="placeholder">
          <h1>Coming Soon!</h1>
            <p>We're back for more Codemania in beautiful Auckland, New Zealand on May 15th 2019. Grab a ticket now, and we'll update with more info soon.</p>
          </div>

          <Tickets />
          <div className="image-break"></div>
          {/* <Sponsors /> */}
        </div>


      </div>
    );
  }
}

export default Placeholder;
