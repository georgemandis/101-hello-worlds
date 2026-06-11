/**
 *  Hello World #54
 *  By @georgemandis
 *
 *  Maps musical note frequencies (Hz) to characters via a lookup table.
 *  Each frequency corresponds to a real musical note.
 */

module.exports = () => {
  // A curated mapping of note frequencies to characters
  // Frequencies are approximate equal-temperament values
  const noteMap = {
    261.63: "H",  // C4
    293.66: "e",  // D4
    329.63: "l",  // E4
    349.23: "o",  // F4
    392.00: ",",  // G4
    440.00: " ",  // A4
    493.88: "W",  // B4
    523.25: "r",  // C5
    587.33: "d",  // D5
  };

  // The "melody" that spells Hello, World
  const melody = [
    261.63,  // H
    293.66,  // e
    329.63,  // l
    329.63,  // l
    349.23,  // o
    392.00,  // ,
    440.00,  // (space)
    493.88,  // W
    349.23,  // o
    523.25,  // r
    329.63,  // l
    587.33,  // d
  ];

  return melody.map((freq) => noteMap[freq]).join("");
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
