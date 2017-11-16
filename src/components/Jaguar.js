import React, { Component } from "react";

import jaguar from "../images/2018/jaguar.svg";

class Jaguar extends Component<Props> {
  render() {
    return (
      <div className="Jaguar">
        <style jsx="true">{`
            
        `}</style>
        <object data={jaguar} />
      </div>
    );
  }
}

export default Jaguar;
