// expression (commands: variable, literal, operator) => (value)
// 2x+1
const number = 10;

2 * number + 1;

console.log(2 * number + 1);

// operators (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

// arithmetic operators
// + - * / % **
console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(2 % 2);
console.log(2 ** 2);
// ieee 754
console.log(0.3 - 0.2);

// concat operator
console.log(2 + '2'); //=> 22
console.log(2 + Number('2')); //=> 4

// increment and decrement operators
let value = 10;

console.log(value++); //=> 10
console.log(++value); //=> 12

// relational operators
console.log(1 < 2);
console.log(1 <= 2);
console.log(1 > 2);
console.log(1 >= 2);

// equality operators
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality
// https://dorey.github.io/JavaScript-Equality-Table/
console.log(1 == 1);
console.log(1 === 1);
console.log(1 == '1');
console.log(1 === '1');

// binary logical operators
// ||, &&, !
console.log(true && false); //=> false
console.log(true || false); //=> true
console.log(!true); //=> false
console.log(!!10); //=> true
console.log(!!0); //=> false

let a = 0;
console.log(a || '10'); //=> 10

// Nullish coalescing operator (??)
let b = 0;
console.log(b ?? '10'); //=> 10

// binary bitwise operators
// &, |, ^, ~, <<, >>, >>>

//   00000001 1
// & 00000001 1
// = 00000001 1
console.log(1 & 1);

//   00000010 2
// & 00000001 1
// = 00000000 0
console.log(2 & 1);

//   00000011 3
// & 00000001 1
// = 00000001 1
console.log(3 & 1);

//   00000100 4
// & 00000001 1
// = 00000000 0
console.log(4 & 1);

// coercion type
// https://exploringjs.com/deep-js/ch_type-coercion.html
console.log(1 + '1'); // 11
console.log(10 / 'a'); // NaN
// type error
const x = 10;
x(); // TypeError: x is not a function
