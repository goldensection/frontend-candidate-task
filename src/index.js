import React from 'react';
import ReactDOM from 'react-dom';
import styled, {injectGlobal} from 'styled-components';

const COLORS = {
  primary: 'yellow',
};

//
// UTILITY FUNCTIONS
//

// range(5) => [0, 1, 2, 3, 4]
function range(n) {
  return Array(n).fill().map((_, i) => i);
}


//
// GLOBAL STYLES
//

injectGlobal`
  * {
    box-sizing: border-box;
  }
  body {
    font-family: "Helvetica Neue", sans-serif;
    background: #EEEEEE;
    margin: 0;
    padding: 0;
  }
`;

//
// STYLED COMPONENTS
//

const Container = styled.div`
  max-width: 800px;
  padding: 40px;
  margin: 0 auto;
`;

const GameContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  border: 2px solid black;
`;

const Cell = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid #EEE;
  background: ${props => props.alive ? 'black' : 'white'};

  &:hover {
    background: ${COLORS.primary};
  }
`;

const Button = styled.button`
  text-transform: uppercase;
  margin-top: 5px;
  border-radius: 0;
  background: white;
  border: 2px solid black;
  padding: 10px;

  &:hover {
    background: ${COLORS.primary};
  }

  &:focus {
    outline: none;
  }
`;

//
// GOL
//

class GameOfLife extends React.Component {
  constructor(props) {
    super(props);
    this.setBoardContainer = this.setBoardContainer.bind(this);
    this.state = {
      cells: [],
      cellSize: 20,
      height: 1,
      width: 1,
      rows: 1,
      columns: 1,
    }
  }

  setBoardContainer(dom) {
    this.boardContainer = dom;
    this.updateBoard();
    window.addEventListener('resize', () => this.updateBoard());
  }

  updateBoard() {
    const height = this.boardContainer.clientHeight;
    const width = this.boardContainer.clientWidth;
    // a column is also called x sometimes
    const columns = Math.floor(width / this.state.cellSize);
    // a row is also called y sometimes
    const rows = Math.floor(height / this.state.cellSize);
    const cells = this.createBoard(columns, rows);

    this.setState({
      height,
      width,
      cells,
      rows,
      columns,
    });
  }

  createBoard(columns, rows) {
    return range(columns).map(i => {
      return range(rows).map(_ => false);
    });
  }

  // set a cell alive
  setAlive(x, y) {
  }

  // get the alive neighbours of a cell
  getNumberOfAliveNeighbours(x, y) {
  }

  // iteration step, use the rules to determine which cells should be alive
  step() {
  }

  render() {

    const skewX = this.state.width / (this.state.columns * this.state.cellSize);
    const skewY = this.state.height / (this.state.rows * this.state.cellSize);

    return (
      <Container>
        <h1>{'My Own Game of Life'}</h1>
        <GameContainer innerRef={this.setBoardContainer}>
          <div
            style={{
              transform: `scale(${skewX}, ${skewY})`,
              transformOrigin: 'top left',
            }}
          >
            {this.state.cells.map((column, x) => {
              return column.map((alive, y) => {
                return (
                  <Cell
                    onClick={() => this.setAlive(x, y)}
                    key={`${y}_${x}`}
                    alive={alive}
                    style={{
                      transform: `translate(${x * this.state.cellSize}px, ${y * this.state.cellSize}px)`,
                      height: this.state.cellSize,
                      width: this.state.cellSize,
                    }}
                  />
                );
              });
            })}
          </div>
        </GameContainer>
        <Button onClick={() => this.step()}>
          {'Next Iteration'}
        </Button>
      </Container>
    );
  }
}

ReactDOM.render(
  <GameOfLife />,
  document.getElementById('app')
);

module.hot.accept();
