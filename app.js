const numberBtns = document.querySelectorAll(".number");
const screen = document.querySelector(".screen");
const clearBtn = document.querySelector(".clear");
const operationBtns = document.querySelectorAll(".operation");
const calculateBtn = document.querySelector(".calculate");
const decimalBtn = document.querySelector(".decimal");

let shouldReset = false;
let currOperator = "";
let firstOperand = "";
let secondOperand = "";
let lastRes = 0;

decimalBtn.addEventListener("click", appendPoint);

numberBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    updateDisplay(e.target);
  });
});

clearBtn.addEventListener("click", function () {
  clear();
});

calculateBtn.addEventListener("click", function () {
  evaluate();
});

operationBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    setOperator(e.target.textContent);
  });
});

let setOperator = (operator) => {
  if (currOperator != "") evaluate();

  shouldReset = true;
  currOperator = operator;
  firstOperand = screen.textContent;
};

let evaluate = () => {
  if (currOperator == "" || shouldReset) return;
  if (currOperator == "/" && screen.textContent == "0") {
    alert("opps cant divide by 0");
    clear();
    return;
  }
  secondOperand = screen.textContent;
  screen.textContent = operate(firstOperand, secondOperand, currOperator);
  currOperator = "";
  shouldReset = true;
};

let clear = () => {
  screen.textContent = "0";
  currOperator = "";
  lastRes = 0;
  firstOperand = "";
};

function appendPoint() {
  if (shouldReset) resetScreen();
  if (screen.textContent === "") screen.textContent = "0";
  if (screen.textContent.includes(".")) return;
  screen.textContent += ".";
}

let updateDisplay = (target) => {
  if (screen.textContent == "0" || shouldReset) {
    resetScreen();
  }
  screen.textContent += target.textContent;
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
  op1 = Number(op1);
  op2 = Number(op2);
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
