const repeatString = function(string, num) {
  if (num < 0) return "ERROR";

  let arr = [];

  while (arr.length < num) {
    arr.push(string);
  }

  return arr.join('');
};

console.log(repeatString('hey', 3));

// Do not edit below this line
module.exports = repeatString;
