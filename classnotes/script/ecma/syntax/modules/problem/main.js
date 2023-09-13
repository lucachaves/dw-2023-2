console.log(sum(2)); //=> NaN
console.log(sum(2, 1)); //=> 3
console.log(sum(2, 1, 1)); //=> 3
console.log(minus(2, 1)); //=> 1
console.log(calc(2, 1, (a, b) => a ** b)); //=> 2
console.log(calc(2, 1, sum)); //=> 3
console.log(calc(2, 1, minus)); //=> 1
console.log(calc(2, 1, multiply)); //=> 2
console.log(calc(2, 1, divide)); //=> 2
console.log(product(2, 3));
console.log(product(2, 3, 4, 5));
console.log(pow(2)); //=> 2
console.log(pow(2, 2)); //=> 4
