import React, { Component } from "react";
import Die from "./Die";
import "../style/RollDice.css";

export default class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };
  constructor(props) {
    super(props);
    let die1 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    let die2 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    this.state = { die1: die1, die2: die2, rolling: false };
    //bindging the function to an instance
    this.roll = this.roll.bind(this);
  }
  roll = () => {
    //pick two numbers
    const newDie1 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    const newDie2 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    //set state
    this.setState({ die1: newDie1, die2: newDie2, rolling: true });
    // wait a secong then set rolling to false
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  };
  render() {
    return (
      <div className="RollDice-container">
        <Die face={this.state.die1} rolling={this.state.rolling} />
        <Die face={this.state.die2} rolling={this.state.rolling} />
        <div className="RollDice-button">
          <button onClick={this.roll} disabled={this.state.rolling}>
            {this.state.rolling ? "Rollling.." : "Roll Dice!"}
          </button>
        </div>
      </div>
    );
  }
}
