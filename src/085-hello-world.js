/**
 *  Hello World #85
 *  By @georgemandis
 *
 *  Resistor color band codes decode to character codes of "Hello, World".
 *  Each resistor's three-band value (digit1 * 10 + digit2) * multiplier
 *  plus a tolerance offset yields the ASCII value.
 */

module.exports = () => {
  // Standard resistor color codes (digit value):
  const colorValues = {
    black: 0, brown: 1, red: 2, orange: 3, yellow: 4,
    green: 5, blue: 6, violet: 7, grey: 8, white: 9,
  };

  // Each resistor is specified by two color bands giving a two-digit number,
  // plus a multiplier band. charCode = (band1 * 10 + band2) * multiplier
  //
  // H=72:  72 = 72 * 1 → violet(7), red(2), multiplier=brown(x1)
  // e=101: 101 — not cleanly factorable. Let's use a simpler scheme.

  // Simpler: just use two color bands as a two-digit number, plus a third
  // band as a direct addend.
  // charCode = band1 * 10 + band2 + band3
  //
  // H=72:   7, 2, 0 → violet, red, black
  // e=101:  9, 9, 2 → wait, 99+2=101? No. Let's do band1*11 + band2 + band3?
  //
  // Even simpler: three bands each 0-9.
  // charCode = band1 * band2 + band3
  // H=72:   8*9+0 = 72 → grey, white, black ✓
  // e=101:  No clean factorization under 9*9=81.
  //
  // Let's go with: four color bands.
  // charCode = band1 * 100 + band2 * 10 + band3 (directly reading three digits)
  // But max is 999, and we want range 32-114.
  // Better: just read it as digits. E.g., "072" → black, violet, red → 072 = 72.

  // Final approach: three bands read as a three-digit number.
  // charCode = band1 * 100 + band2 * 10 + band3

  // H=72:   0,7,2 → black, violet, red
  // e=101:  1,0,1 → brown, black, brown
  // l=108:  1,0,8 → brown, black, grey
  // o=111:  1,1,1 → brown, brown, brown
  // ,=44:   0,4,4 → black, yellow, yellow
  // ' '=32: 0,3,2 → black, orange, red
  // W=87:   0,8,7 → black, grey, violet
  // r=114:  1,1,4 → brown, brown, yellow
  // d=100:  1,0,0 → brown, black, black

  const resistors = [
    ["black", "violet", "red"],      // 0*100 + 7*10 + 2 = 72  (H)
    ["brown", "black", "brown"],     // 1*100 + 0*10 + 1 = 101 (e)
    ["brown", "black", "grey"],      // 1*100 + 0*10 + 8 = 108 (l)
    ["brown", "black", "grey"],      // 1*100 + 0*10 + 8 = 108 (l)
    ["brown", "brown", "brown"],     // 1*100 + 1*10 + 1 = 111 (o)
    ["black", "yellow", "yellow"],   // 0*100 + 4*10 + 4 = 44  (,)
    ["black", "orange", "red"],      // 0*100 + 3*10 + 2 = 32  ( )
    ["black", "grey", "violet"],     // 0*100 + 8*10 + 7 = 87  (W)
    ["brown", "brown", "brown"],     // 1*100 + 1*10 + 1 = 111 (o)
    ["brown", "brown", "yellow"],    // 1*100 + 1*10 + 4 = 114 (r)
    ["brown", "black", "grey"],      // 1*100 + 0*10 + 8 = 108 (l)
    ["brown", "black", "black"],     // 1*100 + 0*10 + 0 = 100 (d)
  ];

  return resistors
    .map((bands) => {
      const value =
        colorValues[bands[0]] * 100 +
        colorValues[bands[1]] * 10 +
        colorValues[bands[2]];
      return String.fromCharCode(value);
    })
    .join("");
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
