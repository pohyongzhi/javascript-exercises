const fibonacci = function (n) {
  if (typeof n === "string") {
    n = parseInt(n);
  }

  if (n < 0) {
    return "OOPS";
  }

  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  let num1 = 1;
  let num2 = 1;

  for (let i = 1; i < n; i++) {
    let temp = num1 + num2;
    num1 = num2;
    num2 = temp;
  }

  console.log(num1);
  console.log(num2);

  return num1;
};

// Do not edit below this line
module.exports = fibonacci;
