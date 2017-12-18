import React, { Component } from 'react'

import kitters from "../images/2018/kitters-top.svg";

export default class KittersPyramid extends Component {
  render() {
    return (
      <div className="kitty">
        <style jsx="true">{`
          .kitty {
            background: url(`+kitters+`) no-repeat center;
          }
          @media only screen
          and (max-width : 600px) {
            
          }
        `}</style>
      </div>
    )
  }
}
