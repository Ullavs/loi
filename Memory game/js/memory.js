"use strict";

// Een array met alle unieke memorykaartjes
const uniqueCardArray = [
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
// Stopt DOM select element 'field-size' in een variabele voor gebruik in JavaScript.
const fieldSize = document.getElementById("field-size");
// Stopt DOM element 'field' in een variabele voor gebruik in JavaScript.
const field = document.getElementById("field");

// Class die de properties van een individuele card bij zich houdt
class Card {
  constructor(card1, card2 = card1, set = card1, sound = card1) {
    this.card1 = card1;
    this.card2 = card2;
    this.set = set;
    this.sound = sound;
  }
}

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

// Functie die wordt aangeroepen bij het selecteren van de grootte van het speelveld
function onSelectFieldSize(event) {
  // De waarde van het gekozen speelveld wordt in een variabele gezet
  const size = event.target.value;
  // De variabele size wordt gebruikt om de variabele boardClass aan te passen n.a.v. geselecteerde waarde
  const boardClass = `board${size}`;

  // Het aantal individuele kaartjes wordt bepaald met onderstaande ternary
  const individualCardsAmount = size === "4" ? 8 : size === "5" ? 12 : 18;

  // De array met kaartjes wordt geshuffled
  const shuffledDeck = shuffle(uniqueCardArray);

  // Er worden x aantal (individualCardsAmount) kaartjes uit het geschudde array van kaartjes gepakt
  const pickedIndividualCards = shuffledDeck.slice(0, individualCardsAmount);

  // Middels de methode .concat wordt de array van memorykaartjes verdubbeld.
  const myDoubleCardArray = pickedIndividualCards.concat(pickedIndividualCards);
  // Hierbij wordt de functie shuffle aangeroepen om de verdubbelde array te shuffelen
  const shuffledCards = shuffle(myDoubleCardArray);

  // Hierbij wordt voor elke kaart in de set een 'card object' geïnitieerd
  const cardSet = shuffledCards.map((card) => new Card(card));

  // Hiermee  wordt 'populateField' aangeroepen waardoor de memory kaarten worden getoond, hiermee geven we als parameters 'boardClass' en 'cardSet' mee
  populateField(boardClass, cardSet);
}

// Deze functie zorgt ervoor dat voor elke kaart in de kaartset elementen worden gecreëerd in HTML en vervolgens wordt dit toegevoegd aan het veld
function populateField(boardClass, cardSet) {
  // Speelveld leeghalen door de inhoud van de div te verwijderen
  field.innerHTML = "";
  // Aan het speelveld wordt n.a.v. grootte juiste class toegevoegd
  field.className = boardClass;

  // Een nieuw speelveld wordt per kaartje neergelegd
  cardSet.forEach((card) => {
    // Nieuw div element
    let newTile = document.createElement("div");

    // Nieuw img element met src en name van memorykaartje
    let newCard = document.createElement("img");
    let imageURL = `img/${card.card1}.jpg`;
    newCard.setAttribute("src", imageURL);
    newCard.setAttribute("name", card.card1);

    // Nieuw img element met src van de cover
    let cover = document.createElement("img");
    cover.setAttribute("src", "img/cover.png");
    cover.classList.add("covered");

    // Voegt de twee plaatjes aan de nieuwe tile
    newTile.appendChild(newCard);
    newTile.appendChild(cover);

    // Voegt tile toe aan field
    field.appendChild(newTile);
  });
}

// Functie die wordt aangeroepen op het moment dat er wordt geklikt op een kaartje, de 'naam' wordt getoond in de console
function onClickCard(event) {
  const clickedCard = event.target;

  // Als aangeklikte kaartje de class 'covered' heeft, wordt dit veranderd naar 'uncovered'; als je klikt op een kaartje met 'uncovered', wordt dit veranderd naar 'covered'
  if (clickedCard.classList.contains("covered")) {
    clickedCard.classList.replace("covered", "uncovered");
  } else if (clickedCard.classList.contains("uncovered")) {
    clickedCard.classList.replace("uncovered", "covered");
  }
}

// Voegt een EventListener toe aan het DOM element (fieldSize) en roept functie 'onSelectFieldSize' aan
fieldSize.addEventListener("change", onSelectFieldSize);

// Voegt een EventListener toe aan het DOM element (myField) en roept functie 'onClickCard' aan
field.addEventListener("click", onClickCard);
