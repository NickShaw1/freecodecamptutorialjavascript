var myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

var myData = myArray[3][0][1]; //answer should be 11
var myData2 = myArray[1][2]; //answer should be 6

console.log(myData, myData2);
