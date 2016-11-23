import React, { Component } from 'react';
import './App.css';
import ResetButton from './ResetButton.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      PLAYER_ONE_SYMBOL: "X",
      PLAYER_TWO_SYMBOL: "O",
      currentTurn: "X",
      board: [
        "", "", "", "", "", "", "", "", ""
      ],
      winner: null,
    }
  }

  gameBoardHasWin = function() {
    const rows = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6],  [1,4,7],  [2,5,8],  [0,4,8],  [2,4,6] ]
    const set = rows.index
    for(this.set in this.rows){
      if( this.state.board[set[1]] === this.state.board[set[2]] &&    this.state.board[set[2]] === this.state.board[set[3]]){
      return true
      } else {
      return false
      }
    }
  }

  handleClick(index){
    if(this.state.board[index] === "") {
      this.state.board[index] = this.state.currentTurn
      this.setState({
        board: this.state.board
      })

      if(this.gameBoardHasWin()) {
        this.setState({
          winner: this.state.currentTurn
        })
      }

      if(this.state.winner) {
        // update appearance of component
      } else {
        this.setState({
            currentTurn: this.state.currentTurn === this.state.PLAYER_ONE_SYMBOL ? this.state.PLAYER_TWO_SYMBOL : this.state.PLAYER_ONE_SYMBOL,
        })
      }
    }
  }

  resetBoard() {
    this.setState({
      board: [
        "", "", "", "", "", "", "", "", ""
      ],
      currentTurn: 'X',
      winner: null
    })
  }

  render() {
    return (
      <div className="container">
        <ResetButton className="button1" reset={this.resetBoard.bind(this)} />
        <div className="board">
          {this.state.board.map((cell, index) => {
            return <div onClick={() => this.handleClick(index)} className="square">{cell}</div>;
          })}
        </div>
      </div>
    );
  }

}

export default App
