/**
 *  Hello World #66
 *  By @georgemandis
 *
 *  Multiplies matrices to produce character codes for "Hello, World"
 */

module.exports = () => {
  // Matrix multiplication: C = A * B
  function matMul(A, B) {
    const rows = A.length;
    const cols = B[0].length;
    const inner = B.length;
    const C = Array.from({ length: rows }, () => new Array(cols).fill(0));
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        for (let k = 0; k < inner; k++) {
          C[i][j] += A[i][k] * B[k][j];
        }
      }
    }
    return C;
  }

  // "Hello, World" char codes: [72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100]
  // We'll use a 3x4 result matrix (reshaped from the 12 characters)
  // A is 3x3, B is 3x4, so C = A*B is 3x4

  // Choose A as a simple invertible matrix
  const A = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ];

  // B directly encodes the char codes (since A is identity, C = B)
  // But let's make it more interesting with a non-trivial A
  const A2 = [
    [1, 1, 0],
    [0, 1, 1],
    [1, 0, 1],
  ];

  // We need A2 * B2 to produce our target matrix T
  // T = [[72, 101, 108, 108], [111, 44, 32, 87], [111, 114, 108, 100]]
  // So B2 = A2_inv * T
  // A2_inv for our matrix:
  // det(A2) = 1(1-0) - 1(0-1) + 0 = 1+1 = 2
  // A2_inv = (1/2) * adjugate
  // adjugate = [[1,-1,1],[-1,1,-1],[1,-1,1]]... let me just compute B2 directly

  // Actually, let's pick values that work out to integers cleanly
  // Use A = [[2,1,0],[0,1,1],[1,0,2]]
  // det = 2(2-0) - 1(0-1) + 0 = 4+1 = 5
  // We need B such that A*B = T
  // Instead, let's define B and compute A*B = charCodes

  // Simpler approach: A is 2x2 and we process pairs of char codes
  const target = [72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100];

  // Use a 2x2 encoding matrix
  const E = [
    [3, 1],
    [2, 1],
  ];
  // E_inv = [[1, -1], [-2, 3]] (det = 3-2 = 1)
  const E_inv = [
    [1, -1],
    [-2, 3],
  ];

  // Encode: for each pair of values [a,b], compute E * [[a],[b]]
  const encoded = [];
  for (let i = 0; i < target.length; i += 2) {
    const pair = [[target[i]], [target[i + 1]]];
    const result = matMul(E, pair);
    encoded.push(result[0][0], result[1][0]);
  }

  // Now decode: multiply E_inv by each encoded pair to recover char codes
  const decoded = [];
  for (let i = 0; i < encoded.length; i += 2) {
    const pair = [[encoded[i]], [encoded[i + 1]]];
    const result = matMul(E_inv, pair);
    decoded.push(result[0][0], result[1][0]);
  }

  return decoded.map(c => String.fromCharCode(c)).join('');
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
