/**
 *  Hello World #32
 */

module.exports = () => (
  ({
    Hello = ({ [0]: a, [1]: b, slice, name = slice.call(World, a, b) }) => name,
    World = (prev, next, { result = prev + next }) => result
  }) =>
    [Hello, '57', World].map(Hello).reduce(World)
)({});

module.id == "." ? console.log(module.exports()) : null