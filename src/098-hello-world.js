/**
 *  Hello World #98
 *  By @georgemandis
 *
 *  Recursive descent parser — Parse a simple grammar that
 *  produces "Hello, World"
 *
 *  Grammar:
 *    greeting  -> word separator word
 *    separator -> COMMA SPACE
 *    word      -> CHAR+
 */

module.exports = () => {
  const tokens = [
    { type: "CHAR", value: "H" },
    { type: "CHAR", value: "e" },
    { type: "CHAR", value: "l" },
    { type: "CHAR", value: "l" },
    { type: "CHAR", value: "o" },
    { type: "COMMA", value: "," },
    { type: "SPACE", value: " " },
    { type: "CHAR", value: "W" },
    { type: "CHAR", value: "o" },
    { type: "CHAR", value: "r" },
    { type: "CHAR", value: "l" },
    { type: "CHAR", value: "d" },
  ];

  let pos = 0;

  function peek() {
    return pos < tokens.length ? tokens[pos] : null;
  }

  function consume(type) {
    const token = peek();
    if (token && token.type === type) {
      pos++;
      return token.value;
    }
    return null;
  }

  function parseWord() {
    let word = "";
    while (peek() && peek().type === "CHAR") {
      word += consume("CHAR");
    }
    return word;
  }

  function parseSeparator() {
    const comma = consume("COMMA") || "";
    const space = consume("SPACE") || "";
    return comma + space;
  }

  function parseGreeting() {
    const first = parseWord();
    const sep = parseSeparator();
    const second = parseWord();
    return first + sep + second;
  }

  return parseGreeting();
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
