// import method from library
// * loads all lib content
// as => alias for the given method (a new name for it)
import { union as gatherAll, uniq as exclusiveItems } from 'ramda';
import sum, { sub, multiply, div, PI } from './utils';

const arr1 = [1, 1, 1, 2, 2, 3, 4, 5, 6, 6];
const arr2 = [5, 6, 6, 6, 7, 7, 8, 9, 10, 1];

const arr3 = gatherAll(arr1, arr2);

const arr4 = exclusiveItems(arr1);

console.log(arr3);
console.log(arr4);

console.log(sum(3, 5));
console.log(sub(5, 3));
console.log(multiply(5, 3));
console.log(div(4, 2));
console.log(PI);
