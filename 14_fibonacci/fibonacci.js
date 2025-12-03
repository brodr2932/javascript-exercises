const fibonacci = function() {

  let fibArray = [1, 1]; // starting Fibonacci sequence 
  i = 0;

  while (i < 23) { // generate the first 23 numbers in Fibonacci sequence
    let sumOfPrevTwo = fibArray[i] + fibArray[i + 1];
    fibArray.push(sumOfPrevTwo);
    i++;
  }

  return fibArray;
};


console.table(fibonacci())




// Do not edit below this line
module.exports = fibonacci;
