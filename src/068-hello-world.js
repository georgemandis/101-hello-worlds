/**
 *  Hello World #68
 *  By @georgemandis
 *
 *  Finds the right string by comparing SHA-256 hash digests
 */

module.exports = () => {
  const crypto = require('crypto');

  function sha256(str) {
    return crypto.createHash('sha256').update(str).digest('hex');
  }

  // Pre-computed SHA-256 hash of "Hello, World"
  const targetHash = sha256("Hello, World");

  // A set of candidate strings — only one matches the target hash
  const candidates = [
    "Hello, World!",
    "hello, world",
    "Hello World",
    "Hello, World",
    "HELLO, WORLD",
    "Hello,World",
    "Hello, world",
    "Hello , World",
    "Hello, World.",
    "Hi, World",
  ];

  // Find the candidate whose hash matches
  for (const candidate of candidates) {
    if (sha256(candidate) === targetHash) {
      return candidate;
    }
  }
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
