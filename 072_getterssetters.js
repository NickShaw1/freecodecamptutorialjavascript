/* example 1 */
var writer;

class Book {
  constructor(author) {
    this._author = author;
  }
  get writer() {
    return this._author;
  }

  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}

/* example 2 */

function makeClass() {
  class Thermostat {
    constructor(temp) {
      this._temp = (5 / 9) * (temp - 32);
    }

    get temperature() {
      return this._temp;
    }

    set temperature(updatedTemp) {
      this._temp = updatedTemp;
    }
  }

  return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(75);
let temp = thermos.temperature;
console.log(temp);
