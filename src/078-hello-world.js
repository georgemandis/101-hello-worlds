/**
 *  Hello World #78
 *  By @georgemandis
 *
 *  Constructs a 4x4 magic square and reads character codes from
 *  specific cells in a predetermined order to spell "Hello, World"
 */

module.exports = () => {
  // Build a 4x4 magic square using the Dürer method variant
  // We'll store character codes in a flat grid and use magic-square-style
  // indexing to retrieve them.

  // "Hello, World" = [72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100]
  // We create a 4x4 grid (16 cells) and place char codes at specific positions.
  // The "magic" is in the traversal order derived from the magic square.

  // Classic 4x4 magic square (rows/cols/diags all sum to 34):
  // 16  3  2 13
  //  5 10 11  8
  //  9  6  7 12
  //  4 15 14  1
  const magicSquare = [
    [16, 3, 2, 13],
    [5, 10, 11, 8],
    [9, 6, 7, 12],
    [4, 15, 14, 1],
  ];

  // We place our 12 characters at positions 1-12 in the magic square.
  // Position n (1-based) in the magic square tells us the reading order.
  // We'll create a data grid where cell value at magic square position k
  // holds the k-th character code.

  const chars = [72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100];

  // Map: magic square value (1-12) → character code
  const valueToChar = {};
  for (let i = 0; i < chars.length; i++) {
    valueToChar[i + 1] = chars[i];
  }

  // Read cells in row-major order, but only those with magic values 1-12
  // The magic square tells us which character index to read at each cell.
  const dataGrid = [];
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      const val = magicSquare[r][c];
      if (val <= 12) {
        dataGrid.push({ order: val, charCode: chars[val - 1] });
      }
    }
  }

  // Sort by magic square value to reconstruct the original order
  dataGrid.sort((a, b) => a.order - b.order);

  return dataGrid.map((item) => String.fromCharCode(item.charCode)).join("");
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
