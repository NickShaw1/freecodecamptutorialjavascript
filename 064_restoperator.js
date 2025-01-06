const sum = (function () {
  return function sum(x, y, z) {
    const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
  };
})();

console.log(sum(1, 2, 3));

const sum2 = (function () {
  return function sum2(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();

console.log(sum2(4, 4, 2, 5, 6));
