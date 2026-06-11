/**
 *  Hello World #75
 *  By @georgemandis
 *
 *  Gravity sort (bead sort) — drop "balls" in columns,
 *  read off character codes from column heights
 */

module.exports = () => {
  // Gravity sort (bead sort) works by representing numbers as rows of beads
  // on an abacus. Beads fall due to "gravity", sorting the rows.
  //
  // We arrange the character codes of "Hello, World" in a specific order
  // so that after gravity sort (which sorts ascending), we can reconstruct
  // the message using an index map.

  const target = "Hello, World";
  const codes = [];
  for (let i = 0; i < target.length; i++) {
    codes.push(target.charCodeAt(i));
  }
  // codes = [72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100]

  // Create pairs of [originalIndex, charCode] for tracking
  const indexed = codes.map((c, i) => [i, c]);

  // Gravity/bead sort implementation
  function beadSort(arr) {
    const max = Math.max(...arr);
    // Create the bead grid: each row has 'arr[i]' beads
    const grid = [];
    for (let i = 0; i < arr.length; i++) {
      grid.push(new Array(max).fill(0));
      for (let j = 0; j < arr[i]; j++) {
        grid[i][j] = 1;
      }
    }

    // Let beads fall (gravity): for each column, count beads and stack at bottom
    for (let col = 0; col < max; col++) {
      let beadCount = 0;
      for (let row = 0; row < arr.length; row++) {
        beadCount += grid[row][col];
        grid[row][col] = 0;
      }
      // Stack beads at the bottom (last rows)
      for (let row = arr.length - 1; row >= arr.length - beadCount; row--) {
        grid[row][col] = 1;
      }
    }

    // Read sorted values from row bead counts
    const sorted = [];
    for (let i = 0; i < arr.length; i++) {
      sorted.push(grid[i].reduce((a, b) => a + b, 0));
    }
    return sorted;
  }

  // Sort the character codes using bead sort
  const sortedCodes = beadSort([...codes]);

  // Build a mapping: for each original character, find its position in sorted array
  // We need to unsort: reconstruct original order from sorted result
  // Create sorted pairs with original indices
  const sortedIndexed = indexed.slice().sort((a, b) => a[1] - b[1]);

  // Map sorted positions back to original positions
  const result = new Array(codes.length);
  for (let i = 0; i < sortedCodes.length; i++) {
    const originalIndex = sortedIndexed[i][0];
    result[originalIndex] = String.fromCharCode(sortedCodes[i]);
  }

  return result.join('');
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
