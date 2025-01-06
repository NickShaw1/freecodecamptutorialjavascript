function wordBlanks(myNoun, myAdj, myVerb, myAdv) {
  var result = "";
  result += "The " + myAdj + " " + myNoun + " " + myVerb + " dreamies " + myAdv;
  return result;
}

console.log(wordBlanks("cat", "black", "ate", "quickly"));
