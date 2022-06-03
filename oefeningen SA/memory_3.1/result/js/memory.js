"use strict";

class Card {
	constructor(card1, card2 = card1, set = card1, sound = card1) {
		this.card1 = card1;
		this.card2 = card2;
		this.set = set;
		this.sound = sound;
	}
}

// alternatief:
// class Card {
// 	constructor(card1, card2=undefined, set=undefined, sound=undefined){
// 		this.card1 = card1;
// 		this.card2 = (card2) ? card2 : card1;
// 		this.set = (set) ? set : card1;
// 		this.sound = (sound) ? sound : card1;
// 	}
// }

const myField = document.getElementById("field");
myField.addEventListener("click", onClickCard);
const myCardArray = ["duck", "kitten", "piglet", "puppy", "calf", "veal", "lamb", "rooster", "horse", "mouse", "dog", "cat", "goose", "goat", "sheep", "pig", "cow", "chick", "hen"];
let myDblCardArray = myCardArray;
myDblCardArray = myDblCardArray.concat(myCardArray);
myDblCardArray = shuffle(myDblCardArray);
const myCardSet = myDblCardArray.map(card => new Card(card));

function shuffle(array) {
	var m = array.length, t, i;

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

document.onload = populateField();

function populateField() {
	myField.innerHTML = "";
	myCardSet.forEach(card => {
		let newTile = document.createElement("div");
		let newCard = document.createElement("img");
		let cover = document.createElement("img");
		newTile.setAttribute("class", "board6");
		let imageURL = "img/" + card.card1 + ".jpg";
		newCard.setAttribute("src", imageURL);
		cover.setAttribute("src", "img/cover.png");
		cover.setAttribute("class", "covered");
		newCard.setAttribute("name", card.card1);
		newTile.appendChild(newCard);
		newTile.appendChild(cover);
		myField.appendChild(newTile);
	});
}

function onClickCard(e) {

	if (e.target.className === "covered") {
		e.target.className = "uncovered";
		console.log(e.target.parentNode.firstChild.getAttribute("name"));
	}


}