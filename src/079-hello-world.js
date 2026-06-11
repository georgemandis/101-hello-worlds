/**
 *  Hello World #79
 *  By @georgemandis
 *
 *  Plots points on a coordinate plane where the x-coordinate is the
 *  character position and the y-coordinate is the character code,
 *  then reads back the string from the plotted points
 */

module.exports = () => {
  // Points plotted on a coordinate plane: (x, y) where
  // x = position in string, y = ASCII character code
  // Additional decoy points are mixed in to make it interesting
  const points = [
    { x: 5, y: 44 },   // ','
    { x: 11, y: 100 },  // 'd'
    { x: 3, y: 108 },  // 'l'
    { x: 0, y: 72 },   // 'H'
    { x: 9, y: 114 },  // 'r'
    { x: 7, y: 87 },   // 'W'
    { x: 2, y: 108 },  // 'l'
    { x: 8, y: 111 },  // 'o'
    { x: 1, y: 101 },  // 'e'
    { x: 10, y: 108 }, // 'l'
    { x: 4, y: 111 },  // 'o'
    { x: 6, y: 32 },   // ' '
  ];

  // Calculate the distance of each point from the origin to verify
  // they form a valid scatter plot, then sort by x to read the message
  const sorted = points
    .map((p) => ({
      ...p,
      distance: Math.sqrt(p.x * p.x + p.y * p.y),
    }))
    .sort((a, b) => a.x - b.x);

  // Read y-coordinates as character codes along the x-axis path
  return sorted.map((p) => String.fromCharCode(p.y)).join("");
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
