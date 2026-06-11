/**
 *  Hello World #51
 *  By @georgemandis
 *
 *  Decodes a Morse code string into "Hello, World"
 */

module.exports = () => {
  const morseToChar = {
    ".-": "a", "-...": "b", "-.-.": "c", "-..": "d", ".": "e",
    "..-.": "f", "--.": "g", "....": "h", "..": "i", ".---": "j",
    "-.-": "k", ".-..": "l", "--": "m", "-.": "n", "---": "o",
    ".--.": "p", "--.-": "q", ".-.": "r", "...": "s", "-": "t",
    "..-": "u", "...-": "v", ".--": "w", "-..-": "x", "-.--": "y",
    "--..": "z", "--..--": ","
  };

  // Words separated by " / ", letters separated by " "
  const morse = ".... . .-.. .-.. --- --..-- / .-- --- .-. .-.. -..";

  const capitalize = [0, 6]; // positions of H and W
  let pos = 0;

  return morse.split(" / ").map((word) =>
    word.split(" ").map((code) => {
      let ch = morseToChar[code] || code;
      if (capitalize.includes(pos)) ch = ch.toUpperCase();
      pos++;
      return ch;
    }).join("")
  ).join(" ");
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
