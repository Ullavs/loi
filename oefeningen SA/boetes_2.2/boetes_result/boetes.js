'use strict'
document.getElementById("mySlider").oninput = checkSliderValue;
const output = document.getElementById("output");
const feedback = document.getElementById("feedback");
const boetebalk = document.getElementById("boetebalk");
const boetekop = document.getElementById("boetekop");
const boetebedrag = document.getElementById("boetebedrag");
const staffeltabel = document.getElementById("staffeltabel");
const staffelArray = [28, 35, 43, 49, 56, 64, 72, 98, 107, 118, 127, 137, 147, 158, 170, 181, 194, 207, 221, 235, 247, 263, 277, 295, 309, 325]

let staffeltext = "<tr><th>Te hard (km)</th><th>Boetebedrag</th></tr>";
for (let i = 0; i < staffelArray.length; i++) {
    staffeltext += "<tr>"
    staffeltext += "<td>"+ (i+4) + "</td><td>&euro; "+ staffelArray[i] + ",-</td>";
    staffeltext += "</tr>"
}
staffeltabel.innerHTML = staffeltext;

function checkSliderValue(e) {
    let snelheid = e.target.value;
    let corrSnelheid = Math.max(snelheid - 53, 0);
    output.value = snelheid;
    feedback.style.visibility = "visible";
    if (snelheid < 51) {
        feedback.innerHTML = "Keurig, houden zo!";
        feedback.style.backgroundColor = "green";
        boetebalk.style.visibility = "hidden";
        boetekop.style.visibility = "hidden";
    }
    else if (snelheid > 50 && snelheid < 80) {
        feedback.innerHTML = "U rijdt harder dan toegestaan, u riskeert een boete!";
        feedback.style.backgroundColor = "orange";

    }
    else {
        feedback.innerHTML = "U rijdt veel te hard, u riskeert een strafzaak, in beslag legging van uw voertuig en ontzegging van uw rijbevoegheid!";
        feedback.style.backgroundColor = "red";
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
        default:
            {
                bedrag = 0;
                if (corrSnelheid > 29) {
                    bedrag = 325;
                }

            }

    }
    if(bedrag > 0) {
        bedrag += 9;
        boetebalk.style.visibility = "visible";
        boetekop.style.visibility = "visible"; 
    }
    boetebalk.style.width = bedrag * 3 + "px";
    boetebedrag.innerHTML = "&euro; " + bedrag;


}