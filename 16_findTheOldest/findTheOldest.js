const findTheOldest = function(arr) {
  const currentYear = new Date().getFullYear();

  // Calculate age for every person and sort from oldest to youngest
  const arrWithAges = arr
    .map(person => {
      const deathYear = person.yearOfDeath || currentYear;
      return {
        name: person.name,
        age: deathYear - person.yearOfBirth
      };
    })
    .sort((a, b) => b.age - a.age);

  return arrWithAges[0]; // return oldest person (first element in array)
};

// Do not edit below this line
module.exports = findTheOldest;
