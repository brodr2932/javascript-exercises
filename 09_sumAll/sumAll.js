const sumAll = function(num1, num2) {
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR"
  if (num1 < 0 || num2 < 0) return "ERROR";
  if (num1 > num2) [num1, num2] = [num2, num1];

  let sum = 0;

  while (num1 <= num2) {
    sum += num1;
    num1++;
  }

  return sum;
};

console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
