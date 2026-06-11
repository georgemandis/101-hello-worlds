/**
 *  Hello World #64
 *  By @georgemandis
 *
 *  Solves a maze where path cells encode the message "Hello, World"
 */

module.exports = () => {
  // Maze grid: '#' = wall, '.' = path, 'S' = start, 'E' = end
  // The solver follows the only valid path from S to E,
  // collecting characters placed on path cells along the way
  const maze = [
    "###############",
    "#S............#",
    "#############.#",
    "#.............#",
    "#.#############",
    "#.............#",
    "#############.#",
    "#............E#",
    "###############",
  ];

  const message = "Hello, World";

  // Parse the grid
  let start, end;
  const grid = maze.map((row, r) => {
    const cells = row.split('');
    cells.forEach((c, col) => {
      if (c === 'S') start = { r, c: col };
      if (c === 'E') end = { r, c: col };
    });
    return cells;
  });

  // BFS to find the unique path from S to E
  const visited = new Set();
  const parent = new Map();
  const queue = [start];
  const startKey = `${start.r},${start.c}`;
  visited.add(startKey);
  parent.set(startKey, null);
  let found = false;

  while (queue.length > 0) {
    const pos = queue.shift();
    if (pos.r === end.r && pos.c === end.c) {
      found = true;
      break;
    }
    for (const [dr, dc] of [[0,1],[1,0],[0,-1],[-1,0]]) {
      const nr = pos.r + dr;
      const nc = pos.c + dc;
      const key = `${nr},${nc}`;
      if (nr >= 0 && nr < grid.length && nc >= 0 && nc < grid[0].length &&
          grid[nr][nc] !== '#' && !visited.has(key)) {
        visited.add(key);
        parent.set(key, `${pos.r},${pos.c}`);
        queue.push({ r: nr, c: nc });
      }
    }
  }

  // Reconstruct path from end to start
  const path = [];
  let cur = `${end.r},${end.c}`;
  while (cur !== null) {
    const [r, c] = cur.split(',').map(Number);
    path.unshift({ r, c });
    cur = parent.get(cur);
  }

  // Place message chars on path cells (skip start 'S' and end 'E')
  const pathCells = path.slice(1, -1);
  // We only place characters at evenly spaced positions along the path
  const spacing = Math.floor(pathCells.length / message.length);
  const charPositions = [];
  for (let i = 0; i < message.length; i++) {
    const idx = i * spacing;
    const cell = pathCells[idx];
    grid[cell.r][cell.c] = message[i];
    charPositions.push(`${cell.r},${cell.c}`);
  }

  // Now solve the maze again, collecting characters from labeled cells
  const visited2 = new Set();
  const queue2 = [{ pos: start, path: [start] }];
  visited2.add(`${start.r},${start.c}`);

  while (queue2.length > 0) {
    const { pos, path: curPath } = queue2.shift();
    if (pos.r === end.r && pos.c === end.c) {
      // Walk the found path and collect characters
      let result = '';
      for (const cell of curPath) {
        const key = `${cell.r},${cell.c}`;
        if (charPositions.includes(key)) {
          result += grid[cell.r][cell.c];
        }
      }
      return result;
    }
    for (const [dr, dc] of [[0,1],[1,0],[0,-1],[-1,0]]) {
      const nr = pos.r + dr;
      const nc = pos.c + dc;
      const key = `${nr},${nc}`;
      if (nr >= 0 && nr < grid.length && nc >= 0 && nc < grid[0].length &&
          grid[nr][nc] !== '#' && !visited2.has(key)) {
        visited2.add(key);
        queue2.push({ pos: { r: nr, c: nc }, path: [...curPath, { r: nr, c: nc }] });
      }
    }
  }
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
