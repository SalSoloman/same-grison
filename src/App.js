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
      twoDimensionalBoard: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
      ],
      winner: null,
    }
  }

  gameBoardHasWin = function(rowIndex, colIndex, cell) {
    console.log(`rowIndex: ${rowIndex}, colIndex: ${colIndex}, cell: ${cell}`);
    //horizontally
    let hasWin = false

    for(let col = 0; col < 3; col++) {
      if (this.state.twoDimensionalBoard[rowIndex][col] !== cell) {
        break
      }
      if (col === 2) {
        return true
      }
    }
    for(let row = 0; row < 3; row++) {
      if (this.state.twoDimensionalBoard[row][colIndex] !== cell) {
        break
      }

      if (row === 2) {
        return true
      }
    }

    if (rowIndex === colIndex) {
      for(let i = 0; i < 3; i++) {
        if (this.state.twoDimensionalBoard[i][i] !== cell ||
            this.state.twoDimensionalBoard[i][-i] !== cell) {
              break
            }
        if (i === 2) {
          return true
        }
      }
    }
    return false
    //check row index against cell to see matching
    //vertically
    //for
    //diagonally

    // const rows = [
    //
    // ]

    /*const rows = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6],  [1,4,7],  [2,5,8],  [0,4,8],  [2,4,6] ]


    const set = rows.index

    for(this.set in this.rows){
      if( this.state.board[set[1]] === this.state.board[set[2]] &&    this.state.board[set[2]] === this.state.board[set[3]]){
      return true
      } else {
      return false
      }
    }*/
  }

  handleClick(rowIndex, colIndex, cell){

    console.log(`cell: ${cell}`);

    let board = this.state.twoDimensionalBoard
    board[rowIndex][colIndex] = this.state.currentTurn

    if(cell === "") {
      // cell = this.state.currentTurn
      console.log(`${board}`);

      this.setState({
        board: this.state.board,
        twoDimensionalBoard: board
      })

      if(this.gameBoardHasWin(rowIndex, colIndex, this.state.currentTurn)) {
        // update appearance of component
        alert('You\'re a winner!')
        this.setState({
          winner: this.state.currentTurn
        })
      } else {
        this.setState({
            currentTurn: this.state.currentTurn === this.state.PLAYER_ONE_SYMBOL ? this.state.PLAYER_TWO_SYMBOL : this.state.PLAYER_ONE_SYMBOL,
        })
      }

      /*if(this.state.winner) {
        // update appearance of component
        console.log('there\'s a winner!')
      } else {
        this.setState({
            currentTurn: this.state.currentTurn === this.state.PLAYER_ONE_SYMBOL ? this.state.PLAYER_TWO_SYMBOL : this.state.PLAYER_ONE_SYMBOL,
        })
      }*/
    }
  }

  resetBoard() {
    this.setState({
      board: [
        "", "", "", "", "", "", "", "", ""
      ],
      twoDimensionalBoard: [
        ["", "", ""], //row 0
        ["", "", ""], //row 1
        ["", "", ""]  //row 2
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
          {/*this.state.board.map((cell, col) => {
            return <div onClick={() => this.handleClick(col)} className="square">{cell}</div>;
          })*/}
          {this.state.twoDimensionalBoard.map((rows, rowIndex) => {
            console.log(`rows: ${rows}, rowIndex: ${rowIndex}`)
            return rows.map( (cell, colIndex) => {
              console.log(`cell: ${cell}, colIndex: ${colIndex}`)
              return <div onClick={() => this.handleClick(rowIndex, colIndex, cell)} className="square">{this.state.twoDimensionalBoard[rowIndex][colIndex]}</div>;
            })
          })}
        </div>
      </div>
    );
  }

}

export default App
