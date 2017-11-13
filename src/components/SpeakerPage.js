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
            
        `}</style>
        <h2>{speaker.name}</h2>
        <p>{speaker.topic}</p>
      </div>
    );
  }
}

export default SpeakerPage;
