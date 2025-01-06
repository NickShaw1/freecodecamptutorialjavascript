class Person {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        if (newName.length > 0) {
            this._name = newName;
        }
        else {
            console.error("New name must not be empty");
        }
    }
}

const person = new Person("Jim");

console.log(person.name);

person.name = "Bob";
console.log(person.name);

person.name = "";






