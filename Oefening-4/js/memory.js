"use strict";

class Card {
  constructor(card1, card2 = card1, set = card1, sound = card1) {
    this.card1 = card1;
    this.card2 = card2;
    this.set = set;
    this.sound = sound;
  }
}

const myField = document.getElementById("field");
myField.addEventListener("click", onClickCard);

const myCardArray = [
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

const myDoubleCardArray = myCardArray.concat(myCardArray);
console.log(myDoubleCardArray);

const myCardSet = myCardArray.map((card) => new Card(card));

window.onload = populateField;

function populateField() {
  myCardSet.forEach((card) => {
    let newTile = document.createElement("div");
    let newCard = document.createElement("img");
    let imageURL = `img/${card.card1}.jpg`;
    newCard.setAttribute("src", imageURL);
    newCard.setAttribute("name", card.card1);
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
