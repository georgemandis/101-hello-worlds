/**
 *  Hello World #47
 *  By @thykka
 */

const toInt = n => n | 0;

const fract = n => n - toInt(n);

const decode = n => String.fromCharCode(toInt(n));

const sleepSort = a => {
  const results = [];
  let now = Date.now();
  const fns = a.map(n => {
    return [now + fract(n) * 1000, () => decode(n)];
  });
  while(results.length < a.length) {
    now = Date.now();
    fns.forEach(([time, fn], i) => {
      if(time < now) {
        results.push(fn());
        fns.splice(i, 1);
      }
    });
  }
  return results;
}

module.exports = () => sleepSort([
  111.09, 44.06, 100.12, 114.1, 72.01, 101.02,
  111.05, 32.07, 108.04, 108.11, 87.08, 108.03
]).join``;

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
