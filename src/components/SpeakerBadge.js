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
      <div className="speaker-small">
        <style jsx="true">{`
            .speaker-small {
                border: 1px solid;
                color: #fff;
                font-size: 0.8em;
            }
            .speaker-small h2 {
              text-transform: uppercase;
            }
        `}</style>
        <h2 onClick={this.handleSpeakerClick.bind(this)}>{speaker.name}</h2>
        <p onClick={this.handleSpeakerClick.bind(this)}>{speaker.bio}</p>
        <p><a href={'https://twitter.com/'+speaker.twitter} target="_blank">@{speaker.twitter}</a></p>
      </div>
    );
  }

  handleSpeakerClick() {
    window.location="/speakers/"+this.props.year+"/"+this.props.speaker.id;
  }
}

export default SpeakerBadge;
