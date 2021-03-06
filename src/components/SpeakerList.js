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
        <div className="speaker-container">
          <style jsx="true">{`
            .speaker-list {
              width: 800px;
              margin: 0 auto;
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
            }
            .speaker-list li {
              padding: 10px;
            }
            @media only screen
            and (max-width : 600px) {
              .speaker-list {
                width: 100%;
              }
              .speaker-list li {
                width: 40%;
              }
            }
            `}
          </style>
          <h1>Speakers</h1>
            <ul className="speaker-list">
              {year.speakers.slice().filter(speaker => !speaker.hideFromHomePage).map(speaker => {                
                return (
                  <li key={speaker.name}>
                    <SpeakerBadge speaker={speaker} year={year.displayName} />
                  </li>
                );
              })}
            </ul>
        </div>
          );
    } else {
      return (<h2>Sorry, we can't find a speakerlist for {year.displayName}</h2>);
    }
  }
}

export default SpeakerList;
