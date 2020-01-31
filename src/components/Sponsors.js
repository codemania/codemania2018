import React, { Component } from "react";

import pushpay from "../images/sponsors/logo_pushpay.svg"
import myob from "../images/sponsors/logo_myob.png"
import microsoft from "../images/sponsors/logo_microsoft.png"
import vista from "../images/sponsors/logo_vista.png"

import raygun from "../images/sponsors/logo_raygun.png"
import xero from "../images/sponsors/logo_xero.svg"
import karat from "../images/sponsors/logo_karat.svg"
import serko from "../images/sponsors/logo_serko.svg"
import flux from "../images/sponsors/logo_flux.svg"

import lmax from "../images/sponsors/logo_lmax.svg"

class SponsorBadge extends Component {

  render() {
    return (
      <li>
        <span className="image-aligner"></span>
        <a target="_blank" rel="noopener noreferrer" href={this.props.href}>
          <img src={this.props.imgSrc} alt={this.props.imgAlt} />
        </a>
      </li>
    );
  }

}

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
            height: 150px;
            flex: 0 1 25%;
            text-align: center;
          }
          .sponsors li img {
            max-width: 300px;
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
            text-decoration:  none;
          }
          .sponsors p a:hover {
            color: rgb(255,0,153);
            text-decoration: none;
            border-bottom: solid 4px rgb(255,0,153);
          }
          .image-aligner {
            display: inline-block;
            height: 100%;
            vertical-align: middle;
          }
          .sponsor-section {
            padding-bottom: 80px;
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
              .sponsors li img {
                height: auto;
              }
            }
        `}</style>
        <a className="anchor" id="sponsors-anchor"></a>
        <div className="sponsor-section">
          <ul className="sponsor-logos sponsor-logos--gold">
            <SponsorBadge href="https://pushpay.com" imgSrc={pushpay} imgAlt="Pushpay" />
            <SponsorBadge href="https://myob.com/nz" imgSrc={myob} imgAlt="MYOB" />
          </ul>
          <ul className="sponsor-logos sponsor-logos--gold">
            <SponsorBadge href="https://www.vista.co/" imgSrc={vista} imgAlt="Vista" />
            <SponsorBadge href="https://raygun.com/" imgSrc={raygun} imgAlt="Raygun" />
          </ul>
        </div>
        <div className="sponsor-section">
          <ul className="sponsor-logos sponsor-logos--silver">
            <SponsorBadge href="https://www.xero.com/" imgSrc={xero} imgAlt="Xero" />
            <SponsorBadge href="https://fluxfederation.com/" imgSrc={flux} imgAlt="Flux Federation" />
          </ul>
          <ul className="sponsor-logos sponsor-logos--silver">
            <SponsorBadge href="https://www.serko.com/" imgSrc={serko} imgAlt="Serko" />
            <SponsorBadge href="https://karat.com/" imgSrc={karat} imgAlt="Karat" />
          </ul>
        </div>
        <div className="sponsor-section">
          <ul className="sponsor-logos sponsor-logos--standard">
          <SponsorBadge href="https://www.lmax.com/" imgSrc={lmax} imgAlt="LMAX Exchange" />
          </ul>
        </div>
        <p>If you'd like to help sponsor New Zealand's most amazing conference for software developers, please get in touch so we can discuss options. <a href="mailto:sponsors@codemania.io">sponsors@codemania.io</a></p>

        <div id="mc_embed_signup">
          <form action="https://codemania.us2.list-manage.com/subscribe/post?u=c613eaecd3430d404e9feaf6d&amp;id=757ab16a00" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>

            {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
            <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
              <input type="text" name="b_c613eaecd3430d404e9feaf6d_757ab16a00" tabIndex="-1" defaultValue="" />
            </div>

            <div id="mc_embed_signup_scroll">
              <label htmlFor="mce-EMAIL">Subscribe to our newsletter</label>
              <input type="email" defaultValue="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required />
              <div>
                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
              </div>
            </div>
          </form>
        </div>

      </div>
    );
  }
}

export default Sponsors;
