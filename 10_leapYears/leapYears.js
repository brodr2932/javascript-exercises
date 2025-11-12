const leapYears = function(year) {
  if (!(year % 4 === 0)) {
    console.log(`NOT a leap year!`);
    return false; 
  }

  if (year % 4 === 0 && !(year % 100 === 0)) {
    console.log(`It's a leap year!`);
    return true;
  } else if (year % 4 === 0 && year % 100 === 0) {
    if (year % 400 === 0) {
      console.log(`Its a leap year!`);
      return true;
    } else {
      return false;
    }
  }


};

console.log(leapYears(2000));

// Do not edit below this line
module.exports = leapYears;
