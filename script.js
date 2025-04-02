let firstNumber, currentOperator, secondNumber;

function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
  if (secondNumber === 0) {
    return "ERROR";
  } else {
    return firstNumber / secondNumber;
  }
}

function operate(firstNumber, currentOperator, secondNumber) {
  if (currentOperator === "+") {
    return add(firstNumber, secondNumber);
  } else if (currentOperator === "-") {
    return subtract(firstNumber, secondNumber);
  } else if (currentOperator === "*") {
    return multiply(firstNumber, secondNumber);
  } else if (currentOperator === "/") {
    return divide(firstNumber, secondNumber);
  }
}

// Button listeners
const digitButtons = document.querySelectorAll(".digit");
const calculatorDisplay = document.querySelector(".display");

digitButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculatorDisplay.textContent =
      calculatorDisplay.textContent + button.textContent;
  });
});

const clearButton = document.querySelector(".clear");

clearButton.addEventListener("click", () => {
  calculatorDisplay.textContent = "";
});

const operatorButton = document.querySelectorAll(".operator");

operatorButton.forEach((button) => {
  button.addEventListener("click", () => {
    firstNumber = calculatorDisplay.textContent;
    currentOperator = button.textContent;
    calculatorDisplay.textContent =
      calculatorDisplay.textContent + " " + button.textContent + " ";
  });
});

const equalsButton = document.querySelector(".enter");

equalsButton.addEventListener("click", () => {
  let displayParts = calculatorDisplay.textContent.split(currentOperator);
  secondNumber = displayParts[1].trim();
  // Convert strings to numbers
  firstNumber = parseFloat(firstNumber);
  secondNumber = parseFloat(secondNumber);
  // Call operate and show result
  calculatorDisplay.textContent = operate(
    firstNumber,
    currentOperator,
    secondNumber
  );
});
