/**
 *  Hello World #69
 *  By @georgemandis
 *
 *  A finite automaton transitions through states, emitting characters
 */

module.exports = () => {
  // Define a finite state machine with 13 states (S0 through S12)
  // Each state has a character to emit and a transition to the next state
  // S12 is the accepting/halt state
  const states = {
    S0:  { emit: 'H', next: 'S1' },
    S1:  { emit: 'e', next: 'S2' },
    S2:  { emit: 'l', next: 'S3' },
    S3:  { emit: 'l', next: 'S4' },
    S4:  { emit: 'o', next: 'S5' },
    S5:  { emit: ',', next: 'S6' },
    S6:  { emit: ' ', next: 'S7' },
    S7:  { emit: 'W', next: 'S8' },
    S8:  { emit: 'o', next: 'S9' },
    S9:  { emit: 'r', next: 'S10' },
    S10: { emit: 'l', next: 'S11' },
    S11: { emit: 'd', next: 'HALT' },
  };

  // Input tape drives the automaton — each symbol triggers a transition
  // We use a tape of 12 symbols to drive 12 transitions
  const tape = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'];

  // But let's make it more interesting: the state machine uses conditional
  // transitions based on input symbols from a scrambled tape
  const machine = {
    S0:  { 'x': { emit: 'H', next: 'S1' } },
    S1:  { 'q': { emit: 'e', next: 'S2' } },
    S2:  { 'z': { emit: 'l', next: 'S3' } },
    S3:  { 'a': { emit: 'l', next: 'S4' } },
    S4:  { 'm': { emit: 'o', next: 'S5' } },
    S5:  { 'p': { emit: ',', next: 'S6' } },
    S6:  { 'w': { emit: ' ', next: 'S7' } },
    S7:  { 'k': { emit: 'W', next: 'S8' } },
    S8:  { 'j': { emit: 'o', next: 'S9' } },
    S9:  { 'r': { emit: 'r', next: 'S10' } },
    S10: { 'v': { emit: 'l', next: 'S11' } },
    S11: { 'n': { emit: 'd', next: 'HALT' } },
  };

  const inputTape = ['x', 'q', 'z', 'a', 'm', 'p', 'w', 'k', 'j', 'r', 'v', 'n'];

  let currentState = 'S0';
  let output = '';

  for (const symbol of inputTape) {
    const transition = machine[currentState][symbol];
    if (!transition) break;
    output += transition.emit;
    currentState = transition.next;
    if (currentState === 'HALT') break;
  }

  return output;
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
