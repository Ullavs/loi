const slider = document.getElementById("mySlider");
slider.addEventListener("input", checkSliderValue);

const feedback = document.getElementById("feedback");
const boeteKop = document.getElementById("boetekop");
const boeteBalk = document.getElementById("boetebalk");
const boeteBedrag = document.getElementById("boetebedrag");
const staffelTabel = document.getElementById("staffeltabel");

const staffelArray = [
  28, 35, 43, 49, 56, 64, 72, 98, 107, 118, 127, 137, 147, 158, 170, 181, 194,
  207, 221, 235, 247, 263, 277, 295, 309, 325,
];
let staffelText =
  "<tr><th>Te hard (km), er wordt 3 km/h gecorrigeerd</th><th>Boetebedrag (excl. administratiekosten)</th></tr>";
for (let i = 0; i < staffelArray.length; i++) {
  staffelText += `<tr>`;
  staffelText += `<td>${i + 4} km</td><td>€${staffelArray[i]}</td>`;
  staffelText += `</tr>`;
}
staffelTabel.innerHTML += staffelText;

function checkSliderValue(e) {
  let snelheid = e.target.value;
  let corrSnelheid = Math.max(snelheid - 53, 0);
  console.log(corrSnelheid);
  output.value = snelheid;
  feedback.style.visibility = "visible";
  if (snelheid < 51) {
    feedback.innerHTML = "Keurig, houden zo!";
    feedback.style.backgroundColor = "green";
    boeteBalk.style.visibility = "hidden";
  } else if (snelheid < 80) {
    feedback.innerHTML =
      "Dit is te hard binnen de bebouwde kom, u riskeert een boete!";
    feedback.style.backgroundColor = "orange";
    boeteBalk.style.visibility = "visible";
  } else {
    feedback.innerHTML =
      "U riskeert een strafzaak én het in beslag nemen van uw voertuig en ontzegging van uw rijbevoegdheid!";
    feedback.style.backgroundColor = "red";
    boeteBalk.style.visibility = "visible";
  }

  let bedrag = 0;
  switch (corrSnelheid) {
    case 4:
      bedrag = 28;
      break;
    case 5:
      bedrag = 35;
      break;
    case 6:
      bedrag = 43;
      break;
    case 7:
      bedrag = 49;
      break;
    case 8:
      bedrag = 56;
      break;
    case 9:
      bedrag = 64;
      break;
    case 10:
      bedrag = 72;
      break;
    case 11:
      bedrag = 98;
      break;
    case 12:
      bedrag = 107;
      break;
    case 13:
      bedrag = 118;
      break;
    case 14:
      bedrag = 127;
      break;
    case 15:
      bedrag = 137;
      break;
    case 16:
      bedrag = 147;
      break;
    case 17:
      bedrag = 158;
      break;
    case 18:
      bedrag = 170;
      break;
    case 19:
      bedrag = 181;
      break;
    case 20:
      bedrag = 194;
      break;
    case 21:
      bedrag = 207;
      break;
    case 22:
      bedrag = 221;
      break;
    case 23:
      bedrag = 235;
      break;
    case 24:
      bedrag = 247;
      break;
    case 25:
      bedrag = 263;
      break;
    case 26:
      bedrag = 277;
      break;
    case 27:
      bedrag = 295;
      break;
    case 28:
      bedrag = 309;
      break;
    case 29:
      bedrag = 325;
      break;
    default: {
      bedrag = 0;
      if (corrSnelheid > 29) {
        bedrag = 325;
      }
    }
  }

  if (bedrag > 0) {
    bedrag += 9;
    boeteKop.style.visibility = "visible";
    boeteBalk.style.visibility = "visible";
  }
  boeteBalk.style.width = bedrag * 2 + "px";
  boeteBedrag.innerHTML = "€" + bedrag;
}
