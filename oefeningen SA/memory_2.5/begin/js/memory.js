"use strict";

const myField = document.getElementById("field");
myField.addEventListener("click", onClickCard);
const myCardSet = ["duck", "kitten", "piglet", "puppy", "calf", "veal", "lamb", "rooster", "horse", "mouse", "dog", "cat", "goose", "goat", "sheep", "pig", "cow", "chick", "hen"];
document.onload = populateField();

function populateField() {
	myField.innerHTML = "";
	myCardSet.forEach(card => {
		let newTile = document.createElement("div");
		let newCard = document.createElement("img");
		newTile.setAttribute("class", "board6");
		let imageURL = "img/" + card + ".jpg";
		newCard.setAttribute("src", imageURL);
		newCard.setAttribute("name", card);
		newTile.appendChild(newCard);
		myField.appendChild(newTile);
	});
}

function onClickCard(e) {
	console.log(e.target.getAttribute("name"));
}