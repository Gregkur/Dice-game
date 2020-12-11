import React, { Component } from 'react'
import '../style/Die.css'

export default class Die extends Component {
  render() {
    return (
      <div>
        <i class={`fas fa-dice-${this.props.face}`}></i>
      </div>
    )
  }
}
