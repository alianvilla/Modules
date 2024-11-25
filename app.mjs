import {
  add,
  subtract,
  multiply,
  divide,
  stringLowercase,
  stringUppercase,
  stringPadEnd,
  stringPadStart,
} from "./utils/index.mjs";

console.log(add(5, 3));
console.log(subtract(5, 3));
console.log(multiply(5, 3));
console.log(divide(5, 3));

console.log(stringLowercase("Hello, World!"));
console.log(stringUppercase("Hello, World!"));
console.log(stringPadEnd("Hello", 10, "-"));
console.log(stringPadStart("Hello", 10, "-"));
