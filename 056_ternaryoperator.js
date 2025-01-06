function checkEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
console.log(checkEqual(2, 2));

function checkEqual(a, b) {
  return a === b ? true : false;
}

console.log(checkEqual(2, 2));
