const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.6,
  average: 34.45,
};

const half = (function () {
  return function half({ max, min }) {
    return "Max/Min average = " + (max + min) / 2.0;
  };
})();

console.log(stats);
console.log(half(stats));
