/**
 *  Hello World #58
 *  By @georgemandis
 *
 *  Decrypts "Hello, World" from XOR-encrypted bytes using a repeating key
 */

module.exports = () => {
  // "Hello, World" XOR'd with repeating key [0xAB, 0xCD, 0xEF]
  const key = [0xAB, 0xCD, 0xEF];
  const encrypted = [227, 168, 131, 199, 162, 195, 139, 154, 128, 217, 161, 139];

  return encrypted
    .map((byte, i) => String.fromCharCode(byte ^ key[i % key.length]))
    .join("");
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
