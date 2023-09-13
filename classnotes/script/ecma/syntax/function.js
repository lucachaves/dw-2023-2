// function declaration
function sum(a, b) {
  return a + b;
}

// call function
console.log(sum(2)); //=> NaN
console.log(sum(2, 1)); //=> 3
console.log(sum(2, 1, 1)); //=> 3

// anonymous/lambda function
const minus = function (a, b) {
  return a - b;
};

console.log(minus(2, 1)); //=> 1

// arrow function
const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => a / b;

// callback function
function calc(a, b, callback) {
  return callback(a, b);
}

console.log(calc(2, 1, (a, b) => a ** b)); //=> 2
console.log(calc(2, 1, sum)); //=> 3
console.log(calc(2, 1, minus)); //=> 1
console.log(calc(2, 1, multiply)); //=> 2
console.log(calc(2, 1, divide)); //=> 2

// rest param
function product(...numbers) {
  let result = 1;

  for (const number of numbers) {
    result *= number;
  }

  return result;
}

console.log(product(2, 3));
console.log(product(2, 3, 4, 5));

// default param
function pow(a, b = 1) {
  return a ** b;
}

console.log(pow(2)); //=> 2
console.log(pow(2, 2)); //=> 4
