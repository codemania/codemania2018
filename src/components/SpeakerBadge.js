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
      speakerImage = require("../images/2018/speakers/default.png")
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
            .speaker-byline {
              margin-top: -95px;
              position: relative;
              transform: rotateZ(-2deg);
            }
            .speaker-byline h3 {
              font-weight: bold;
              font-size: 1.5em;
              margin: 5px;
            }
            .speaker-byline p {
              font-weight: bold;
              font-size: 0.8em;
              text-transform: uppercase;
            }
            .speaker-small img {
              width: 195px;
            }
            @media only screen
            and (max-width : 600px) {
              .speaker-small {
                width: 100%;
              }
              .speaker-small img {
                width: 100%;
              }
              .speaker-byline {
                margin-top: -70px;
                position: relative;
                transform: rotateZ(-2deg);
                padding: 0 5px;
              }
              .speaker-byline h3 {
                font-size: 1em;
              }
              .speaker-byline p {
                font-size: 0.6em;
              }
            }
        `}</style>
        <img src={speakerImage} alt={speaker.name} />
        <div className="speaker-byline">
          <h3>{speaker.name}</h3>
          <p>{speaker.bio}</p>
        </div>
      </div>
    );
  }

  handleSpeakerClick() {
    window.location = "/speakers/" + this.props.year + "/" + this.props.speaker.id;
  }
}

export default SpeakerBadge;
