/**
 *  Hello World #28
 *  By @kirjavascript
 */

module.exports = () => {
  fn = (s) => new Proxy({}, {
    get(_, key) {
      return s ? () => [s, ' ' + key] + [] : fn(key)
    },
  })
  return fn().Hello.World();
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null
