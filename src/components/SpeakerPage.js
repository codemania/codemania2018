import React, { Component } from "react";

import { speakers } from "../constants";

class SpeakerPage extends Component {
  render() {
    var yearId = this.props.match.params.year;
    var speakerId = this.props.match.params.speaker;
    console.log(speakerId);
    var speaker = speakers[yearId].speakers.find((s) => s.id === speakerId);
    return (
      <div className="speaker-page">
        <style jsx="true">{`
          .speaker-page {
            color: #fff;
          }
          .speaker-page h2 {
            text-transform: uppercase;
            font-weight: bold;
          }
          .speaker-page p {
             margin: 10px 0;
          }
        `}</style>
        <h2>{speaker.name}</h2>
        <p>{speaker.bio}</p>
        <p><a href={'https://twitter.com/'+speaker.twitter} target="_blank">@{speaker.twitter}</a></p>
        <p>{speaker.talkTopic}</p>
        <p>{speaker.talkBlurb}</p>
      </div>
    );
  }
}

export default SpeakerPage;
