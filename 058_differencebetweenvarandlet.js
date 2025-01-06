var catName = "Eva";
var quote;

quote = catName + " says Meow!";

function catTalk() {
  "use strict";

  let catName = "Patch";
  quote = catName + " says Meow!";
  return quote;
}

console.log(catTalk());
console.log(catName);

function checkScope() {
  "use strict";

  var i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}

checkScope();
