function add(num, num2) {
  return num + num2;
}

function subtract(num, num2) {
  return num - num2;
}

function multiply(num, num2) {
  return num * num2;
}

function divide(num, num2) {
  if (num2 === 0) {
    return "ERROR";
  } else {
    return num / num2;
  }
}

function operate(num1, operator, num2) {
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "*") {
    return multiply(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  }
}
