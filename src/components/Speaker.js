import React, { Component } from "react";

import type { Speaker } from "../constants.js";

type Props = {
  speaker: Speaker
};

class SpeakerLayout extends Component<Props> {
  render() {
    const speaker = this.props.speaker;
    return (
      <div className="speaker-small">
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
}

export default SpeakerLayout;
