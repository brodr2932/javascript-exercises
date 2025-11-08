const removeFromArray = function(arr, val) {
  const index = arr.indexOf(val);

  arr.splice(index, 1);

  return arr;

};

console.log(removeFromArray([1,2,3], 3));

// Do not edit below this line
module.exports = removeFromArray;
