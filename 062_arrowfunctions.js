/* example 1 */
const magic = () => new Date();

console.log(magic); //["Function magic"]

/* example 2 */
const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5])); //concatenate the arrays

/* example 3 */
const realNumberArray = [4, 5.6, -2, 3, 3.3, -6, 5];

const squareList = (arr) => {
  const squaredIntegers = arr
    .filter((num) => Number.isInteger(num) && num > 0)
    .map((x) => x * x);
  return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
