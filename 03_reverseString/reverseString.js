const reverseString = function (str) {
  let results = "";

  for (i = str.length - 1; i >= 0; i--) {
    results += str.charAt(i);
  }

  return results;
};

// Do not edit below this line
module.exports = reverseString;
