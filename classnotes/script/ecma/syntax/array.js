// create array with values
const numbers = [1, 2, 3];

console.log(numbers[2]); //=> 3

console.log(numbers.at(-1)); //=> 3

// adding/changing values
const values = [];

values[0]; //=> undefined

values[0] = 1;

values[10] = 10;

values[0] = 2;

console.log(values);

// multiple types
const person = [123, 'John Doe', ['john@email.com', '83999999999']];

console.log(person[1]);

console.log(person[2][1]);

// destructuring arrays
// const id = person[0];
// const name = person[1];
const [id, name] = person;

// spread operator
console.log(Math.min(10, 1, 100));

console.log(Math.min(...numbers));

// clone array
const student = [...person, ['DW', 'ASA']];

console.log(student);

// iteration
for (let flag = 0; flag < numbers.length; flag++) {
  console.log(numbers[flag]);
}

// values of numbers
for (const value of numbers) {
  console.log(value);
}

// keys of numbers
for (const index in numbers) {
  console.log(index);
  console.log(numbers[index]);
}

// entries
for (const [key, value] of numbers.entries()) {
  console.log(`${key}: ${value}`);
}

// Object Array

// Property: length
console.log(numbers.length);

// Mutator: push(), unshift(), pop(), shift(), reverse(), sort(), splice()
console.log(numbers);

numbers.push(4);

console.log(numbers);

numbers.push(5, 6);

console.log(numbers);

numbers.unshift(0);

console.log(numbers);

const firstValue = numbers.shift();

console.log(numbers);

const lastValue = numbers.pop();

console.log(numbers);

numbers.reverse();

console.log(numbers);

numbers.sort();

console.log(numbers);

console.log([22, 1, 111].sort((a, b) => a - b));

console.log(['a', 'B', 'A'].sort((a, b) => a.localeCompare(b)));

const hosts = ['192.168.0.1', '192.168.0.2', '172.16.0.1', '10.0.0.1'];

hosts.splice(2, 1);

console.log(hosts);

// Accessor: includes(), join(), slice()

const value = 10;

console.log([10, 100].includes(value));

console.log(hosts.slice(0, 2));

console.log(hosts);

console.log(hosts.join('\n'));

// Iteration: forEach(), map(), filter(), reduce(), every(), some()
// [1, 2, 3]
// f(x) = 2x
// [2, 4, 6]

[1, 2, 3].forEach((x, i) => {
  console.log(2 * x);
});

console.log([1, 2, 3].map((x) => 2 * x));

console.log([1, 2, 3].filter((x) => !(x & 1)));

console.log(
  [1, 2, 3].filter(function (x) {
    return !(x & 1);
  })
);

const isEven = function (x) {
  return !(x & 1);
};

console.log([1, 2, 3].filter(isEven));

console.log([1, 2, 3].reduce((acc, value) => acc + value));

console.log([1, 2, 3].reduce((acc, value) => acc * value, 1));

console.log([1, 2, 3].every((x) => x & 1));

console.log([1, 3].every((x) => x & 1));

console.log([1, 2, 3].some((x) => x & 1));

console.log([2, 4].some((x) => x & 1));
