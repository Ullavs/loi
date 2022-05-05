const myInput = document.getElementById("result");
const myOperator = document.getElementById("operator");

function onClickNumber(clickedNumber) {
  myInput.value = clickedNumber;
}

function onClickOperator(clickedOperator) {
  myOperator.value = clickedOperator;
}

function onClickCancel(clickedCancel) {
  myInput.value = "";
  myOperator.value = "";
}

function onClickEquals(clickedEquals) {
  console.log(clickedEquals);
}
