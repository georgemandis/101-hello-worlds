/**
 *  Hello World #67
 *  By @georgemandis
 *
 *  Decodes a Huffman-encoded bitstring to produce "Hello, World"
 */

module.exports = () => {
  // Build a Huffman tree for the characters in "Hello, World"
  // Character frequencies: H=1, e=1, l=3, o=2, ,=1, ' '=1, W=1, r=1, d=1
  // Manually assigned Huffman codes (valid prefix-free code):
  const codes = {
    'l':   '00',      // most frequent (3)
    'o':   '01',      // second most frequent (2)
    'H':   '1000',
    'e':   '1001',
    ',':   '1010',
    ' ':   '1011',
    'W':   '1100',
    'r':   '1101',
    'd':   '1110',
  };

  // Build the Huffman tree from the codes
  function buildTree(codes) {
    const root = {};
    for (const [ch, code] of Object.entries(codes)) {
      let node = root;
      for (let i = 0; i < code.length; i++) {
        const bit = code[i];
        if (!node[bit]) node[bit] = {};
        if (i === code.length - 1) {
          node[bit].char = ch;
        } else {
          node = node[bit];
        }
      }
    }
    return root;
  }

  // Encode "Hello, World" using the Huffman codes
  const message = "Hello, World";
  const bitstring = message.split('').map(c => codes[c]).join('');

  // Now decode the bitstring using the Huffman tree
  const tree = buildTree(codes);
  let result = '';
  let node = tree;

  for (const bit of bitstring) {
    node = node[bit];
    if (node.char !== undefined) {
      result += node.char;
      node = tree;
    }
  }

  return result;
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
