# Interview Question IGG

You're building a [cellular automata simulator](https://en.wikipedia.org/wiki/Cellular_automaton). In particular you are building one for Game Of Life.

A cellular automata is defined as:
Given a board with m by n cells, each cell has an initial state live (1) or dead (0).
Each cell interacts with its eight neighbors (horizontal, vertical, diagonal).

Game of life is defined with these rules:

1. Any live cell with fewer than two live neighbors dies, as if cased by under-population
2. Any live cell with two or three live neighbors lives on to the next generation.
3. Any live cell with more than three live neighbors dies, as if by over-population.
4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

## Your task

Create a website, where the grid is shown and game of life is simulated. One should be able to "draw" on the grid, to create cells that are alive. For this you should use the given project structure.

## Setup

To save you some time and for us to see how you use relevant technologies for us, we created a small boilerplate.

1. Make sure you have an up to date node version with npm. Execute `npm install` in this directory
2. Execute `npm start` to compile the project, it is now served at [http://localhost:3000/](http://localhost:3000/).
3. Changes can be made in `src/index.js`. You can also add additional files etc.

## Questions to consider

1. Why did you use this data structure?
2. Why did you use dom/canvas 2d/webgl for rendering? What are the pros/cons for each?
3. How would you go to create a general purpose cellular automata?
4. Did it make sense to build with React? What were problems in comparison to vanilla JS?
