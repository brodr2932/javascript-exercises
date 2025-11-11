const sumAll = function(num1, num2) {
  let count = 0;

  while (num1 <= num2) {
    count += num1;
    num1++;
  }

  return count;
};

console.log(sumAll(1, 4))

// Do not edit below this line
module.exports = sumAll;
