/**
 *  Hello World #23
 *  By @iakshay and @georgemandis
 */

module.exports = (q = module, g = Object.getOwnPropertyNames, z = global) => {
  let k = [5, 10, 3, 2].map(_ => z[g(z)[_]]);

  let sf = _ => k[_][g(k[_])[2]];

  let sm = [23, 25, 29][g(sf(3))[21]](_ => g(sf(1))[_]);

  let [nm, am, mm, x] = [
    g(sf(2))[4],
    g(sf(3))[7],
    q[g(q.__proto__)[2]],
    k[1][g(k[1])[3]]
  ];

  let p = q[g(q)[3]][sm[2]](x(47));
  let [f, s] = [p[am](), p[am]()];

  let pn = (k[0](f) - 1)[nm]()[sm[0]](3, 0);
  let r = f[sm[1]](/[^-]+/, pn);

  return mm([x(46), x(47), s, r][g(sf(3))[28]](x(47)))();
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
