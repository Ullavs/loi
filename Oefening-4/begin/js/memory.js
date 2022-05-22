"use strict";

const myField = document.getElementById("field");
myField.addEventListener("click", onClickCard);

const myCardSet = [
  "duck",
  "kitten",
  "piglet",
  "puppy",
  "calf",
  "veal",
  "lamb",
  "rooster",
  "horse",
  "mouse",
  "dog",
  "cat",
  "goose",
  "goat",
  "sheep",
  "pig",
  "cow",
  "chick",
  "hen",
];

window.onload = populateField;

function populateField() {
  myCardSet.forEach((card) => {
    let newTile = document.createElement("div");
    let newCard = document.createElement("img");
    let imageURL = `img/${card}.jpg`;
    newCard.setAttribute("src", imageURL);
    newCard.setAttribute("name", card);
    newTile.appendChild(newCard);
    newTile.classList.add("board6");
    myField.appendChild(newTile);
  });
}

function onClickCard(event) {
  const clickedCard = event.target;
  const nameclickedCard = clickedCard.getAttribute("name");
  console.log(nameclickedCard);
}
