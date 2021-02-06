import React, { Component } from "react";


class Cancellation extends Component {
    
    render() {
        return (
            <div className="cancelMessage" id="cancelMessage">
                <style jsx="true">{`
                .cancelMessage p {
                    margin: 1em auto;
                }
                .cancelMessage {
                    text-align: center;
                }
                `}</style>
                <div>
                    <p>Sadly, Codemania has been cancelled for the foreseeable future</p>
                    <p>On behalf of Ben and Ian, we'd like to thank you, our community, for your support through the years.</p>
                    <p>We don't know if there will be a Codemania 2022 at this stage</p>
                    <p>Nga mihi nui</p>
                </div>
            </div>
        );
    }
}

export default Cancellation;