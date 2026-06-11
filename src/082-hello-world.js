/**
 *  Hello World #82
 *  By @georgemandis
 *
 *  Algebraic chess notation positions on the board map to character
 *  codes using file (a-h = 0-7) and rank (1-8) arithmetic
 */

module.exports = () => {
  // Chess board: files a-h (0-7), ranks 1-8
  // Each position encodes a character code: file * 16 + rank_offset
  // where rank_offset includes the rank plus a piece-value modifier
  //
  // Piece values: Pawn=1, Knight=2, Bishop=3, Rook=4, Queen=5, King=6
  // charCode = file * 15 + rank + piece_value
  //
  // H=72, e=101, l=108, l=108, o=111, ,=44, ' '=32, W=87, o=111, r=114, l=108, d=100

  const files = { a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7 };
  const pieces = { P: 1, N: 2, B: 3, R: 4, Q: 5, K: 6 };

  // charCode = file * 14 + rank + pieceValue
  // H=72:  72 = 4*14 + 8 + 8? No, rank max is 8, piece max is 6 = 14.
  // Let's use: charCode = file * 16 + (rank - 1) + pieceValue
  // file * 16 ranges 0..112, rank-1 ranges 0..7, piece 1..6
  // So range is 1..125. Enough for our chars (32-114).

  // H=72:   72 = 4*16 + r + p = 64 + r + p, r+p=8. rank=3(→2), piece=K(6) → 2+6=8. e3K
  // e=101: 101 = 6*16 + r + p = 96 + r + p, r+p=5. rank=2(→1), piece=R(4) → 1+4=5. g2R
  // l=108: 108 = 6*16 + r + p = 96 + r + p, r+p=12. rank=7(→6), piece=K(6)→6+6=12. g7K
  // o=111: 111 = 6*16 + r + p = 96 + r + p, r+p=15. Too big (max 13).
  //        111 = 7*16 + r + p = 112 + r + p, r+p=-1. Negative, no good.

  // Let me try: charCode = file * 15 + rank + pieceValue
  // Range: 0..105 + 1..8 + 1..6 = 2..119. Good.
  // H=72:   72 = 4*15 + r + p = 60 + r + p, r+p=12. rank=8,piece=R(4)→12. Nope 8+4=12. e8R ✓
  // e=101: 101 = 6*15 + r + p = 90 + r + p, r+p=11. rank=5,piece=K(6)→11. g5K ✓
  // l=108: 108 = 7*15 + r + p = 105 + r + p, r+p=3. rank=1,piece=N(2)→3. h1N ✓
  // o=111: 111 = 7*15 + r + p = 105 + r + p, r+p=6. rank=2,piece=R(4)→6. h2R ✓
  // ,=44:  44 = 2*15 + r + p = 30 + r + p, r+p=14. rank=8,piece=K(6)→14. c8K ✓
  // ' '=32: 32 = 2*15 + r + p = 30 + r + p, r+p=2. rank=1,piece=P(1)→2. c1P ✓
  // W=87:  87 = 5*15 + r + p = 75 + r + p, r+p=12. rank=8,piece=R(4)→12. f8R ✓
  // r=114: 114 = 7*15 + r + p = 105 + r + p, r+p=9. rank=3,piece=K(6)→9. h3K ✓
  // d=100: 100 = 6*15 + r + p = 90 + r + p, r+p=10. rank=4,piece=K(6)→10. g4K ✓

  const moves = [
    { file: "e", rank: 8, piece: "R" }, // H=72
    { file: "g", rank: 5, piece: "K" }, // e=101
    { file: "h", rank: 1, piece: "N" }, // l=108
    { file: "h", rank: 1, piece: "N" }, // l=108
    { file: "h", rank: 2, piece: "R" }, // o=111
    { file: "c", rank: 8, piece: "K" }, // ,=44
    { file: "c", rank: 1, piece: "P" }, // ' '=32
    { file: "f", rank: 8, piece: "R" }, // W=87
    { file: "h", rank: 2, piece: "R" }, // o=111
    { file: "h", rank: 3, piece: "K" }, // r=114
    { file: "h", rank: 1, piece: "N" }, // l=108
    { file: "g", rank: 4, piece: "K" }, // d=100
  ];

  return moves
    .map((move) => {
      const charCode = files[move.file] * 15 + move.rank + pieces[move.piece];
      return String.fromCharCode(charCode);
    })
    .join("");
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
