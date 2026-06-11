/**
 *  Hello World #84
 *  By @georgemandis
 *
 *  Maps zodiac sign indices and element/modality offsets to produce
 *  the character codes of "Hello, World"
 */

module.exports = () => {
  const zodiac = [
    "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
    "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces",
  ];

  // Elements: Fire=0, Earth=1, Air=2, Water=3
  const elements = { Fire: 0, Earth: 1, Air: 2, Water: 3 };

  // Modalities: Cardinal=0, Fixed=1, Mutable=2
  const modalities = { Cardinal: 0, Fixed: 1, Mutable: 2 };

  // Each zodiac sign has an element and modality:
  const signProperties = {
    Aries:       { element: "Fire",  modality: "Cardinal" },
    Taurus:      { element: "Earth", modality: "Fixed" },
    Gemini:      { element: "Air",   modality: "Mutable" },
    Cancer:      { element: "Water", modality: "Cardinal" },
    Leo:         { element: "Fire",  modality: "Fixed" },
    Virgo:       { element: "Earth", modality: "Mutable" },
    Libra:       { element: "Air",   modality: "Cardinal" },
    Scorpio:     { element: "Water", modality: "Fixed" },
    Sagittarius: { element: "Fire",  modality: "Mutable" },
    Capricorn:   { element: "Earth", modality: "Cardinal" },
    Aquarius:    { element: "Air",   modality: "Fixed" },
    Pisces:      { element: "Water", modality: "Mutable" },
  };

  // Encoding formula: charCode = signIndex * 10 + element * 3 + modality + offset
  // We store [signName, offset] pairs.
  // signIndex (0-based), element (0-3), modality (0-2)
  //
  // For each sign: base = index*10 + element*3 + modality
  // Aries(0):       0 + 0 + 0 = 0
  // Taurus(1):     10 + 3 + 1 = 14
  // Gemini(2):     20 + 6 + 2 = 28
  // Cancer(3):     30 + 9 + 0 = 39
  // Leo(4):        40 + 0 + 1 = 41
  // Virgo(5):      50 + 3 + 2 = 55
  // Libra(6):      60 + 6 + 0 = 66
  // Scorpio(7):    70 + 9 + 1 = 80
  // Sagittarius(8):80 + 0 + 2 = 82
  // Capricorn(9):  90 + 3 + 0 = 93
  // Aquarius(10): 100 + 6 + 1 = 107
  // Pisces(11):   110 + 9 + 2 = 121

  // H=72:   Libra(66) + 6 = 72
  // e=101:  Capricorn(93) + 8 = 101
  // l=108:  Aquarius(107) + 1 = 108
  // o=111:  Aquarius(107) + 4 = 111
  // ,=44:   Leo(41) + 3 = 44
  // ' '=32: Gemini(28) + 4 = 32
  // W=87:   Sagittarius(82) + 5 = 87
  // r=114:  Aquarius(107) + 7 = 114
  // d=100:  Capricorn(93) + 7 = 100

  const encoded = [
    { sign: "Libra", offset: 6 },        // H=72
    { sign: "Capricorn", offset: 8 },     // e=101
    { sign: "Aquarius", offset: 1 },      // l=108
    { sign: "Aquarius", offset: 1 },      // l=108
    { sign: "Aquarius", offset: 4 },      // o=111
    { sign: "Leo", offset: 3 },           // ,=44
    { sign: "Gemini", offset: 4 },        // ' '=32
    { sign: "Sagittarius", offset: 5 },   // W=87
    { sign: "Aquarius", offset: 4 },      // o=111
    { sign: "Aquarius", offset: 7 },      // r=114
    { sign: "Aquarius", offset: 1 },      // l=108
    { sign: "Capricorn", offset: 7 },     // d=100
  ];

  return encoded
    .map(({ sign, offset }) => {
      const index = zodiac.indexOf(sign);
      const props = signProperties[sign];
      const base = index * 10 + elements[props.element] * 3 + modalities[props.modality];
      return String.fromCharCode(base + offset);
    })
    .join("");
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
