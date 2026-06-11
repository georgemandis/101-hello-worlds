/**
 *  Hello World #59
 *  By @georgemandis
 *
 *  Conway's Game of Life: initial patterns are built from stable "still lifes".
 *  After one generation, the population count of each grid yields an ASCII code.
 *  Uses blocks (4 cells), beehives (6 cells), boats (5 cells), and tubs (5 cells).
 */

module.exports = () => {
  const step = (grid, rows, cols) => {
    const next = Array.from({ length: rows }, () => Array(cols).fill(0));
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        let n = 0;
        for (let dr = -1; dr <= 1; dr++) {
          for (let dc = -1; dc <= 1; dc++) {
            if (dr === 0 && dc === 0) continue;
            const nr = r + dr, nc = c + dc;
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) n += grid[nr][nc];
          }
        }
        next[r][c] = grid[r][c] ? (n === 2 || n === 3 ? 1 : 0) : (n === 3 ? 1 : 0);
      }
    }
    return next;
  };

  // Still lifes (survive indefinitely):
  // Block: 4 cells - [[0,0],[0,1],[1,0],[1,1]]       fits in 2x2
  // Beehive: 6 cells - [[0,1],[0,2],[1,0],[1,3],[2,1],[2,2]]  fits in 3x4
  // Boat: 5 cells - [[0,0],[0,1],[1,0],[1,2],[2,1]]   fits in 3x3
  // Tub: 5 cells - [[0,1],[1,0],[1,2],[2,1]]          4 cells, fits in 3x3

  const BLOCK = [[0,0],[0,1],[1,0],[1,1]];                          // 4 cells
  const BEEHIVE = [[0,1],[0,2],[1,0],[1,3],[2,1],[2,2]];            // 6 cells
  const BOAT = [[0,0],[0,1],[1,0],[1,2],[2,1]];                     // 5 cells

  // Build a configuration with exactly 'target' live cells using still lifes
  // All placed far enough apart to not interact (spacing of 4)
  const buildPattern = (target) => {
    const cells = [];
    let remaining = target;
    let slot = 0;

    while (remaining > 0) {
      const row = Math.floor(slot / 8) * 5;
      const col = (slot % 8) * 5;
      slot++;

      let pattern, size;
      if (remaining >= 6) {
        pattern = BEEHIVE; size = 6;
      } else if (remaining === 5) {
        pattern = BOAT; size = 5;
      } else if (remaining === 4) {
        pattern = BLOCK; size = 4;
      } else if (remaining === 3) {
        // Use a boat (5) and we'll have overshot; back up and re-plan
        // Actually: 3 is not possible with still lifes alone.
        // But remaining=3 means we previously could have used a boat instead of beehive.
        // Let's handle this: if remaining mod 4 or 5 or 6 doesn't work, adjust.
        // remaining=3: impossible with {4,5,6}. But we can do 5+4=9 minus 6=3? No.
        // Approach: go back and replace the last beehive(6) with a boat(5), leaving 4.
        // So: remove last beehive, add boat + block = 5+4=9, which covers 6+3=9.
        // Remove last 6 cells added (the beehive)
        cells.splice(cells.length - 6, 6);
        slot--; // reuse this slot
        const r2 = Math.floor(slot / 8) * 5;
        const c2 = (slot % 8) * 5;
        BOAT.forEach(([r, c]) => cells.push([r + r2, c + c2]));
        slot++;
        const r3 = Math.floor(slot / 8) * 5;
        const c3 = (slot % 8) * 5;
        BLOCK.forEach(([r, c]) => cells.push([r + r3, c + c3]));
        remaining = 0;
        continue;
      } else if (remaining === 2) {
        // remaining=2: not possible with {4,5,6}
        // Replace last beehive(6) with block(4), leaving 2+4=6 -> block+... still 2 left
        // Replace last beehive(6) with two separate placements summing to 8: impossible
        // Actually: remove last beehive(6), remaining becomes 2+6=8, use block+block=8
        cells.splice(cells.length - 6, 6);
        slot--;
        const r2 = Math.floor(slot / 8) * 5;
        const c2 = (slot % 8) * 5;
        BLOCK.forEach(([r, c]) => cells.push([r + r2, c + c2]));
        slot++;
        const r3 = Math.floor(slot / 8) * 5;
        const c3 = (slot % 8) * 5;
        BLOCK.forEach(([r, c]) => cells.push([r + r3, c + c3]));
        remaining = 0;
        continue;
      } else { // remaining === 1
        // remaining=1: remove last beehive(6), remaining becomes 7, use boat(5)+... no
        // Remove last beehive(6), remaining=1+6=7. Can't do with {4,5,6}.
        // Remove two beehives(12), remaining=1+12=13. 6+5+... nope, 5+4+4=13!
        cells.splice(cells.length - 12, 12);
        slot -= 2;
        const positions = [BOAT, BLOCK, BLOCK];
        for (const pat of positions) {
          const r2 = Math.floor(slot / 8) * 5;
          const c2 = (slot % 8) * 5;
          pat.forEach(([r, c]) => cells.push([r + r2, c + c2]));
          slot++;
        }
        remaining = 0;
        continue;
      }

      const r0 = row, c0 = col;
      pattern.forEach(([r, c]) => cells.push([r + r0, c + c0]));
      remaining -= size;
    }

    return cells;
  };

  const ROWS = 100, COLS = 50;
  const codes = [72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100];

  return codes.map((code) => {
    const liveCells = buildPattern(code);
    let grid = Array.from({ length: ROWS }, () => Array(COLS).fill(0));
    liveCells.forEach(([r, c]) => { grid[r][c] = 1; });
    grid = step(grid, ROWS, COLS);
    const population = grid.flat().reduce((s, v) => s + v, 0);
    return String.fromCharCode(population);
  }).join("");
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
