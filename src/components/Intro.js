import React, { Component } from 'react'

import intro from "../images/2019/intro.svg";

export default class Intro extends Component {
  render() {
    return (
      <div className="intro">
        <style jsx="true">{`
          @media only screen
          and (max-width : 600px) {
            .intro {
                margin-top: -70px;
            }
          }
        `}</style>
        <img src={intro} alt="Intro" />
      </div>
    )
  }
}
