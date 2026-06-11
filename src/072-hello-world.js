/**
 *  Hello World #72
 *  By @georgemandis
 *
 *  A single regex match with 12 capture groups extracts "Hello, World"
 */

module.exports = () => {
  // A specially crafted string containing the letters of "Hello, World"
  // hidden among noise characters. A single regex with 12 capture groups
  // plucks out exactly the right characters.
  const haystack = "xH9xe3xl7xl8xo2x,1x 4xW5xo6xr0xl7xd9";

  // Each capture group grabs one character from a predictable position
  const regex = /x(.)9x(.)3x(.)7x(.)8x(.)2x(.)1x(.)4x(.)5x(.)6x(.)0x(.)7x(.)9/;

  const match = haystack.match(regex);

  // Concatenate all 12 capture groups
  return match.slice(1, 13).join('');
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
