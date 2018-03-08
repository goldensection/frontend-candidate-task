import React from 'react';
import ReactDOM from 'react-dom';
import styled, {injectGlobal} from 'styled-components';

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

const Container = styled.div`
  max-width: 800px;
  padding: 40px;
  margin: 0 auto;
`;

const GameContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  border: 1px solid black;
`;

const GameOfLife = () => {
  return (
    <Container>
      <h1>{'My Own Game of Life'}</h1>
      <GameContainer>
      </GameContainer>
    </Container>
  );
}

ReactDOM.render(
  <GameOfLife />,
  document.getElementById('app')
);

module.hot.accept();
