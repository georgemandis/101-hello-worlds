/**
 *  Hello World #53
 *  By @georgemandis
 *
 *  Uses periodic table element atomic numbers as character codes
 *  to spell out "Hello, World"
 */

module.exports = () => {
  // Each element's atomic number maps to an ASCII code
  // Hf(72)=H, Md(101)=e, Hs(108)=l, Hs(108)=l, Rg(111)=o,
  // Ru(44)=,, S(32)=' ', Fr(87)=W, Rg(111)=o, Fl(114)=r, Hs(108)=l, Fm(100)=d
  const elements = [
    { symbol: "Hf", name: "Hafnium",      Z: 72 },
    { symbol: "Md", name: "Mendelevium",   Z: 101 },
    { symbol: "Hs", name: "Hassium",       Z: 108 },
    { symbol: "Hs", name: "Hassium",       Z: 108 },
    { symbol: "Rg", name: "Roentgenium",   Z: 111 },
    { symbol: "Ru", name: "Ruthenium",     Z: 44 },
    { symbol: "Ge", name: "Germanium",     Z: 32 },
    { symbol: "Fr", name: "Francium",      Z: 87 },
    { symbol: "Rg", name: "Roentgenium",   Z: 111 },
    { symbol: "Fl", name: "Flerovium",     Z: 114 },
    { symbol: "Hs", name: "Hassium",       Z: 108 },
    { symbol: "Fm", name: "Fermium",       Z: 100 }
  ];

  return elements.map((el) => String.fromCharCode(el.Z)).join("");
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
