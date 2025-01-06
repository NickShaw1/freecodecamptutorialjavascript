// == (includes string conversion)

var num = "3";

function testNotStrict() {
  if (num == 3) {
    return "Equal";
  }
  return "Not equal";
}

console.log(testNotStrict());

// === (does not include string conversion)

function testStrict() {
  if (num === 3) {
    return "Equal";
  }
  return "Not equal";
}

console.log(testStrict());

// !== (NOT EQUAL does include string conversion)

function testNotEqualNotStrict() {
  if (num != 3) {
    return "Not Equal";
  }
  return "Equal";
}

console.log(testNotEqualNotStrict());

// !=== (NOT EQUAL does not include string conversion)

function testNotEqualStrict() {
  if (num !== 3) {
    return "Not Equal";
  }
  return "Equal";
}

console.log(testNotEqualStrict());
