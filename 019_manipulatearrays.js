//append data to the end of the array
var myArray = ["Apple", "Pizza", "Cake", "Bananas"];
myArray.push("Chocolate");

console.log(myArray);

//drop data from the end of an array
var anotherArray = ["Cake", "Chocolate", "Apple"];
anotherArray.pop();

console.log(anotherArray);

//add an element at the start of the array
var unshiftArray = [2, 3, 4, 5];
unshiftArray.unshift(1);

console.log(unshiftArray);

//remove first data element from an array
var removeElement = [1, 2, 3, 4, 5];
removeElement.shift();

console.log(removeElement);
