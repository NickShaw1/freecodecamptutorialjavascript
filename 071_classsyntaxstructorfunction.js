/* before */
var SpaceShuttle = function (targetPlanet) {
  this.targetPlanet = targetPlanet;
};

var zeus = new SpaceShuttle("Jupiter");

console.log(zeus.targetPlanet);

/* before */

class SpaceShuttle2 {
  constructor(targetPlanet2) {
    this.targetPlanet2 = targetPlanet2;
  }
}

var zeus2 = new SpaceShuttle2("Jupiter");

console.log(zeus2.targetPlanet2);
