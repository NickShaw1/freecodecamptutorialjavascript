//random number between 0 and 1
function randomFraction() {
  return Math.random();
}

console.log(randomFraction());

//random whole number within min-max range
function randomRange(ourMax, ourMin) {
  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

console.log(randomRange(100, 1000));

//random whole number
function randomWholeNumber() {
  return Math.floor(Math.random() * 50);
}

console.log(randomWholeNumber());
