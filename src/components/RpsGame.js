import React, { Component } from 'react';

import RpsPicker from './RpsPicker'

export default class RpsGame extends Component{
  constructor(props){
    super(props);

    this.state = {
      choice1: null,
      choice2: null,
    }
    
    this.handleChoice = this.handleChoice.bind(this);
  }

  handleChoice (player, choice) {
    if (player === 1) {
      this.setState({
        choice1: choice
      });
    }

    if (player === 2) {
      this.setState({
        choice2: choice
      });
    }
  }
  
  calculateWinner (choice1, choice2) {
    if (!choice1 || !choice2) {
      return null;
    } else if (choice1 === choice2) {
      return "empate waah";
    } else if (choice1 === "piedra" && choice2 === "tijera") {
      return "player 1 wins!";
    } else if (choice1 === "tijera" && choice2 === "papel") {
      return "player 1 wins!";
    } else if (choice1 === "papel" && choice2 === "piedra") {
      return "player 1 wins!";
    } else {
      return "player 2 wins!";
    }
  }

  render(){
    return (
      <div className="container">
        <RpsPicker
          player={1}
          onClick={this.handleChoice}
        />
        <RpsPicker
          player={2}
          onClick={this.handleChoice}
        />
        <hr/>
        winner: {this.calculateWinner(this.state.choice1, this.state.choice2)}
      </div>
    )
  }
}