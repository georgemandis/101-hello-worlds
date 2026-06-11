/**
 *  Hello World #62
 *  By @georgemandis
 *
 *  Decodes flag semaphore positions to spell out "Hello, World".
 *  Each letter is encoded as a pair of flag positions (clock positions 1-8),
 *  matching the real maritime semaphore signaling system.
 */

module.exports = () => {
  // Flag semaphore uses two flags held in specific positions.
  // Positions are numbered like a clock: 1=down-left, 2=left, 3=up-left,
  // 4=up, 5=up-right, 6=right, 7=down-right, 8=down (rest position)
  //
  // Standard semaphore alphabet (positions as sorted pairs):
  // A=[1,8], B=[2,8], C=[3,8], D=[4,8], E=[5,8], F=[6,8], G=[7,8]
  // H=[1,2], I=[1,3], J=[4,6], K=[1,4], L=[1,5], M=[1,6], N=[1,7]
  // O=[2,3], P=[2,4], Q=[2,5], R=[2,6], S=[2,7], T=[3,4], U=[3,5]
  // V=[4,1] (same as K, but V uses...)
  // Let's use a simplified unique mapping:

  const semaphoreAlphabet = {
    "1,8": "A", "2,8": "B", "3,8": "C", "4,8": "D", "5,8": "E",
    "6,8": "F", "7,8": "G", "1,2": "H", "1,3": "I", "4,6": "J",
    "1,4": "K", "1,5": "L", "1,6": "M", "1,7": "N", "2,3": "O",
    "2,4": "P", "2,5": "Q", "2,6": "R", "2,7": "S", "3,4": "T",
    "3,5": "U", "3,6": "V", "3,7": "W", "4,5": "X", "4,7": "Y",
    "5,6": "Z",
    "8,8": " ",   // rest position = space
    "6,7": ",",   // punctuation signal
  };

  // Encoded message: each pair represents flag positions for a letter
  // H  e     l     l     o     ,     (sp)  W     o     r     l     d
  const signals = [
    [1,2], [5,8], [1,5], [1,5], [2,3], [6,7], [8,8], [3,7], [2,3], [2,6], [1,5], [4,8]
  ];

  const caseMap = { 0: "upper", 7: "upper" }; // H and W are uppercase

  return signals.map((pair, i) => {
    const key = pair.sort((a, b) => a - b).join(",");
    let ch = semaphoreAlphabet[key];
    if (caseMap[i]) {
      ch = ch.toUpperCase();
    } else if (ch.match(/[A-Z]/)) {
      ch = ch.toLowerCase();
    }
    return ch;
  }).join("");
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
