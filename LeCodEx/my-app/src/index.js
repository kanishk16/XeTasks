import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// class Square extends React.Component {
   //Constructor not required because Square no longer keeps track of the game’s state  
//  =================================================
//  1....// constructor(props){
         //     super(props);
         //     this.state={
         //         value:null,
         //     };
         // }
// ===================================================         
//   render() {
//     return (
//       <button 
//       className="square" 
//       onClick={() => this.props.onClick()}>
//        {/* this.setState({value:'X'})} */}
//         {this.props.value}    
//       </button>
//     );
//   }
// }

// ====================================================
// fn. better in place of class = function component because aim only to render


function Square(props){
  return(
    <button
     className={`squares${props.disable && 'board'}`} onClick={props.onClick}> 
       {props.value}
     </button>
  )
}

class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
            boardDisable: false
        };
    }  
  
    handleClick(i){
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
          this.setState({boardDisable: true})
          return;
        }
        squares[i]= this.state.xIsNext ? 'X': 'O';
        this.setState({
          squares: squares,
          xIsNext: !this.state.xIsNext
        });
        //console.dir({squares});
    }
    renderSquare(i, winner) {
      if(winner){
        return (  
          <Square 
             disable= {this.boardDisable}
             value={this.state.squares[i]}
             onClick={()=> this.handleClick(i)}
          />
         ); 
      }else{
      return (
     <Square 
        value={this.state.squares[i]}
        onClick={()=> this.handleClick(i)} 
     />
    );
   }
  }

  render() {
    const winner =  calculateWinner(this.state.squares);
    let status;
    if(winner){
      status = 'Winner: ' + winner;
    }else{
      status = 'Next player: ' + (this.state.xIsNext ? 'X': 'O');
    } 

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

const flagWinners = [];

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      flagWinners = lines[i];
      return squares[a];
    }
  }
  return null;
}