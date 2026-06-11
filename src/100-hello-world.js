/**
 *  Hello World #100
 *  By @georgemandis
 *
 *  AST-like tree evaluation — Build and evaluate an expression
 *  tree that produces the string
 */

module.exports = () => {
  // Node types: "lit" for literal, "concat" for concatenation,
  // "code" for charCode-to-char conversion
  function evaluate(node) {
    switch (node.type) {
      case "lit":
        return node.value;
      case "code":
        return String.fromCharCode(node.value);
      case "concat":
        return node.children.map(evaluate).join("");
      default:
        return "";
    }
  }

  const ast = {
    type: "concat",
    children: [
      {
        type: "concat",
        children: [
          { type: "code", value: 72 },   // H
          { type: "lit", value: "ello" },
        ]
      },
      {
        type: "concat",
        children: [
          { type: "code", value: 44 },   // ,
          { type: "code", value: 32 },   // (space)
        ]
      },
      {
        type: "concat",
        children: [
          { type: "code", value: 87 },   // W
          {
            type: "concat",
            children: [
              { type: "lit", value: "o" },
              { type: "code", value: 114 }, // r
              { type: "lit", value: "l" },
              { type: "code", value: 100 }, // d
            ]
          }
        ]
      }
    ]
  };

  return evaluate(ast);
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
