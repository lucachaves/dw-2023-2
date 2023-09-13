export function sum(a, b) {
  return a + b;
}

export const minus = function (a, b) {
  return a - b;
};

export const multiply = (a, b) => {
  return a * b;
};

export const divide = (a, b) => a / b;

export function calc(a, b, callback) {
  return callback(a, b);
}

export function product(...numbers) {
  let result = 1;

  for (const number of numbers) {
    result *= number;
  }

  return result;
}

export function pow(a, b = 1) {
  return a ** b;
}

export default { sum, minus, multiply, divide, calc, product, pow };
