/**
 *  Hello World #71
 *  By @georgemandis
 *
 *  A mini Forth-like stack-based language interpreter that builds "Hello, World"
 */

module.exports = () => {
  // A tiny Forth-like interpreter with a data stack
  // Instructions:
  //   PUSH <n>  - push number onto stack
  //   DUP       - duplicate top of stack
  //   ADD       - pop two, push sum
  //   SUB       - pop two, push difference (second - first)
  //   MUL       - pop two, push product
  //   EMIT      - pop top, convert to char, append to output
  //   SWAP      - swap top two elements

  const program = [
    // H = 72
    'PUSH 9', 'PUSH 8', 'MUL', 'EMIT',
    // e = 101
    'PUSH 10', 'PUSH 10', 'MUL', 'PUSH 1', 'ADD', 'EMIT',
    // l = 108
    'PUSH 12', 'PUSH 9', 'MUL', 'EMIT',
    // l = 108
    'PUSH 108', 'EMIT',
    // o = 111
    'PUSH 108', 'PUSH 3', 'ADD', 'EMIT',
    // , = 44
    'PUSH 11', 'PUSH 4', 'MUL', 'EMIT',
    // ' ' = 32
    'PUSH 4', 'PUSH 8', 'MUL', 'EMIT',
    // W = 87
    'PUSH 9', 'PUSH 10', 'MUL', 'PUSH 3', 'SUB', 'EMIT',
    // o = 111
    'PUSH 111', 'EMIT',
    // r = 114
    'PUSH 111', 'PUSH 3', 'ADD', 'EMIT',
    // l = 108
    'PUSH 114', 'PUSH 6', 'SUB', 'EMIT',
    // d = 100
    'PUSH 10', 'DUP', 'MUL', 'EMIT',
  ];

  const stack = [];
  let output = '';

  for (const instr of program) {
    const parts = instr.split(' ');
    const op = parts[0];

    switch (op) {
      case 'PUSH':
        stack.push(parseInt(parts[1], 10));
        break;
      case 'DUP':
        stack.push(stack[stack.length - 1]);
        break;
      case 'ADD': {
        const a = stack.pop();
        const b = stack.pop();
        stack.push(b + a);
        break;
      }
      case 'SUB': {
        const a = stack.pop();
        const b = stack.pop();
        stack.push(b - a);
        break;
      }
      case 'MUL': {
        const a = stack.pop();
        const b = stack.pop();
        stack.push(b * a);
        break;
      }
      case 'SWAP': {
        const a = stack.pop();
        const b = stack.pop();
        stack.push(a);
        stack.push(b);
        break;
      }
      case 'EMIT':
        output += String.fromCharCode(stack.pop());
        break;
    }
  }

  return output;
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
