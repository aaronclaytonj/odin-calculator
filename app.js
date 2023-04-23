const numberBtns = document.querySelectorAll(".number");
const screen = document.querySelector(".screen");
const clearBtn = document.querySelector(".clear");
const operationBtns = document.querySelectorAll(".operation");
const calculateBtn = document.querySelector(".calculate");

let shouldReset = false;
let currOperator = "";
let firstOperand = "";
let lastRes = "";

numberBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    updateDisplay(e.target.textContent);
  });
});

clearBtn.addEventListener("click", function () {
  clear();
});

calculateBtn.addEventListener("click", function () {
  console.log("calculate");
  if (firstOperand != "" && currOperator != "") {
    lastRes = operate(firstOperand, screen.textContent, currOperator);
    screen.textContent = lastRes;
    shouldReset = true;
    currOperator = "";
  }
});

operationBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    setOperator(e.target.textContent);
  });
});

let setOperator = (operator) => {
  if (currOperator != "") return;
  shouldReset = true;
  currOperator = operator;
  firstOperand = screen.textContent;
};

let clear = () => {
  screen.textContent = "0";
};

let updateDisplay = (text) => {
  if (screen.textContent == "0" || shouldReset) {
    resetScreen();
  }
  screen.textContent += text;
};

let resetScreen = () => {
  screen.textContent = "";
  shouldReset = false;
};

let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let divide = (a, b) => a / b;
let multiply = (a, b) => a * b;

let operate = (op1, op2, operand) => {
  op1 = parseInt(op1);
  op2 = parseInt(op2);
  if (operand == "+") {
    return add(op1, op2);
  }

  if (operand == "-") {
    return subtract(op1, op2);
  }

  if (operand == "*") {
    return multiply(op1, op2);
  }

  if (operand == "/") {
    return divide(op1, op2);
  }
};
