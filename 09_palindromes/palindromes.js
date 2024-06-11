const palindromes = function (str) {
  let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let reversedStr = "";

  reversedStr = cleanedStr.split("").reverse().join("");

  console.log(cleanedStr);
  console.log(reversedStr);

  return cleanedStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
