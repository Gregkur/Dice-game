import React, { Component } from "react";
import "../style/Die.css";

export default class Die extends Component {
  render() {
    return (
      <div>
        <i
          className={`fas fa-dice-${this.props.face} ${
            this.props.rolling ? "wobble-hor-bottom" : ""
          }`}
        ></i>
      </div>
    );
  }
}
