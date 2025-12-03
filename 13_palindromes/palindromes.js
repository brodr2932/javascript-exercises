const palindromes = function (str) {
  // Clean string to remove special characters and whitespaces
  const cleanedStr = str.replace(/[!,.?\s]/g, "").toLowerCase();
  // Compare cleaned string to reverse of itself
  return cleanedStr === cleanedStr.split('').reverse().join('');
};


// Do not edit below this line
module.exports = palindromes;
