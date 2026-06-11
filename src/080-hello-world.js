/**
 *  Hello World #80
 *  By @georgemandis
 *
 *  Encodes character codes as frequencies in sine waves, then samples
 *  each wave at a specific phase to decode the original values
 */

module.exports = () => {
  // Each character code is encoded as the amplitude of a sine wave.
  // We store the amplitude and a verification frequency, then recover
  // the character code by reading the peak amplitude of each wave.

  // "Hello, World" char codes: 72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100
  const charCodes = [72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100];

  // Encode: each character becomes a sine wave with amplitude = charCode
  // and a unique frequency. We sample at the peak (phase = PI/2) to recover.
  const waves = charCodes.map((code, i) => ({
    amplitude: code,
    frequency: (i + 1) * 440, // unique frequency per character
    phase: Math.PI / 2,       // sample at the peak
  }));

  // Decode: sample each wave at its peak phase
  // sin(PI/2) = 1, so amplitude * sin(PI/2) = amplitude = charCode
  return waves
    .map((wave) => {
      const sample = wave.amplitude * Math.sin(wave.phase);
      return String.fromCharCode(Math.round(sample));
    })
    .join("");
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
