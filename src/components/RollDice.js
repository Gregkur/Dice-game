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
    this.state = { die1: die1, die2: die2 };
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
    this.setState({ die1: newDie1, die2: newDie2 });
  };
  render() {
    return (
      <div className="RollDice-container">
        <Die face={this.state.die1} />
        <Die face={this.state.die2} />
        <div className="RollDice-button">
          <button onClick={this.roll}>Roll the dice!</button>
        </div>
      </div>
    );
  }
}
