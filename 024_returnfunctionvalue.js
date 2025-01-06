function minusSeven(num) {
  return num - 7;
}

function plusFive(num) {
  return (num += 5);
}

console.log(minusSeven(23));
console.log(plusFive(10));

var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10);

console.log(changed);
