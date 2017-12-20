import React, { Component } from "react";

import type { Speaker } from "../constants.js";

type Props = {
  speaker: Speaker,
  year: Year
};

class SpeakerBadge extends Component<Props> {
  render() {
    const speaker = this.props.speaker;
    var speakerImage
    try {
      speakerImage = require("../images/2018/speakers/" + speaker.id + ".png")
    } catch (err) {
      speakerImage = require("../images/2018/speakers/blank.png")
    }
    return (
      <div className="speaker-small" onClick={this.handleSpeakerClick.bind(this)}>
        <style jsx="true">{`
            .speaker-small {
                color: #fff;
                font-size: 0.6em;
                cursor: pointer;
                text-align: center;
                height: 220px;
                width: 180px;
            }
            .byline-background {
              background: #ff595a;
              width: 100%;
              height: 80px;
              position: absolute;
              top: 0;
              transform: rotateX(15deg) rotateY(5deg);
              z-index: 5;
            }
            .byline-background-white {
              background: #fff;
              width: 100%;
              height: 80px;
              position: absolute;
              top: 5px;
              transform: rotateX(11deg) rotateY(-2deg);
            }
            .byline-foreground {
              position: absolute;
              z-index: 10;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              margin: auto auto;
              vertical-align: center;
            }
            .speaker-byline {
              margin-top: -30px;
              position: relative;
              transform: rotateZ(-5deg);
              perspective: 200px;
            }
            .speaker-byline h3 {
              font-weight: bold;
              font-size: 1.4em;
              margin: 5px;
              
            }
            .speaker-byline p {
              font-weight: bold;
              font-size: 0.8em;
            }
            .speaker-small img {
              width: 150px;
            }
            @media only screen
            and (max-width : 600px) {
              .speaker-small {
                width: 100%;
              }
              .speaker-byline h3 {
                font-size: 1.2em;
              }
            }
        `}</style>
        <img src={speakerImage} alt={speaker.name} />
        <div className="speaker-byline">
          <div className="byline-background" />
          <div className="byline-background-white" />
          <div className="byline-foreground">
            <h3>{speaker.name}</h3>
            <p>{speaker.bio}</p>
          </div>

        </div>
      </div>
    );
  }

  handleSpeakerClick() {
    window.location = "/speakers/" + this.props.year + "/" + this.props.speaker.id;
  }
}

export default SpeakerBadge;
