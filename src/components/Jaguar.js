import React, { Component } from "react";

import jaguar from "../images/2018/jaguar-crop.svg";

class Jaguar extends Component<Props> {
  render() {
    return (
      <div className="Jaguar">
        <style jsx="true">{`
            .Jaguar {
                height: 100%;
            }
            .jaguar-image {
                height: 100%;
            }
            @media only screen 
            and (min-device-width : 414px) 
            and (max-device-width : 736px) {
                .Jaguar {
                    width: 100%;
                    height: auto;
                }
                .jaguar-image {
                    width: 100%;
                    height: auto;
                }
            }
        `}</style>
        <img src={jaguar} className="jaguar-image" alt="Jaguar spewing lava" />
      </div>
    );
  }
}

export default Jaguar;
