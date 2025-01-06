const arr1 = ["Jan", "Feb", "March", "April"];

let arr2;
(function () {
  arr2 = [...arr1];
  arr1[0] = "cake";
})();

console.log(arr2);
console.log(arr1);

