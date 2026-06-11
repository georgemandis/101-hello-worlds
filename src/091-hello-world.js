/**
 *  Hello World #91
 *  By @georgemandis
 *
 *  Intl.Segmenter — Use Intl APIs to segment and reconstruct
 *  text from a scrambled string
 */

module.exports = () => {
  const scrambled = "WrH,edll ool";
  const order = [2, 4, 6, 7, 9, 3, 8, 0, 10, 1, 11, 5];

  const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
  const segments = Array.from(segmenter.segment(scrambled), s => s.segment);

  return order.map(i => segments[i]).join("");
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
