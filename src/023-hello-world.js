/**
 *  Hello World #23
 *  By @iakshay and @georgemandis
 *
 *  This works exactly like the previous one — literally.
 *  It loads and executes 022-hello-world.js by deriving its
 *  path from this file's own filename.
 *
 *  Original version used hardcoded Object.getOwnPropertyNames
 *  indices that were tied to a specific V8 property ordering
 *  and broke across Node versions. Rewritten to preserve the
 *  spirit of the obfuscation without the version dependency.
 */

module.exports = (q = module, x = String.fromCharCode) => {
  let p = q.filename.split(x(47));
  let f = p.pop();
  let pn = (parseInt(f) - 1).toString().padStart(3, 0);
  let r = f.replace(/[^-]+/, pn);
  return q.require([x(46), r].join(x(47)))();
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
