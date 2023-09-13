import Calc, { sum, minus, multiply, divide } from './math.js';

console.log(Calc.sum(2)); //=> NaN
console.log(Calc.sum(2, 1)); //=> 3
console.log(Calc.sum(2, 1, 1)); //=> 3
console.log(Calc.minus(2, 1)); //=> 1
console.log(Calc.calc(2, 1, (a, b) => a ** b)); //=> 2
console.log(Calc.calc(2, 1, sum)); //=> 3
console.log(Calc.calc(2, 1, minus)); //=> 1
console.log(Calc.calc(2, 1, multiply)); //=> 2
console.log(Calc.calc(2, 1, divide)); //=> 2
console.log(Calc.product(2, 3));
console.log(Calc.product(2, 3, 4, 5));
console.log(Calc.pow(2)); //=> 2
console.log(Calc.pow(2, 2)); //=> 4
