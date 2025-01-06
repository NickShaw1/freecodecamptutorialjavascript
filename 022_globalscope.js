var myGlobal = 10;
var oopsGlobal;

function fun1() {
  let oopsGlobal = 12;
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal + "\n";
  }
  if (typeof myGlobal != "undefined") {
    output += "oopsGlobal:" + oopsGlobal;
  }
  console.log(output);
}

fun1();

fun2();
