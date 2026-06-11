/**
 *  Hello World #60
 *  By @georgemandis
 *
 *  Quine-like: the function reads its own source code and extracts
 *  specific characters at predetermined positions to build "Hello, World"
 */

module.exports = () => {
  const src = module.exports.toString();
  // The source of this function contains all needed characters.
  // We pick characters at specific indices from the source string.
  // src starts with "() => {\n  const src = module..."

  // Pre-computed character positions in the function's own source:
  // We need: H, e, l, l, o, ',', ' ', W, o, r, l, d
  // Let's find them in the source string.

  const indices = [];
  const target = "Hello, World";

  // Find the index of each target character in src, avoiding reuse
  const used = new Set();
  for (const ch of target) {
    for (let i = 0; i < src.length; i++) {
      if (src[i] === ch && !used.has(i)) {
        indices.push(i);
        used.add(i);
        break;
      }
    }
  }

  return indices.map((i) => src[i]).join("");
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
