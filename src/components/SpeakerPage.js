import React, { Component } from "react";

import { speakers } from "../constants";

const SpeakerPageStyle = () => {
  return (
    <style jsx="true">{`
      .bg {
        background: #fff;
      }
      .speaker-page {
        color: #44017d;
        margin: 40px auto;
        display: flex;
      }
      .speaker-page h1 {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 2em;
        margin-left: 2px;
      }
      .speaker-details {
        padding: 60px 20px 0 20px;
      }
      .speaker-byline {
        background: #44017d;
        color: #fff;
        text-transform: uppercase;
        margin-bottom: 1em;
        padding: 5px 5px 20px 5px;
        font-weight: bold;
        font-size: 0.9em;
        line-height: 1.1em;
      }
      .speaker-byline p a {
        color: #ffcd00;
        text-decoration:  none;
      }
      .talk-details p {
        margin-left: 3px;
        font-size: smaller;
        margin-bottom: 1em;
        line-height: 1.1em;
      }
      .talk-details p b {
        text-transform: uppercase;
      }
      .talk-details p a, .talk-details .hilite {
        color: #ffcd00;
        text-decoration:  none;
      }
      .talk-details p a:hover {
        text-decoration:  underline;
      }
      .speaker-byline p a:hover {
        text-decoration: underline;
      }
      @media only screen
        and (max-width : 600px) {
        .speaker-page {
          flex-direction: column;
        }
        .speaker-image {
          text-align: center;
        }
        .speaker-details {
          padding: 20px 10px;
        }
      }
    `}</style>);
};

class SpeakerPage extends Component {

  render() {
    var yearId = this.props.match.params.year;
    var speakerId = this.props.match.params.speaker;

    var speaker = speakers[yearId].speakers.find((s) => s.id === speakerId);
    var speakerImage
    try {
      speakerImage = require("../images/2019/speakers/round/" + speaker.id + ".png")
    } catch(err) {
      speakerImage = require("../images/2019/speakers/round/default.png")
    }
    return (
      <div className="speaker-page">
        <SpeakerPageStyle />
        <div className="speaker-image">
          <img src={speakerImage} alt={speaker.name} />
        </div>
        <div className="speaker-details">
          <h1>{speaker.name}</h1>
          <div className="speaker-byline">
            <p>{speaker.bio}</p>
            <p><a href={'https://twitter.com/' + speaker.twitter} target="_blank" rel="noopener noreferrer">@{speaker.twitter}</a></p>
          </div>
          <div className="talk-details">
            <p><b>{speaker.talkTopic}</b></p>
            <div dangerouslySetInnerHTML={{__html: speaker.talkBlurb}}/>
          </div>
        </div>
      </div>
    );
  }
}

export default SpeakerPage;
