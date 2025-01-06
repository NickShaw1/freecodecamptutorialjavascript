function aBTest(a, b) {
  if (a < 0 || b < 0) {
    return "Undefined";
  } else {
    return "Defined";
  }
}

console.log(aBTest(-2, 2));
