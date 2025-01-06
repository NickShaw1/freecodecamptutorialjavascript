function phoneticLookUp(val) {
  var result = "";

  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
  };

  result = lookup[val];

  return result;
}

console.log(phoneticLookUp("charlie"));
