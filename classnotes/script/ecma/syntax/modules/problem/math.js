function sum(a, b) {
  return a + b;
}

const minus = function (a, b) {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => a / b;

function calc(a, b, callback) {
  return callback(a, b);
}

function product(...numbers) {
  let result = 1;

  for (const number of numbers) {
    result *= number;
  }

  return result;
}

function pow(a, b = 1) {
  return a ** b;
}
