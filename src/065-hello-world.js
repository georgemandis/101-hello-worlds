/**
 *  Hello World #65
 *  By @georgemandis
 *
 *  Traverses a linked list where each node holds a character
 */

module.exports = () => {
  // Build a linked list from "Hello, World" characters
  function Node(value, next) {
    return { value, next };
  }

  // Construct the list in reverse so the head starts at 'H'
  const chars = "Hello, World".split('').reverse();
  let head = null;
  for (const ch of chars) {
    head = Node(ch, head);
  }

  // Traverse the linked list, collecting characters
  let result = '';
  let current = head;
  while (current !== null) {
    result += current.value;
    current = current.next;
  }

  return result;
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
