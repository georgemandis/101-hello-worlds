/**
 *  Hello World #25
 */

module.exports = (i = 0) => {

  method = (obj, name) => Object.getOwnPropertyNames(obj).find(m => name.test(m));
  for(
    s='',
    a=`䡥汬漬⁗潲汤`
    ;a[i];
  ) {
    s += String[method(String, /arc/i)](
      (x = a[method(([]+[]).__proto__, /code/i)](i++))
      >> 8, x & 0xFF
    );
  }
  return s;
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null
