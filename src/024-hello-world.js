/**
 *  Hello World #24
 */

module.exports = () => {
  const program = new Uint8Array([..."<]OQ=<<<=¹¼¼¼<=\\<=C?¾¼¼¼<=<8¸¼¼¼<=L<<9¿¼¼¼<=<=:½¼¼¼<<;¨¼¼¼<>:QYQSNE><;[SSX^EY<<6¶¼¼¼<=¸¼¼¼<<},77¯¼¼¼<=<},71tYPPS\u0010\u001ckSNPX<"].map(d => d.charCodeAt``^60));

  const { goodbye, memory: { buffer } } =
    new WebAssembly.Instance(new WebAssembly.Module(program)).exports;

  return String.fromCharCode(...(new Uint8Array(buffer)))
    .slice(goodbye()).replace(/\u0000/g, '');
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null
