function testIfElse(val) {
  if (val < 5) {
    return "Less than 5.";
  } else if (val < 10) {
    return "Less than 10.";
  } else {
    return "More than 10.";
  }
}

console.log(testIfElse(11));
