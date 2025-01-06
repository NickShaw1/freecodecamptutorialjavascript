//"And" operator

var val = 14;

function testLogicalAnd() {
  if (val < 51 && val > 29) {
    return "This number is between 30 and 50";
  }
  return "This number is outside the range of 30 to 50";
}

// number is outside range
console.log(testLogicalAnd());

//"Or" operator - (nested if)
var num = 5;

function testLogicalOr() {
  if (num < 11) {
    if (num > 4) {
      return "Number is between 5 and 10";
    }
  }
  return "Number is outside range of 5 and 10";
}

// number is within range
console.log(testLogicalOr());
