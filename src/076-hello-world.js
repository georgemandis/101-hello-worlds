/**
 *  Hello World #76
 *  By @georgemandis
 *
 *  Uses the Sieve of Eratosthenes to find primes, then picks specific
 *  Nth primes whose values are the character codes of "Hello, World"
 */

module.exports = () => {
  // Sieve of Eratosthenes to find primes up to a limit
  const sieve = (limit) => {
    const isPrime = new Array(limit + 1).fill(true);
    isPrime[0] = isPrime[1] = false;
    for (let i = 2; i * i <= limit; i++) {
      if (isPrime[i]) {
        for (let j = i * i; j <= limit; j += i) {
          isPrime[j] = false;
        }
      }
    }
    const primes = [];
    for (let i = 2; i <= limit; i++) {
      if (isPrime[i]) primes.push(i);
    }
    return primes;
  };

  const primes = sieve(1000);

  // "Hello, World" char codes: 72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100
  // We store the 1-based index into the primes array whose prime value equals the char code
  // primes[20] = 73... that won't work directly. Instead, we store which prime INDEX
  // to use, and the prime at that index IS the char code.
  // But not all char codes are prime. So instead: store the index of the prime
  // that is closest, plus an offset.

  // Better approach: the Nth prime number, and we use N as our encoded data.
  // We find which prime index gives us each character code.
  // charCode = primes[index] doesn't work for non-prime codes.
  // Alternative: use pairs (primeIndex, offset) where charCode = primes[primeIndex] + offset

  // Encoding: [primeIndex, offset] pairs for each char of "Hello, World"
  // H=72: 71 is prime (index 19, 0-based), so 71+1=72 → [19, 1]
  // e=101: 101 is prime (index 25), → [25, 0]
  // l=108: 107 is prime (index 27), 107+1=108 → [27, 1]
  // l=108: same → [27, 1]
  // o=111: 109 is prime (index 28), 109+2=111 → [28, 2]
  // ,=44: 43 is prime (index 13), 43+1=44 → [13, 1]
  // ' '=32: 31 is prime (index 10), 31+1=32 → [10, 1]
  // W=87: 83 is prime (index 22), 83+4=87 → [22, 4]
  // o=111: → [28, 2]
  // r=114: 113 is prime (index 29), 113+1=114 → [29, 1]
  // l=108: → [27, 1]
  // d=100: 97 is prime (index 24), 97+3=100 → [24, 3]

  const encoded = [
    [19, 1], [25, 0], [27, 1], [27, 1], [28, 2],
    [13, 1], [10, 1],
    [22, 4], [28, 2], [29, 1], [27, 1], [24, 3]
  ];

  return encoded.map(([idx, offset]) => String.fromCharCode(primes[idx] + offset)).join("");
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
