const removeFromArray = function(arr, ...vals) {

  return arr.filter(item => !vals.includes(item));

};

console.log(removeFromArray([1,2,3,4], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;
