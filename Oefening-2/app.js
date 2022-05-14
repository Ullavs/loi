const myInput = document.getElementById("result");
const myOperator = document.getElementById("operator");
let previousNumber = null;
let operator = null;

const onClickNumber = (clickedNumber) => {
  if (clickedNumber === "." && myInput.value.includes(".")) {
    return;
  }

  if (clickedNumber === "0" && myInput.value === "0") {
    return;
  }

  if (clickedNumber !== "0" && clickedNumber !== "." && myInput.value === "0") {
    myInput.value = "";
  }

  if (myOperator.value) {
    clearInput();
  }

  myInput.value += clickedNumber;
};

const onClickOperator = (clickedOperator) => {
  myOperator.value = clickedOperator;

  if (previousNumber) {
    calculate();
  }

  operator = clickedOperator;
  previousNumber = Number(myInput.value);
};

const onClickEquals = () => {
  calculate();
  resetState();
};

const onClickCancel = () => {
  clearInput();
  resetState();
};

const calculate = () => {
  let currentNumber = Number(myInput.value);

  switch (operator) {
    case "+":
      myInput.value = previousNumber + currentNumber;
      break;
    case "-":
      myInput.value = previousNumber - currentNumber;
      break;
    case "x":
      myInput.value = previousNumber * currentNumber;
      break;
    case "/":
      myInput.value = previousNumber / currentNumber;
  }

  myOperator.value = "=";
};

const resetState = () => {
  operator = null;
  previousNumber = null;
};

const clearInput = () => {
  myInput.value = "";
  myOperator.value = "";
};
