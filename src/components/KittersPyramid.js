import React, { Component } from 'react'

import kitters from "../images/2018/kitters-top.svg";

export default class KittersPyramid extends Component {
  render() {
    return (
      <div className="kitty">
        <style jsx="true">{`
          @media only screen
          and (max-width : 600px) {
            
          }
        `}</style>
        <img src={kitters} alt="Lava kitty" />
      </div>
    )
  }
}
