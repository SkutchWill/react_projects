import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';


/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {
  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 0.16
  };

  constructor(props) {
    super(props);
    this.state = { hasWon: false, board: this.createBoard()};
    this.flipCellsAround = this.flipCellsAround.bind(this);
    // TODO: set initial state
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    let board = [];
    for (let i = 0; i < this.props.nrows; i++) {
      board.push([]);
      for (let j = 0; j < this.props.ncols; j++) {
        board[i].push(Math.random() < this.props.chanceLightStartsOn);  
      };
    }
    // TODO: create array-of-arrays of true/false values
    return board
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    let {ncols, nrows} = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);


    function flipCell(y, x) {
      // if this coord is actually on board, flip it

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    flipCell(y, x);
    flipCell(y - 1, x);
    flipCell(y + 1, x);
    flipCell(y, x + 1);
    flipCell(y, x - 1);


    // TODO: flip this cell and the cells around it

    // win when every cell is turned off
    // TODO: determine if the game has been won

    let hasWon = board.every(row => row.every(cell => !cell));

    this.setState({board, hasWon});
  }


  /** Render game board or winning message. */

  render() {

    // if the game is won, just show a winning msg & render nothing else

    // TODO
    
    // make table board
    
    // TODO
    return(
      <div>
        {this.state.hasWon ? (
          <div className='winner'>
            <span className='neon-orange'>YOU</span>
            <span className='neon-blue'>WIN!</span>
          </div>          
        ) : (
          <div>
            <div className='Board-title'>
              <div className='neon-orange'>Lights</div>
              <div className='neon-blue'>Out</div>
            </div>        
              <table className='Board'>
                <tbody>
                  {this.state.board.map((el, idx) =>
                  <tr key={idx}>{el.map((arr, innerIdx) =>
                      <Cell 
                        key={`${idx}-${innerIdx}`} 
                        isLit={arr} 
                        flipCellsAroundMe={() => this.flipCellsAround(`${idx}-${innerIdx}`)}
                      />)}
                    </tr> )}
                </tbody>
              </table> 
          </div>
        )}
        
      </div>
        
    )
  }
}


export default Board;
