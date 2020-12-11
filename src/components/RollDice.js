import React, { Component } from 'react'
import Die from './Die'
import Button from './Button'
import '../style/RollDice.css'

export default class RollDice extends Component {
  render() {
    return (
      <div className = "RollDice-container">
        <Die face = 'six'/>
        <Die face = 'two'/>
        <div className = "RollDice-button">
          <Button />
        </div>
      </div>
    )
  }
}
