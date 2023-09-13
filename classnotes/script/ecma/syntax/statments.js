// statements (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)

// if
// https://dorey.github.io/JavaScript-Equality-Table/
// Falsy = null, undefined, false, NaN, 0, -0, 0n, '';
// Truthy = !Falsy
let number = 10;

if (number > 0) console.log('This number is greater than zero');

if (number > 0) {
  const message = 'This number is great than zero';

  console.log(message);
}

// if..else
number = 10;

if (number > 0) {
  console.log('This number is greater than zero');
} else {
  console.log('This number is less than zero');
}

// if..else if..else
number = 10;

if (number > 0) {
  console.log('This number is greater than zero');
} else if (number < 0) {
  console.log('This number is less than zero');
} else {
  console.log('This number is zero');
}

let value1 = 1;
let value2 = 2;
let operator = '+'; // +, -, *, /
let result;

if (operator === '+') {
  result = value1 + value2;
} else if (operator === '-') {
  result = value1 - value2;
} else if (operator === '*') {
  result = value1 * value2;
} else if (operator === '/') {
  result = value1 / value2;
} else {
  result = 'Operator invalid';
}

// switch
value1 = 1;
value2 = 2;
operator = '+'; // +, -, *, /
result = '';

switch (operator) {
  case '+':
    result = value1 + value2;
    break;
  case '-':
    result = value1 - value2;
    break;
  case '*':
    result = value1 * value2;
    break;
  case '/':
    result = value1 / value2;
    break;
  default:
    result = 'Operator invalid';
}

console.log(result);

number = 5;

switch (true) {
  case number > 0:
    result = 'This number is greater than zero';
    break;
  case number < 0:
    result = 'This number is less than zero';
    break;
  default:
    result = 'This number is zero';
}

console.log(result);

// while
let x = 0;
result = '';

while (x <= 10) {
  result += x;

  x++;
}

console.log(result);

// do..while
x = 0;
result = '';

do {
  result += x;

  x++;
} while (x <= 10);

console.log(result);

// for
x = '';

for (let i = 0; i <= 10; i++) {
  x += i;
}

console.log(x);

// 00, 01, ..., 09
// 10, 11, ..., 19
// ...
// 90, 91, ... 99
result = '';

for (let i = 0; i < 100; i++) {
  if (i < 10) {
    result += '0' + i;
  } else {
    result += i;
  }

  if (i % 10 === 9) {
    result += '\n';
  } else {
    result += ' ';
  }
}

console.log(result);

// 90, 91, ... 99
// ...
// 10, 11, ..., 19
// 00, 01, ..., 09
result = '';

for (let i = 99; i >= 0; i--) {
  // result += String(i).padStart(2, '0');
  result += i < 10 ? '0' + i : i;

  result += i % 10 ? ' ' : '\n';
}

console.log(result);

// for for
result + '';

for (let decimal = 9; decimal >= 0; decimal -= 1) {
  for (let unit = 9; unit > 0; unit -= 2) {
    result += decimal + String(unit);

    result += ' ';
  }
  result += '\n';
}

console.log(result);
