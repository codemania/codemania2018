import React, { Component } from "react";


class Community extends Component {

  componentDidMount () {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://codemania-slackin.herokuapp.com/slackin.js";

    document.getElementById("slackin-inviter").appendChild(script);
}

  render() {
    return (
      <div className="community">
        <style jsx="true">{`
          label {
            font-size: 24px !important;
            font-weight: normal !important;
          }

          #slackin-outer {
            text-align: center;
            margin: 30px;
          }
        `}</style>

        <div id="mc_embed_signup">
          <form action="https://codemania.us2.list-manage.com/subscribe/post?u=c613eaecd3430d404e9feaf6d&amp;id=757ab16a00" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>

            {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
            <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
              <input type="text" name="b_c613eaecd3430d404e9feaf6d_757ab16a00" tabIndex="-1" defaultValue="" />
            </div>

            <div id="mc_embed_signup_scroll">
              <label id="mce_subscribe_label" htmlFor="mce-EMAIL">Subscribe to our newsletter</label>
              <input type="email" defaultValue="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required />
              <div>
                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
              </div>
            </div>
          </form>
        </div>

        <div id="slackin-outer">
          <label>Join our Slack community</label>
          <div id="slackin-inviter"></div>
        </div>

      </div>
    );
  }
}

export default Community;
