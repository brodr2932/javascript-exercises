const fibonacci = function(n) {
  let fibArray = [1, 1]; // starting Fibonacci sequence 
  i = 0;

  while (i < 23) { // generate the first 23 numbers in Fibonacci sequence
    let sumOfPrevTwo = fibArray[i] + fibArray[i + 1];
    fibArray.push(sumOfPrevTwo);
    i++;
  }

  // return value at n in fib sequence
  return fibArray[n - 1]; // subtract 1 from n due to zero-based indexing
};


console.table(fibonacci(6));




// Do not edit below this line
module.exports = fibonacci;
