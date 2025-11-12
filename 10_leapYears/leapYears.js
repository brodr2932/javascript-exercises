const leapYears = function(year) {
  if (!(year % 4 === 0)) return false; 

  if (!(year % 100 === 0)) {
    return true;
  } else if (year % 100 === 0) {
    return year % 400 === 0;
  }
};

console.log(leapYears(2000));

// Do not edit below this line
module.exports = leapYears;
