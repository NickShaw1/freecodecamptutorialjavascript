function printManyTimes(str) {
  "use strict";

  const SENTENCE = str + " is cool.";

  for (var i = 0; i < str.length; i += 12) {
    console.log(SENTENCE);
  }

  for (var i = 0; i < str.length; i += 12) {
    console.log(str.length);
  }
}

printManyTimes("Freecodecamp");
