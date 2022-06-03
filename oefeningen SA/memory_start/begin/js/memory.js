"use strict";

// maak een const myField en koppel deze aan de div met id="field"
// Geef myField een event listener die de functie onClickCard aanroept als er op geklikt wordt

// de volgende regel krijg je vast cadeau:
const myCardSet = ["duck", "kitten", "piglet", "puppy", "calf", "veal", "lamb", "rooster", "horse", "mouse", "dog", "cat", "goose", "goat", "sheep", "pig", "cow", "chick", "hen"];

// geef het document een event listener die bij het laden van de pagina de functie populateField aanroept

// schrijf hier de nieuwe functie populateField()
// maak binnen deze nieuwe functie een for loop waarin over de array myCardSet geïtereerd wordt (Mag ook met forEach, dat is zelfs beter). 
// De volgende statements komen allemaal in de loop:
// laat met de method document.createElement() een nieuw div-element aanmaken en stop die in een nieuwe let 'newTile'
// laat  met de method document.createElement() een nieuw img-element aanmaken en stop die in een nieuwe let 'newCard'
// creëer een nieuwe let 'imageURL' en laat via concatination een relatieve verwijzing naar de afbeelding uit het array waar over geïtereerd wordt die de uiteindelijke vorm moet krijgen "url(img/naamDier.jpg)" waarbij naamDier in dit geval steeds een andere naam is uit het array.
// Ken deze imageURL via setAttribute() toe aan het src attribute van let 'newCard'.
// Ken ook de naam van het dier via setAttribute() toe aan de name attribute van de let 'newCard';
// Ken via de appendChild() method het element 'newCard' toe aan 'newTile'
// Ken via de appendChild() method het element 'newTile' toe aan 'myField'


// schrijf hier de functie onClickCard(e)
// Zorg er voor dat als deze functie wordt uitgevoerd, m.b.v. de method getAttribute() in het console de naam van het aangeklikte dier getoond wordt.
// Hint, je moet hierbij gebruik maken van de verwijzing e.target omdat je de naam van het element wilt weten waar op geklikt is, dus die het 'click' event verstuurd heeft.
