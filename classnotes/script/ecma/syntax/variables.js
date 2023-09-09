// without declaration keyword
variable = 100;
console.log(variable);

// const
const number = 100;

// 'const' declarations must be initialized.
// const number;

// TypeError: Assignment to constant variable.
// number = 100;

// not mutable
const array = [1, 2, 3, 4, 5];

array.push(6);

console.log(array);

// Cannot redeclare block-scoped variable 'number'
// const number = 100;

function test() {
  const number = 10;
}

// let
let value = 100;

// Cannot redeclare block-scoped variable 'value'
// let value;

// var
var variable = 100;

// reassignment
value = 200;

// dynamic types
value = true;

value = 'Hello';

// case sensitive
let Value = 100;

// weak type
const x = 5;
const y = '10';
console.log(x + y); //=> 510
