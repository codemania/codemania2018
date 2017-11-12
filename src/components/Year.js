import React, { Component } from "react";

import SpeakerLayout from "../components/Speaker.js";
import type { Year } from "../constants";
import { speakers } from "../constants";

type Props = {
  year: Year
};

class YearLayout extends Component<Props> {
  render() {
    const year = speakers[this.props.year];
    return (
      <div className="Year">
        <style jsx="true">{`
            .Year {
                margin: 10px;
            }
            li {
                list-style: none;
                display: inline-block;
                margin: 5px;
            }
        `}</style>
        <ul>
          {year.speakers.slice().map((speaker) => {
              return (
            <li key={speaker.name}>
              <SpeakerLayout speaker={speaker} />
            </li>)
          })}
        </ul>
      </div>
    );
  }
}

export default YearLayout;
