import React, { Component } from "react";

import type { Speaker } from "../constants.js";

type Props = {
  speaker: Speaker,
  year: Year
};

class SpeakerBadge extends Component<Props> {
  render() {
    const speaker = this.props.speaker;
    return (
      <div className="speaker-small" onClick={this.handleSpeakerClick.bind(this)}>
        <style jsx="true">{`
            .speaker-small {
                border: 1px solid;
            }
        `}</style>
        <h2>{speaker.name}</h2>
        <p>{speaker.topic}</p>
      </div>
    );
  }

  handleSpeakerClick() {
    window.location="/speakers/"+this.props.year+"/"+this.props.speaker.id;
  }
}

export default SpeakerBadge;
