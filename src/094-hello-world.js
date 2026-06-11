/**
 *  Hello World #94
 *  By @georgemandis
 *
 *  WeakRef / FinalizationRegistry — Objects whose string
 *  representations build the message (no actual GC dependency)
 */

module.exports = () => {
  const registry = new FinalizationRegistry(() => {});

  const chars = "Hello, World".split("").map(ch => {
    const obj = { char: ch, toString() { return this.char; } };
    registry.register(obj, ch);
    return new WeakRef(obj);
  });

  return chars.map(ref => {
    const obj = ref.deref();
    return obj !== undefined ? String(obj) : "?";
  }).join("");
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
