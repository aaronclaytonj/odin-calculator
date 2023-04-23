let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let divide = (a, b) => a / b;
let multiply = (a, b) => a * b;

let operandOne, operandTwo, operand;

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