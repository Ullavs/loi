window.alert("Pagina geladen");
let myName = prompt("Please enter your name");
let check = confirm(`Uw naam is ${myName}, is dit correct?`);

if (check) {
  document.body.innerHTML = `Welkom ${myName}`;
} else {
  prompt("Please enter your name");
}
