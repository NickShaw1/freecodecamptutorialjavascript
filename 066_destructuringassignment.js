/* example 1 */
var voxel = {
  x: 3.6,
  y: 5.2,
  z: 1.4,
};

const { x: a, y: b, z: c } = voxel;

console.log(b);

/* example 2 */

const avgTemperatures = {
  today: 87.5,
  tomorrow: 96,
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";

  const { tomorrow: tempOfTomorrow } = avgTemperatures;

  return tempOfTomorrow;
}

console.log(getTempOfTmrw(avgTemperatures));

/* example 3 */

const LOCAL_FORECAST = {
  today: { min: 54, max: 87.5 },
  tomorrow: { min: 34, max: 47.5 },
};

function getMaxOfTmrw2(LOCAL_FORECAST) {
  "use strict";

  const {
    tomorrow: { max: maxOfTomorrow },
  } = LOCAL_FORECAST;

  return maxOfTomorrow;
}

console.log(getMaxOfTmrw2(LOCAL_FORECAST));

/* example 4 */

const [z, x, , y] = [1, 2, 3, 4, 5, 6];
console.log(z, x, y);

/* example 5 */

let s = 8,
  e = 6;
(() => {
  "use strict";

  [s, e] = [e, s];
})();

console.log(s);
console.log(e);

/* example 6 */

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
  const [, , ...arr] = list;

  return arr;
}

const arr = removeFirstTwo(source);

console.log(arr);
console.log(source);
