import React, { Component } from 'react'

import logo from "../images/2019/logo-cm.svg";

export default class HeaderLogo extends Component {
  render() {
    return (
      <div className="logo">
        <img src={logo} alt="Codemania Logo" />
      </div>
    )
  }
}