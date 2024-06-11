const removeFromArray = function (arr, ...targets) {
  let resultsArr = [];

  for (i = 0; i < arr.length; i++) {
    let n = arr[i];

    let targetExist = false;

    for (targetIndex = 0; targetIndex < targets.length; targetIndex++) {
      let currTarget = targets[targetIndex];

      if (n === currTarget) {
        targetExist = true;
      }
    }

    if (!targetExist) {
      resultsArr.push(n);
    }
  }

  return resultsArr;
};

// Do not edit below this line
module.exports = removeFromArray;
