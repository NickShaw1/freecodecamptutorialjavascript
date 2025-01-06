/*before*/
const createPerson = (name, age, gender) => {
  return {
    name: name,
    age: age,
    gender: gender,
  };
};

console.log(createPerson("Nick", 901, "male"));

/*after*/
const createPerson2 = (name, age, gender) => ({ name, age, gender });

console.log(createPerson2("Nick", 901, "male"));
