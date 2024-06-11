const sumAll = function (start, end) {
  if (!(typeof start === "number") || !(typeof end === "number") || start < 0) {
    return "ERROR";
  }

  let result = 0;

  //   Swap start and end if start > end
  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }

  for (let i = start; i <= end; i++) {
    result += i;
  }

  return result;
};

// Do not edit below this line
module.exports = sumAll;
