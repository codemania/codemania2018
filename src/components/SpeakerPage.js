import React, { Component } from "react";

import { speakers } from "../constants";

class SpeakerPage extends Component {
  render() {
    var yearId = this.props.match.params.year;
    var speakerId = this.props.match.params.speaker;
    console.log(speakerId);
    var speaker = speakers[yearId].speakers.find((s) => s.id === speakerId);
    const speakerImage = require("../images/2018/speakers/" + speaker.id + ".png")
    return (
      <div className="speaker-page">
        <style jsx="true">{`
          .bg {
            background: #fff;
          }
          .speaker-page {
            color: #ff595a;
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
            background: #ff595a;
            color: #fff;
            text-transform: uppercase;
            margin-bottom: 1em;
            padding: 5px 0 25px 5px;
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

        `}</style>
        <div className="speaker-image">
          <img src={speakerImage} alt={speaker.name} />
        </div>
        <div className="speaker-details">
          <h1>{speaker.name}</h1>
          <div className="speaker-byline">
            <p>{speaker.bio}</p>
            <p><a href={'https://twitter.com/' + speaker.twitter} target="_blank">@{speaker.twitter}</a></p>
          </div>
          <div class="talk-details">
            <p>{speaker.talkTopic}</p>
            <p>{speaker.talkBlurb}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SpeakerPage;
