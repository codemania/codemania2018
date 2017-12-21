import React, { Component } from "react";

import SpeakerBadge from "../components/SpeakerBadge";
import { speakers } from "../constants";

import leaves from "../images/2018/top-leaves.svg"
import bottomPyramid from "../images/2018/bot-pyramid.svg"
import repeatLeaves from "../images/2018/leaves.svg"

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
            .speaker-container {
              background: 
                url("`+bottomPyramid+`") no-repeat bottom center,
                url("`+leaves+`") no-repeat top center;
              background-size: 80%;
              width: 100%;
            }
            .speaker-list {
              width: 800px;
              margin: 0 auto 250px auto;
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
            }
            .speaker-list li {
              width: 25%;
              margin: 0;
            }
            @media only screen
            and (max-width : 600px) {
              .speaker-container {
                background: 
                  url("`+bottomPyramid+`") no-repeat bottom center,
                  url("`+repeatLeaves+`") repeat-y top center;
                background-size: 100%;
              }
              .speaker-list {
                width: 100%;
                margin-bottom: 100px;
              }
              .speaker-list li {
                width: 40%;
                margin: 10px;
              }
            }
            `}
          </style>
          <h1>Speakers</h1>
            <ul className="speaker-list">
              {year.speakers.slice().map(speaker => {
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
