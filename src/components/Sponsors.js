import React, { Component } from "react";

import pushpay from "../images/sponsors/logo_pushpay.png"
import ateed from "../images/sponsors/logo_ateed.png"
import gentrack from "../images/sponsors/logo_gentrack.png"
import yow from "../images/sponsors/logo_yow.png"

class Sponsors extends Component {

  render() {
    return (
      <div className="sponsors" id="sponsors">
        <style jsx="true">{`
          .sponsors h1 {
            margin: 0 auto;
          }
          .sponsors h2 {
            margin: 0 auto;
            text-transform: uppercase;
            color: #fff;
            width: 200px;
            text-align: center;
          }
          .sponsor-logos, .friend-logos {
            width: 100%;
            display: flex;
            margin: 20px auto;
            justify-content: space-around;
          }
          .sponsors li img {
            width: 280px;
            vertical-align: middle;
          }
          .friend-logos li img {
            width: 150px;
          }
          .sponsors p {
            font-size: medium;
            margin-bottom: 15px;
            text-align: center;
            font-weight: 300;
            line-height: 1.1em;
            color: #fff;
            width: 80%;
            margin: 0 auto;
            padding: 5px;
          }
          .sponsors p a {
            color: #ffcd00;
            text-decoration:  none;
          }
          .sponsors p a:hover {
            text-decoration:  underline;
          }
          .image-aligner {
            display: inline-block;
            height: 100%;
            vertical-align: middle;
          }

          @media only screen
            and (max-width : 600px) {
              .sponsor-logos {
                width: 100%;
                display: flex;
                flex-direction: column;
              }
              .sponsors {
                text-align: center;
              }
              .sponsors li {
                margin: 0;
              }
              .sponsors li img {
                width: 70%;
                height: auto;
              }
              .friend-logos li img {
                width: 50%;
                height: auto;
              }
            }
        `}</style>
        <ul className="sponsor-logos">
          <li>
            <span class="image-aligner"></span>
            <a target="_blank" rel="noopener noreferrer" href="https://pushpay.com">
              <img src={pushpay} alt="Pushpay" />
            </a>
          </li>
          <li>
            <span class="image-aligner"></span>
            <a target="_blank" rel="noopener noreferrer" href="http://www.aucklandnz.com/ateed/">
              <img src={ateed} alt="ATEED" />
            </a>
          </li>
          <li>
            <span class="image-aligner"></span>
            <a target="_blank" rel="noopener noreferrer" href="https://www.gentrack.com/">
              <img src={gentrack} alt="Gentrack" />
            </a>
          </li>
        </ul>
        <ul className="friend-logos">
          <li>
            <a target="_blank" rel="noopener noreferrer" href="http://yowconference.com.au/">
              <img src={yow} alt="Yow" />
            </a>
          </li>
        </ul>
        <p>If you'd like to help sponsor New Zealand's most amazing conference for software developers, please get in touch so we can discuss options. <a href="mailto:sponsors@codemania.co.nz">sponsors@codemania.co.nz</a></p>
      </div>
    );
  }
}

export default Sponsors;
