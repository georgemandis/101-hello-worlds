/**
 *  Hello World #61
 *  By @georgemandis
 *
 *  Maps DNA base triplets (codons) to characters, mimicking how
 *  biological ribosomes translate mRNA codons into amino acids
 */

module.exports = () => {
  // Custom codon table: each 3-letter DNA sequence maps to a character
  // In real biology, 64 codons map to 20 amino acids + stop signals.
  // Here we map codons to ASCII characters.
  const codonTable = {
    "ATG": "H",   // Start codon in biology, starts our message too
    "GCA": "e",
    "TAC": "l",
    "CCG": "o",
    "TGA": ",",   // Stop codon in biology, comma in our message
    "AAA": " ",
    "GGT": "W",
    "AGC": "r",
    "CTT": "d",
  };

  // The "DNA strand" encoding "Hello, World"
  const dna = "ATG GCA TAC TAC CCG TGA AAA GGT CCG AGC TAC CTT";

  return dna
    .split(" ")
    .map((codon) => codonTable[codon])
    .join("");
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
