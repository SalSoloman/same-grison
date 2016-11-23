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
    let topRow = this.state.board[0] + this.state.board[1] + this.state.board[2];
      if(topRow.match(/xxx|ooo/)) {
        this.setState({winner: this.state.currentTurn });
        return;
      }
    let middleRow = this.state.board[3] + this.state.board[4] + this.state.board[5];
      if(middleRow.match(/xxx|ooo/)) {
        this.setState({winner: this.state.currentTurn });
        return;
      }
    let bottomRow = this.state.board[6] + this.state.board[7] + this.state.board[8];
      if(bottomRow.match(/xxx|ooo/)) {
        this.setState({winner: this.state.currentTurn });
        return;
      }
    let leftColumn = this.state.board[0] + this.state.board[3] + this.state.board[6];
      if(leftColumn.match(/xxx|ooo/)) {
        this.setState({winner: this.state.currentTurn });
        return;
      }
    let middleColumn = this.state.board[1] + this.state.board[4] + this.state.board[7];
      if(middleColumn.match(/xxx|ooo/)) {
        this.setState({winner: this.state.currentTurn });
        return;
      }
    let rightColumn = this.state.board[2] + this.state.board[5] + this.state.board[8];
      if(rightColumn.match(/xxx|ooo/)) {
        this.setState({winner: this.state.currentTurn });
        return;
      }
    let leftDiag = this.state.board[0] + this.state.board[4] + this.state.board[8];
      if(leftDiag.match(/xxx|ooo/)) {
        this.setState({winner: this.state.currentTurn });
        return;
      }
    let rightDiag = this.state.board[2] + this.state.board[4] + this.state.board[6];
      if(rightDiag.match(/xxx|ooo/)) {
        this.setState({winner: this.state.currentTurn });
        return;
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
