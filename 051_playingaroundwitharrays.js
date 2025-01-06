const readline = require("readline-sync");

var cakerecipe;
var caketoppings;
var cake;
var ingredients = [
  ["sugar", "icing", "chocolate"],
  ["flour", "eggs", "butter"],
];

cakerecipe =
  "To bake a cake, you will need " +
  ingredients[1][0] +
  ", " +
  ingredients[1][1] +
  " and " +
  ingredients[1][2] +
  ".";

caketoppings =
  ingredients[0][0] +
  ", " +
  ingredients[0][1] +
  " and " +
  ingredients[0][2] +
  ".";

function addtoppings() {
  return " For additional toppings, you will also need " + caketoppings;
}

var bakeCake = readline.question("Do you want to bake a cake? (yes/no): ");
if (bakeCake.toLowerCase() === "yes") {
  var addToppings = readline.question(
    "Do you want to add toppings? (yes/no): "
  );
  if (addToppings.toLowerCase() === "yes") {
    cake = cakerecipe + addtoppings();
  } else {
    cake = cakerecipe;
  }
  console.log(cake);
  process.exit();
} else {
  console.log("Maybe next time!");
  process.exit();
}
