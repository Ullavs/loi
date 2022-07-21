// 12. Highscore per soort spel
// xx. Einde spel definieren + opnieuw kunnen starten
// xx. Per nieuw spel --> nieuw scoreboard
// 13. Refactor
// 14. Polish
// 15. Comment
// - Tips: onClickCard(), evaluateMatch(),
// keepScore(), nextMove(), resetGame()

"use strict";

// Stopt verscheidene DOM elementen in een variabele voor gebruik in JavaScript.
const fieldSize = document.getElementById("field-size");
const field = document.getElementById("field");
const totalAttempts = document.querySelector(".total-attempts");
const successfulAttempts = document.querySelector(".successful-attempts");
const playTime = document.querySelector(".play-time");
const bestScore = document.querySelector(".highscore");

// Een array met alle unieke memorykaartjes
let uniqueCardArray = [];

fetch("js/cards.json")
  .then((response) => response.json())
  .then((data) => {
    uniqueCardArray = data.map((card) => new Card(card));
  });

// Class die de properties van een individuele card bij zich houdt
class Card {
  constructor(cardObject) {
    this.card1 = cardObject.card1;
    this.sound = `snd/${cardObject.card1}.wav`;
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

let timer = 0;
let resetTimer = null;

// Functie die wordt aangeroepen bij het selecteren van de grootte van het speelveld
function onSelectFieldSize(event) {
  clearInterval(resetTimer);
  timer = 0;
  clicks = 0;
  matches = 0;

  // De waarde van het gekozen speelveld wordt in een variabele gezet
  const size = event.target.value;
  // De variabele size wordt gebruikt om de variabele boardClass aan te passen n.a.v. geselecteerde waarde
  const boardClass = `board${size}`;

  // De array met kaartjes wordt geshuffled
  const shuffledDeck = shuffle(uniqueCardArray);

  // Het aantal individuele kaartjes wordt bepaald met onderstaande ternary
  const individualCardsAmount = size === "4" ? 8 : size === "5" ? 12 : 18;

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

  resetTimer = setInterval(() => {
    timer++;

    const seconds = (timer % 60).toString().padStart(2, "0");
    const minutes = (timer - seconds) / 60;

    playTime.textContent = `${minutes}:${seconds}`;
  }, 1000);
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
    newTile.setAttribute("name", card.card1);
    newTile.classList.add("tile");

    // Nieuw audio element
    let audio = document.createElement("audio");
    audio.setAttribute("src", card.sound);

    // Nieuw img element met src en name van memorykaartje
    let newCard = document.createElement("img");
    let imageURL = `img/${card.card1}.jpg`;
    newCard.setAttribute("src", imageURL);

    // Nieuw img element met src van de cover
    let cover = document.createElement("img");
    cover.setAttribute("src", "img/cover.png");
    cover.classList.add("cover");

    // Voegt de twee plaatjes en de audio aan de nieuwe tile
    newTile.appendChild(newCard);
    newTile.appendChild(cover);
    newTile.appendChild(audio);

    // Voegt tile toe aan field
    field.appendChild(newTile);
  });
}

let activeCards = [];
let clicks = 0;
let matches = 0;

// Functie die wordt aangeroepen op het moment dat er wordt geklikt op een kaartje, de 'naam' wordt getoond in de console
function onClickCard(event) {
  const clickedCard = event.target;

  if (!clickedCard.classList.contains("tile")) {
    return;
  }

  if (clickedCard.classList.contains("match")) {
    return;
  }

  if (clickedCard.classList.contains("uncovered")) {
    return;
  }

  if (activeCards.length === 2) {
    return;
  }

  clicks++;
  totalAttempts.textContent = Math.floor(clicks / 2);

  const nameClickedCard = clickedCard.getAttribute("name");

  const cardSound = clickedCard.querySelector("audio");
  cardSound.play();

  activeCards.push(nameClickedCard);

  // Als aangeklikte kaartje de class 'covered' heeft, wordt dit veranderd naar 'uncovered'; als je klikt op een kaartje met 'uncovered', wordt dit veranderd naar 'covered'
  if (!clickedCard.classList.contains("uncovered")) {
    clickedCard.classList.add("uncovered");
  } else if (clickedCard.classList.contains("uncovered")) {
    clickedCard.classList.remove("uncovered");
  }

  if (activeCards[0] === activeCards[1]) {
    const matchedCards = document.querySelectorAll(".uncovered");
    matches++;
    matchedCards.forEach((matchedCard) => {
      matchedCard.classList.add("match");
    });

    const tiles = document.querySelectorAll(".tile");
    const finishedMatch = [...tiles].every((tile) => {
      return tile.classList.contains("match");
    });

    if (finishedMatch) {
      clearInterval(resetTimer);
      const seconds = (timer % 60).toString().padStart(2, "0");
      const minutes = (timer - seconds) / 60;

      const highscore = localStorage.getItem("highscore");
      if (!highscore || Number(highscore) > timer) {
        localStorage.setItem("highscore", timer);
        bestScore.textContent = `${minutes}:${seconds}`;
        alert(
          `Gefeliciteerd ${namePlayer}, je hebt een nieuw persoonlijk record gezet: ${minutes}:${seconds}!`
        );
      } else {
        alert(
          `Goed gedaan ${namePlayer}, helaas geen nieuw persoonlijk record!`
        );
      }
    }

    activeCards = [];
  }

  successfulAttempts.textContent = matches;

  if (activeCards.length === 2) {
    setTimeout(() => {
      activeCards = [];
      const openCards = document.querySelectorAll(".uncovered");
      openCards.forEach((openCard) => {
        openCard.classList.remove("uncovered");
      });
    }, 1000);
  }
}

// Voegt een EventListener toe aan het DOM element (fieldSize) en roept functie 'onSelectFieldSize' aan
fieldSize.addEventListener("change", onSelectFieldSize);

// Voegt een EventListener toe aan het DOM element (myField) en roept functie 'onClickCard' aan
field.addEventListener("click", onClickCard);

let namePlayer = localStorage.getItem("name");
const highscore = localStorage.getItem("highscore");
if (highscore) {
  const seconds = (highscore % 60).toString().padStart(2, "0");
  const minutes = (highscore - seconds) / 60;

  bestScore.textContent = `${minutes}:${seconds}`;
}

if (!namePlayer) {
  namePlayer = prompt("Wat is je naam?");
  localStorage.setItem("name", namePlayer);
}

if (namePlayer) {
  alert(`Hoi ${namePlayer}, veel plezier met je potje memory`);
}
