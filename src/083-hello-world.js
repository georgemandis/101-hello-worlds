/**
 *  Hello World #83
 *  By @georgemandis
 *
 *  Characters of "Hello, World" are placed in a crossword-style grid
 *  and extracted by following clue coordinates (row, col)
 */

module.exports = () => {
  // A crossword grid with "Hello, World" woven through it
  // The grid contains the characters at specific positions
  const grid = [
    ["H", "e", "l", "l", "o", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [",", ".", ".", ".", ".", ".", ".", ".", "."],
    [" ", ".", ".", ".", ".", ".", ".", ".", "."],
    ["W", "o", "r", "l", "d", ".", ".", ".", "."],
  ];

  // Clue answers read in order — coordinates for each character
  const clues = [
    // ACROSS clue 1: starts at (0,0) going right — "Hello"
    { row: 0, col: 0 }, // H
    { row: 0, col: 1 }, // e
    { row: 0, col: 2 }, // l
    { row: 0, col: 3 }, // l
    { row: 0, col: 4 }, // o
    // DOWN clue 2: punctuation column
    { row: 3, col: 0 }, // ,
    { row: 4, col: 0 }, // (space)
    // ACROSS clue 3: starts at (5,0) going right — "World"
    { row: 5, col: 0 }, // W
    { row: 5, col: 1 }, // o
    { row: 5, col: 2 }, // r
    { row: 5, col: 3 }, // l
    { row: 5, col: 4 }, // d
  ];

  return clues.map((clue) => grid[clue.row][clue.col]).join("");
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
