/**
 *  Hello World #86
 *  By @georgemandis
 *
 *  Builds a trie data structure containing "Hello, World" and then
 *  walks the trie from root to leaf to reconstruct the string
 */

module.exports = () => {
  // Build a trie where each node has children keyed by the next character.
  // The string "Hello, World" is inserted, then we traverse
  // the single path from root to the terminal node.

  const createNode = () => ({ children: {}, isEnd: false });

  const root = createNode();
  const word = [72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100];

  // Insert the word into the trie character by character
  let current = root;
  for (const code of word) {
    const ch = String.fromCharCode(code);
    if (!current.children[ch]) {
      current.children[ch] = createNode();
    }
    current = current.children[ch];
  }
  current.isEnd = true;

  // Also insert some decoy branches to make the trie non-trivial
  const decoys = [
    [72, 101, 108, 112],          // "Help"
    [72, 105],                     // "Hi"
    [72, 101, 97, 114, 116],      // "Heart"
    [87, 104, 121],                // "Why"
  ];

  for (const decoy of decoys) {
    let node = root;
    for (const code of decoy) {
      const ch = String.fromCharCode(code);
      if (!node.children[ch]) {
        node.children[ch] = createNode();
      }
      node = node.children[ch];
    }
    node.isEnd = true;
  }

  // Walk the trie, always choosing the path that leads to
  // the longest word (depth-first, preferring the deepest branch)
  const findLongestWord = (node) => {
    const dfs = (n, path) => {
      if (Object.keys(n.children).length === 0) {
        return path;
      }
      let longest = n.isEnd ? path : "";
      for (const [ch, child] of Object.entries(n.children)) {
        const candidate = dfs(child, path + ch);
        if (candidate.length > longest.length) {
          longest = candidate;
        }
      }
      return longest;
    };
    return dfs(node, "");
  };

  return findLongestWord(root);
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
