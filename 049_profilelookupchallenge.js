var contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "123",
    likes: ["pizza", "coding", "cake"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "121",
    likes: ["hagrid", "magic", "hogwarts"],
  },
  {
    firstName: "Nick",
    lastName: "Shaw",
    number: "144",
    likes: ["Christmas", "coding", "cats"],
  },
];

function lookUpProfile(name, prop) {
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      return contacts[i][prop] || "No such property";
    }
  }
  return "No such contact";
}

console.log(lookUpProfile("Akira", "likes"));
