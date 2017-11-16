import React, { Component } from "react";

import SpeakerBadge from "../components/SpeakerBadge";
import { speakers } from "../constants";

type Props = {
  year: Year
};

class SpeakerList extends Component<Props> {
  render() {
    const year = speakers[this.props.year];
    if (year.speakers) {
      return (
          <ul className="speaker-list">
            {year.speakers.slice().map(speaker => {
              return (
                <li key={speaker.name}>
                  <SpeakerBadge speaker={speaker} year={year.displayName} />
                </li>
              );
            })}
          </ul>);
    } else {
      return (<h2>....speaker list coming soon...</h2>);
    }
  }
}

export default SpeakerList;
