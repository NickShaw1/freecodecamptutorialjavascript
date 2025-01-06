//increment by 1
var myArray = [];

for (var i = 0; i < 5; i++) {
  myArray.push(i);
}

console.log(myArray);

//odd numbers incremented by 2
var oddArray = [];

for (var i = 1; i < 10; i += 2) {
  oddArray.push(i);
}

console.log(oddArray);

//decrement by 1
var backwardsArray = [];

for (var i = 5; i > 0; i--) {
  backwardsArray.push(i);
}

console.log(backwardsArray);

//decrement by 2 odd
var oddBackwardsArray = [];

for (var i = 9; i > 0; i -= 2) {
  oddBackwardsArray.push(i);
}

console.log(oddBackwardsArray);
