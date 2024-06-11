const repeatString = function (str, n) {
  if (n < 0) {
    return "ERROR";
  }

  let results = "";

  for (i = 0; i < n; i++) {
    results += str;
  }

  return results;
};

// Do not edit below this line
module.exports = repeatString;
