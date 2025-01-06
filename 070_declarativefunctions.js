const bicycle = {
  gear: 1,
  setGear(newGear) {
    this.gear = newGear;
  },
};

bicycle.setGear(2);
console.log(bicycle.gear);
