"use strict";

// Functie om een array random te ordenen (volgens de Fisher-Yates methode: https://bost.ocks.org/mike/shuffle/)
function shuffle(array) {
  var m = array.length,
    t,
    i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

// Een array met alle unieke memorykaartjes
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

// Functie die wordt aangeroepen op het moment dat er wordt geklikt op een kaartje, de 'naam' wordt getoond in de console.
function onClickCard(event) {
  const clickedCard = event.target;
  const nameclickedCard = clickedCard.getAttribute("name");
  console.log(nameclickedCard);
}

// Stopt DOM element 'field' in een variabele voor gebruik in JavaScript.
const myField = document.getElementById("field");

//Voegt een EventListener toe aan het DOM element (myField) en roept functie 'onClickCard' aan.
myField.addEventListener("click", onClickCard);

//Middels de methode .concat wordt de array verdubbeld.
const myDoubleCardArray = myCardArray.concat(myCardArray);

// Hierbij wordt de functie shuffle aangeroepen om de verdubbelde array te shuffelen, dit wordt vervolgens in een constante genaamd 'shuffledCards' gedaan.
const shuffledCards = shuffle(myDoubleCardArray);

// Hier wordt een class aangemaakt om zodoende verderop over de array te mappen en meerdere cards te creeren met meerdere kenmerken.
class Card {
  constructor(card1, card2 = card1, set = card1, sound = card1) {
    this.card1 = card1;
    this.card2 = card2;
    this.set = set;
    this.sound = sound;
  }
}

// Hierbij wordt voor elke kaart in de set een 'card object' geïnitieerd
const myCardSet = shuffledCards.map((card) => new Card(card));
console.log(myCardSet);

// Deze functie zorgt ervoor dat voor elke kaart in de kaartset elementen worden gecreëerd in HTML en vervolgens wordt dit toegevoegd aan het veld
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

// Hiermee wordt bij het laden van de pagina de functie 'populateField' aangeroepen waardoor de memory kaarten worden getoond
window.onload = populateField;
