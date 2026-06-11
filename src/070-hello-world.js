/**
 *  Hello World #70
 *  By @georgemandis
 *
 *  Weighted sums with activation functions produce character codes
 */

module.exports = () => {
  // A simple neural-net-like computation:
  // Each "neuron" takes inputs, multiplies by weights, sums, applies
  // an activation function, and outputs a character code.

  // ReLU activation: max(0, x)
  function relu(x) { return Math.max(0, x); }

  // Round activation: rounds to nearest integer
  function activate(x) { return Math.round(relu(x)); }

  // Each character is produced by a single neuron with 3 inputs
  // neuron output = activate(w1*x1 + w2*x2 + w3*x3 + bias)
  // Target char codes: H=72, e=101, l=108, l=108, o=111, ,=44, ' '=32, W=87, o=111, r=114, l=108, d=100

  const inputs = [1, 2, 3]; // shared input vector

  // Pre-computed weights and biases for each neuron
  // For neuron i: output = activate(w[0]*1 + w[1]*2 + w[2]*3 + bias)
  //                      = activate(w[0] + 2*w[1] + 3*w[2] + bias)
  const neurons = [
    { weights: [10, 5, 8],  bias: 28 },   // 10 + 10 + 24 + 28 = 72  -> H
    { weights: [15, 12, 7], bias: 40 },   // 15 + 24 + 21 + 40 = 100... need 101
    { weights: [20, 10, 9], bias: 41 },   // 20 + 20 + 27 + 41 = 108 -> l
    { weights: [5,  25, 6], bias: 36 },   // 5 + 50 + 18 + 36 = 109... need 108
    { weights: [30, 3, 11], bias: 44 },   // 30 + 6 + 33 + 44 = 113... need 111
    { weights: [2,  8,  3], bias: 21 },   // 2 + 16 + 9 + 21 = 48... need 44
    { weights: [1,  3,  5], bias: 10 },   // 1 + 6 + 15 + 10 = 32  -> ' '
    { weights: [7,  14, 9], bias: 29 },   // 7 + 28 + 27 + 29 = 91... need 87
    { weights: [11, 9, 13], bias: 49 },   // 11 + 18 + 39 + 49 = 117... need 111
    { weights: [18, 7, 12], bias: 44 },   // 18 + 14 + 36 + 44 = 112... need 114
    { weights: [6, 17, 10], bias: 38 },   // 6 + 34 + 30 + 38 = 108 -> l
    { weights: [13, 11, 8], bias: 43 },   // 13 + 22 + 24 + 43 = 102... need 100
  ];

  // Let me recompute the weights properly
  // target = w0 + 2*w1 + 3*w2 + bias
  const targets = [72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100];

  const properNeurons = targets.map(t => {
    // Use weights [7, 3, 5] and compute bias = t - (7 + 6 + 15) = t - 28
    return { weights: [7, 3, 5], bias: t - 28 };
  });

  const result = properNeurons.map(neuron => {
    const sum = neuron.weights[0] * inputs[0] +
                neuron.weights[1] * inputs[1] +
                neuron.weights[2] * inputs[2] +
                neuron.bias;
    return String.fromCharCode(activate(sum));
  });

  return result.join('');
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
