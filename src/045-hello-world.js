/**
 *  Hello World #<number>
 *  By @<github-username>
 */

module.exports = () => {
  class NonStringError extends Error {
    constructor(input) {
      super(`Input '${input}' is not of type 'string'.`);

      this.name = "NonStringError";
    }
  }

  class StringTooShortError extends Error {
    constructor(input, length) {
      super(`Input '${input}' is too short, it must be at least ${length} characters long.`);

      this.name = "StringTooShortError";
    }
  }

  class StringTooLongError extends Error {
    constructor(input, length) {
      super(`Input '${input}' is too long, it cannot be longer than ${length} characters.`);

      this.name = "StringTooLongError";
    }
  }

  class CharacterChecker {
    static checkCharacter(character) {
      if (typeof character !== "string") {
        throw new NonStringError(character);
      }

      if (character.length < 1) {
        throw new StringTooShortError(character, 1);
      }

      if (character.length > 1) {
        throw new StringTooLongError(character, 1);
      }
    }
  }

  class Character {
    constructor(character) {
      CharacterChecker.checkCharacter(character);

      this._character = character;
    }

    get character() {
      return this._character;
    }
  }

  class CharacterEnum {
    constructor(value) {
      CharacterChecker.checkCharacter(value);

      this._value = value;
    }

    get value() {
      return this._value;
    }
  }

  class NonLetterCharacterError extends Error {
    constructor(input) {
      super(`Input '${input}' contains non-letter character(s).`);

      this.name = "NonLetterCharacterError";
    }
  }

  class LetterCharacter extends Character {
    constructor(character) {
      super(character);

      if (/[^a-z]+/gi.test(character)) {
        throw new NonLetterCharacterError(character);
      }

      this._character = character;
    }
  }

  class LetterCharacterEnum extends CharacterEnum {
    static A = new LetterCharacterEnum("a");
    static B = new LetterCharacterEnum("b");
    static C = new LetterCharacterEnum("c");
    static D = new LetterCharacterEnum("d");
    static E = new LetterCharacterEnum("e");
    static F = new LetterCharacterEnum("f");
    static G = new LetterCharacterEnum("g");
    static H = new LetterCharacterEnum("h");
    static I = new LetterCharacterEnum("i");
    static J = new LetterCharacterEnum("j");
    static K = new LetterCharacterEnum("k");
    static L = new LetterCharacterEnum("l");
    static M = new LetterCharacterEnum("m");
    static N = new LetterCharacterEnum("n");
    static O = new LetterCharacterEnum("o");
    static P = new LetterCharacterEnum("p");
    static Q = new LetterCharacterEnum("q");
    static R = new LetterCharacterEnum("r");
    static S = new LetterCharacterEnum("s");
    static T = new LetterCharacterEnum("t");
    static U = new LetterCharacterEnum("u");
    static V = new LetterCharacterEnum("v");
    static W = new LetterCharacterEnum("w");
    static X = new LetterCharacterEnum("x");
    static Y = new LetterCharacterEnum("y");
    static Z = new LetterCharacterEnum("z");
  }

  class NonNumericCharacterError extends Error {
    constructor(input) {
      super(`Input '${input}' contains non-numeric character(s).`);

      this.name = "NonNumericCharacterError";
    }
  }

  class NumericCharacter extends Character {
    constructor(character) {
      super(character);

      if (/[^0-9]+/g.test(character)) {
        throw new NonNumericCharacterError(character);
      }

      this._character = character;
    }
  }

  class NumericCharacterEnum extends CharacterEnum {
    static ZERO = new NumericCharacterEnum("0");
    static ONE = new NumericCharacterEnum("1");
    static TWO = new NumericCharacterEnum("2");
    static THREE = new NumericCharacterEnum("3");
    static FOUR = new NumericCharacterEnum("4");
    static FIVE = new NumericCharacterEnum("5");
    static SIX = new NumericCharacterEnum("6");
    static SEVEN = new NumericCharacterEnum("7");
    static EIGHT = new NumericCharacterEnum("8");
    static NINE = new NumericCharacterEnum("9");
  }

  class NonPunctuationCharacterError extends Error {
    constructor(input) {
      super(`Input '${input}' contains non-punctuation character(s).`);

      this.name = "NonPunctuationCharacterError";
    }
  }

  class PunctuationCharacter extends Character {
    constructor(character) {
      super(character);

      if (/[^.,?!:;'"\-{}()[\]]+/g.test(character)) {
        throw new NonPunctuationCharacterError(character);
      }

      this._character = character;
    }
  }

  class PunctuationCharacterEnum extends CharacterEnum {
    static PERIOD = new PunctuationCharacterEnum(".");
    static COMMA = new PunctuationCharacterEnum(",");
    static QUESTION_MARK = new PunctuationCharacterEnum("?");
    static EXCLAMATION_POINT = new PunctuationCharacterEnum("!");
    static COLON = new PunctuationCharacterEnum(":");
    static SEMICOLON = new PunctuationCharacterEnum(";");
    static SINGLE_QUOTE = new PunctuationCharacterEnum("'");
    static DOUBLE_QUOTE = new PunctuationCharacterEnum('"');
    static HYPHEN = new PunctuationCharacterEnum("-");
    static OPENING_BRACE = new PunctuationCharacterEnum("{");
    static CLOSING_BRACE = new PunctuationCharacterEnum("}");
    static OPENING_PARENTHESIS = new PunctuationCharacterEnum("(");
    static CLOSING_PARENTHESIS = new PunctuationCharacterEnum(")");
    static OPENING_BRACKET = new PunctuationCharacterEnum("[");
    static CLOSING_BRACKET = new PunctuationCharacterEnum("]");
  }

  class NonWhitespaceCharacterError extends Error {
    constructor(input) {
      super(`Input '${input}' contains non-whitespace character(s).`);

      this.name = "NonWhitespaceCharacterError";
    }
  }

  class WhitespaceCharacter extends Character {
    constructor(character) {
      super(character);

      if (/[^ \t\v\n\r\f]+/g.test(character)) {
        throw new NonWhitespaceCharacterError(character);
      }

      this._character = character;
    }
  }

  class WhitespaceCharacterEnum extends CharacterEnum {
    static SPACE = new WhitespaceCharacterEnum(" ");
    static HORIZONTAL_TAB = new WhitespaceCharacterEnum("\t");
    static VERTICAL_TAB = new WhitespaceCharacterEnum("\v");
    static LINE_FEED = new WhitespaceCharacterEnum("\n");
    static CARRIAGE_RETURN = new WhitespaceCharacterEnum("\r");
    static FORM_FEED = new WhitespaceCharacterEnum("\f");
  }

  class InvalidEnumError extends Error {
    constructor(input) {
      super(`Input '${input}' is an invalid enum type.`);

      this.name = "InvalidEnumError";
    }
  }

  class CharacterFactory {
    static createCharacter(enumType) {
      if (enumType instanceof LetterCharacterEnum) {
        return new LetterCharacter(enumType.value);
      }

      if (enumType instanceof NumericCharacterEnum) {
        return new NumericCharacter(enumType.value);
      }

      if (enumType instanceof PunctuationCharacterEnum) {
        return new PunctuationCharacter(enumType.value);
      }

      if (enumType instanceof WhitespaceCharacterEnum) {
        return new WhitespaceCharacter(enumType.value);
      }

      throw new InvalidEnumError(enumType);
    }
  }

  class HelloWorld {
    constructor() {
      this.d = CharacterFactory.createCharacter(LetterCharacterEnum.D);
      this.e = CharacterFactory.createCharacter(LetterCharacterEnum.E);
      this.h = CharacterFactory.createCharacter(LetterCharacterEnum.H);
      this.l = CharacterFactory.createCharacter(LetterCharacterEnum.L);
      this.o = CharacterFactory.createCharacter(LetterCharacterEnum.O);
      this.r = CharacterFactory.createCharacter(LetterCharacterEnum.R);
      this.w = CharacterFactory.createCharacter(LetterCharacterEnum.W);
      this.comma = CharacterFactory.createCharacter(PunctuationCharacterEnum.COMMA);
      this.space = CharacterFactory.createCharacter(WhitespaceCharacterEnum.SPACE);
    }

    toString() {
      return (
        this.h.character.toUpperCase() +
        this.e.character.toLowerCase() +
        this.l.character.toLowerCase() +
        this.l.character.toLowerCase() +
        this.o.character.toLowerCase() +
        this.comma.character +
        this.space.character +
        this.w.character.toUpperCase() +
        this.o.character.toLowerCase() +
        this.r.character.toLowerCase() +
        this.l.character.toLowerCase() +
        this.d.character.toLowerCase()
      );
    }
  }

  try {
    return new HelloWorld().toString();
  } catch (error) {
    return error;
  }
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
