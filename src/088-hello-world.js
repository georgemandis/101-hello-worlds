/**
 *  Hello World #88
 *  By @georgemandis
 *
 *  Simulates the Towers of Hanoi puzzle and counts disc movements
 *  for different numbers of discs — the move counts encode character
 *  indices into an alphabet
 */

module.exports = () => {
  // The Towers of Hanoi with n discs requires exactly 2^n - 1 moves.
  // We use this to encode characters.
  //
  // We define an alphabet and for each character in "Hello, World",
  // store the number of discs n such that (2^n - 1) mod alphabet.length
  // gives the character's index in the alphabet.
  //
  // But that's limited. Instead, we simulate the actual moves and use
  // the sequence of disc sizes moved at specific steps.

  // Towers of Hanoi recursive solver that records each move
  const hanoi = (n, from, to, aux, moves) => {
    if (n === 0) return;
    hanoi(n - 1, from, aux, to, moves);
    moves.push({ disc: n, from, to });
    hanoi(n - 1, aux, to, from, moves);
  };

  // For different disc counts, the total moves = 2^n - 1.
  // We use this formula: charCode = 2^n - 1 + offset
  // where n and offset are precomputed for each character.
  //
  // H=72:   2^6-1=63,  offset=9  → n=6, offset=9
  // e=101:  2^6-1=63,  offset=38 → n=6, offset=38
  // l=108:  2^7-1=127, offset=-19 → negative, try 2^6-1=63, offset=45
  //         Actually let's use: charCode = totalMoves + offset
  //         where totalMoves for n discs = 2^n - 1.
  // l=108:  2^7-1=127, nah. 2^6-1=63, offset=45. That works.
  // o=111:  2^6-1=63, offset=48
  // ,=44:   2^5-1=31, offset=13
  // ' '=32: 2^5-1=31, offset=1
  // W=87:   2^6-1=63, offset=24
  // r=114:  2^7-1=127, offset=-13. Try 2^6-1=63, offset=51.
  // d=100:  2^6-1=63, offset=37

  // Better approach: we solve Hanoi for 7 discs (127 moves total) and
  // record which disc is moved at each step. Then we pick specific
  // step numbers where the disc number encodes part of our character code.

  // Actually, the cleanest approach: simulate Hanoi and use the disc
  // moved at each step. In the classic solution, at step k (1-indexed),
  // the disc moved is: the position of the lowest set bit in k, plus 1.
  // disc(k) = number of trailing zeros in k's binary representation + 1

  // So disc(k) ranges from 1 to n. We need to combine step info.
  // Let's use pairs: (step_number, multiplier) where
  // charCode = disc_at_step * multiplier + remainder

  // Simplest creative approach: run Hanoi for 12 discs.
  // At each of 12 chosen steps, read the disc number.
  // Map disc numbers through a transformation to get char codes.

  // For 12 discs, we have 4095 moves. disc(k) = trailing_zeros(k) + 1.
  // charCode = step_number mod 128  (picking steps whose mod 128 = charCode)

  // Most elegant: charCode = 2^(disc_at_step - 1) + step_offset
  // where step_offset is a stored value.

  // Let me just go with the direct approach: the number of moves for
  // n discs (2^n - 1) directly gives the char code.
  // We solve n from charCode = 2^a - 1 + b where a is chosen, b is offset.

  // Final approach: run the actual simulation for varying disc counts,
  // extract the move count, and combine.

  const totalMoves = (n) => {
    const moves = [];
    hanoi(n, "A", "C", "B", moves);
    return moves.length; // = 2^n - 1
  };

  // Encode: [discCount, offset] where charCode = totalMoves(discCount) + offset
  const encoded = [
    { discs: 6, offset: 9 },   // H: 63 + 9 = 72
    { discs: 6, offset: 38 },  // e: 63 + 38 = 101
    { discs: 6, offset: 45 },  // l: 63 + 45 = 108
    { discs: 6, offset: 45 },  // l: 63 + 45 = 108
    { discs: 6, offset: 48 },  // o: 63 + 48 = 111
    { discs: 5, offset: 13 },  // ,: 31 + 13 = 44
    { discs: 5, offset: 1 },   // ' ': 31 + 1 = 32
    { discs: 6, offset: 24 },  // W: 63 + 24 = 87
    { discs: 6, offset: 48 },  // o: 63 + 48 = 111
    { discs: 6, offset: 51 },  // r: 63 + 51 = 114
    { discs: 6, offset: 45 },  // l: 63 + 45 = 108
    { discs: 6, offset: 37 },  // d: 63 + 37 = 100
  ];

  return encoded
    .map(({ discs, offset }) => {
      const moves = totalMoves(discs);
      return String.fromCharCode(moves + offset);
    })
    .join("");
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
