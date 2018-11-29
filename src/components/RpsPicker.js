import React, { Component } from 'react';

export default class RpsPicker extends Component {
  constructor(props){
    super(props);

    this.state = {
      choice: ""
    }
    this.getChoice = this.getChoice.bind(this);
  }

  getChoice () {
    var choice = ["piedra","papel","tijera"][Math.floor(Math.random()*3)];
    this.props.onClick(this.props.player, choice);
    this.setState({ choice });
  }

  render() {
   return(
    <div>
      <button onClick={this.getChoice}>
        Player {this.props.player}
      </button>
      <label>
        {this.state.choice}
      </label>
    </div>
    );
 }
}