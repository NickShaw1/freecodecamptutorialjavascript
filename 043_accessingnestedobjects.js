var myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};

var passengerSeatObjects = myStorage.car.inside["passenger seat"];

console.log(passengerSeatObjects);
