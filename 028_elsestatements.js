function testElse(val) {
  var result = "";
  if (val >= 5) {
    result = "5 or bigger than 5";
  } else {
    result = "Smaller than 5";
  }
  return result;
}

// 3 is smaller than 5
console.log(testElse(3));
