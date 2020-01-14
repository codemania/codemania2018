import React, { Component } from 'react'

import intro from "../images/2020/assets/intro.svg";

export default class Intro extends Component {
  render() {
    return (
      <div className="intro">
        <style jsx="true">{`
          .intro {
            animation: float 4s infinite ease-in;
          }
          @media only screen
          and (max-width : 600px) {
            .intro {
                margin-top: -40px;
            }
          }
        `}</style>
        <img className="animation" src={intro} alt="Intro" />
      </div>
    )
  }
}
