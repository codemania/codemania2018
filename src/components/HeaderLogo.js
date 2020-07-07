import React, { Component } from 'react'

import logo from "../images/2020/assets/logo2021.png";

export default class HeaderLogo extends Component {
  render() {
    return (
      <div className="logo">
        <img src={logo} alt="Codemania Logo" />
      </div>
    )
  }
}