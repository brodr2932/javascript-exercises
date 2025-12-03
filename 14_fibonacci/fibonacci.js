const fibonacci = function(n) {
  let fibArray = [1, 1]; // starting Fibonacci sequence 
  i = 0;

  while (i < 23) { // generate the first 23 numbers in Fibonacci sequence
    let sumOfPrevTwo = fibArray[i] + fibArray[i + 1];
    fibArray.push(sumOfPrevTwo);
    i++;
  }

  let position = parseInt(n); // convert to number, in case input is a string

  if (position === 0) {
    return 0;
  } else if (position < 0) {
    return "OOPS";
  } else {
    return fibArray[position - 1]; // subtract 1 from n due to zero-based indexing
  }
};

// Do not edit below this line
module.exports = fibonacci;
