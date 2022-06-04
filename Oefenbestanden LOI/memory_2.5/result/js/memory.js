"use strict";

class Card {
	constructor(card1, card2=card1, set=card1, sound=card1){
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

const myCardSet = myCardArray.map(card => new Card(card));
document.onload = populateField();


function populateField() {
	myField.innerHTML = "";
	myCardSet.forEach(card => {
		let newTile = document.createElement("div");
		let newCard = document.createElement("img");
		newTile.setAttribute("class", "board6");
		let imageURL = "img/" + card.card1 + ".jpg";
		newCard.setAttribute("src", imageURL);
		newCard.setAttribute("name", card.card1);
		newTile.appendChild(newCard);
		myField.appendChild(newTile);
	});
}

function onClickCard(e) {
	console.log(e.target.getAttribute("name"));
}

