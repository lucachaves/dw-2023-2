export function sum(...values) {
  let total = 0;

  for (const value of values) {
    total += value;
  }

  return total;
}

export function sumOdds(...values) {
  return values.filter((x) => x & 1).reduce((acc, value) => acc + value, 0);
}

export function product(...values) {
  return values.reduce((acc, value) => acc * value);
}
