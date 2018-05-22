import React, { Component } from "react";

import pushpay from "../images/sponsors/logo_pushpay.png"
import myob from "../images/sponsors/logo_myob.png"
import ateed from "../images/sponsors/logo_ateed.png"
import gentrack from "../images/sponsors/logo_gentrack.png"
import xero from "../images/sponsors/logo_xero.svg"
import vend from "../images/sponsors/logo_vend.svg"
import yow from "../images/sponsors/logo_yow.png"
import fraedom from "../images/sponsors/logo_fraedom.png"
import microsoft from "../images/sponsors/logo_microsoft.png"

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
          .sponsor-logos {
            width: 100%;
            display: flex;
            margin: 20px auto;
            justify-content: center;
            flex-wrap: wrap;
          }
          .sponsors li {
            flex: 0 1 25%;
            text-align: center;
          }
          .sponsors li img {
            width: 300px;
            max-height: 150px;
            vertical-align: middle;
          }
          .sponsor-logos--silver li img {
            width: 200px;
            max-height: 100px;
          }
          .sponsor-logos--standard li img {
            width: 100px;
            max-height: 50px;
          }
          .sponsor-logos--friends li img {
            width: 80px;
            max-height: 40px;
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
                margin-bottom: 10px;
              }
              .sponsors li img {
                height: auto;
              }
            }
        `}</style>
        <ul className="sponsor-logos sponsor-logos--gold">
          <li>
            <span class="image-aligner"></span>
            <a target="_blank" rel="noopener noreferrer" href="https://pushpay.com">
              <img src={pushpay} alt="Pushpay" />
            </a>
          </li>
          <li>
            <span class="image-aligner"></span>
            <a target="_blank" rel="noopener noreferrer" href="https://myob.com/nz">
              <img src={myob} alt="MYOB" />
            </a>
          </li>
        </ul>
        <ul className="sponsor-logos sponsor-logos--silver">
          <li>
            <span class="image-aligner"></span>
            <a target="_blank" rel="noopener noreferrer" href="http://www.aucklandnz.com/ateed/">
              <img src={ateed} alt="ATEED" />
            </a>
          </li>
          <li>
            <span class="image-aligner"></span>
            <a target="_blank" rel="noopener noreferrer" href="https://www.fraedom.com/jobs/">
              <img src={fraedom} alt="Fraedom" />
            </a>
          </li>
          <li>
            <span class="image-aligner"></span>
            <a target="_blank" rel="noopener noreferrer" href="https://msdn.microsoft.com/en-nz/">
              <img src={microsoft} alt="Microsoft" />
            </a>
          </li>
        </ul>
        <ul className="sponsor-logos sponsor-logos--standard">
          <li>
            <span class="image-aligner"></span>
            <a target="_blank" rel="noopener noreferrer" href="https://www.gentrack.com/">
              <img src={gentrack} alt="Gentrack" />
            </a>
          </li>
          <li>
            <span class="image-aligner"></span>
            <a target="_blank" rel="noopener noreferrer" href="https://www.xero.com/">
              <img src={xero} alt="Xero" />
            </a>
          </li>
          <li>
            <span class="image-aligner"></span>
            <a target="_blank" rel="noopener noreferrer" href="https://www.vendhq.com/careers">
              <img src={vend} alt="Vend" />
            </a>
          </li>
        </ul>
        <ul className="sponsor-logos sponsor-logos--friends">
          <li>
            <span class="image-aligner"></span>
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
