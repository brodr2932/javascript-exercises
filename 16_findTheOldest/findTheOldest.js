const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]

const findTheOldest = function(arr) {
  const arrWithAges = arr
    .map(person => ({
      name: person.name,
      age: person.yearOfDeath - person.yearOfBirth
    }))
    .sort((a, b) => b.age - a.age);

  return arrWithAges[0];
};


console.log(findTheOldest(people).name)




// Do not edit below this line
module.exports = findTheOldest;
