/**
 *  Hello World #57
 *  By @georgemandis
 *
 *  Each character's ASCII code is expressed as a sum of Fibonacci numbers
 *  (Zeckendorf's representation), then reconstructed
 */

module.exports = () => {
  // Generate Fibonacci sequence
  const fib = (n) => {
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) [a, b] = [b, a + b];
    return a;
  };

  // Each array is the set of Fibonacci indices whose values sum to the char code
  // H=72  = F(10)+F(7)+F(4)+F(2) = 55+13+3+1
  // e=101 = F(11)+F(6)+F(4)+F(2) = 89+8+3+1
  // l=108 = F(11)+F(7)+F(5)+F(2) = 89+13+5+1
  // o=111 = F(11)+F(8)+F(2)      = 89+21+1
  // ,=44  = F(9)+F(6)+F(3)       = 34+8+2
  // ' '=32= F(8)+F(6)+F(4)       = 21+8+3
  // W=87  = F(10)+F(8)+F(6)+F(4) = 55+21+8+3
  // r=114 = F(11)+F(8)+F(4)+F(2) = 89+21+3+1
  // d=100 = F(11)+F(6)+F(4)      = 89+8+3

  const zeckendorf = [
    [10, 7, 4, 2],      // H = 72
    [11, 6, 4, 2],      // e = 101
    [11, 7, 5, 2],      // l = 108
    [11, 7, 5, 2],      // l = 108
    [11, 8, 2],          // o = 111
    [9, 6, 3],           // , = 44
    [8, 6, 4],           // ' ' = 32
    [10, 8, 6, 4],       // W = 87
    [11, 8, 2],          // o = 111
    [11, 8, 4, 2],       // r = 114
    [11, 7, 5, 2],       // l = 108
    [11, 6, 4],          // d = 100
  ];

  return zeckendorf
    .map((indices) => String.fromCharCode(indices.reduce((sum, i) => sum + fib(i), 0)))
    .join("");
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
