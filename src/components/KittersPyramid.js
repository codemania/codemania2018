import React, { Component } from 'react'

import kitters from "../images/2018/kitters.svg";
import pyramid from "../images/2018/top-pyramid.svg";

export default class KittersPyramid extends Component {
  render() {
    return (
      <div className="kitty">
        <style jsx="true">{`
          .kittyImage {
            background: url(`+kitters+`) no-repeat center;
          }
          .topPyramid {
            background: url(`+pyramid+`) no-repeat center;
            margin-top: -120px;
          }

          .image-break {
            width: 70%;
            height: 400px;
            margin: 0 auto;
          }
          
          @media only screen
          and (max-width : 600px) {
            
          }
        `}</style>
        <div className="kittyImage image-break" />
        {/* <div className="topPyramid image-break" /> */}
      </div>
    )
  }
}
