const myInput = document.getElementById("result");
const myOperator = document.getElementById("operator");
let firstNumber;

function onClickNumber(clickedNumber) {
  if (clickedNumber === "." && myInput.value.includes(".")) {
    return;
  }

  if (clickedNumber === "0" && myInput.value.includes("0")) {
    return;
  }

  if (myOperator.value === "=") {
    myInput.value = "";
    myOperator.value = "";
  }

  myInput.value += clickedNumber;

  // maximaal 1 "0" aan de voorkant
  // 0.1 + 0.2 oplossen
}

function onClickOperator(clickedOperator) {
  myOperator.value = clickedOperator;

  firstNumber = Number(myInput.value);
  myInput.value = "";
  console.log(firstNumber);
}

function onClickEquals(clickedEquals) {
  let secondNumber = Number(myInput.value);

  switch (myOperator.value) {
    case "+":
      myInput.value = firstNumber + secondNumber;
      myOperator.value = "=";
      break;
    case "-":
      myInput.value = firstNumber - secondNumber;
      myOperator.value = "=";
      break;
    case "x":
      myInput.value = firstNumber * secondNumber;
      myOperator.value = "=";
      break;
    case "/":
      myInput.value = firstNumber / secondNumber;
      myOperator.value = "=";
  }

  console.log(secondNumber);
}

function onClickCancel(clickedCancel) {
  myInput.value = "";
  myOperator.value = "";
}

// na operator geen "0" maar echt LEEG
// 1 + 2 + 3 doet het nog niet!!!!
// tussendoor als je + / - * doet dan al de uitslag laten zien

// Hoe evalueert u of er al een waarde in myInput staat?
// Er staat weliswaar een 0 in het display maar dit is een placeholder, géén waarde.
// De waarde in de initiële staat is "". Als dit true is, mag een nieuw getal ingevoerd worden.

// Klikken op operator --> ingevoerde cijfer opslaan --> vervolgens nieuw cijfer kunnen invoeren

// U hebt een aantal if / else if / else statements nodig
// én u moet de invoerwaarden van de berekeningen in variabelen (let) opslaan.
// Ook moet u de gekozen operator in een let opslaan.
