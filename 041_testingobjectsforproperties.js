var myObj = {
  gift: "cat",
  pet: "Eva",
  bed: "couch",
};

function checkObj(checkProp) {
  if (myObj.hasOwnProperty(checkProp)) {
    return (
      myObj[checkProp] +
      " is a cute " +
      myObj.gift +
      " who sleeps on the " +
      myObj.bed +
      "."
    );
  } else {
    return "Not found";
  }
}

console.log(checkObj("pet"));
console.log(checkObj("car"));
