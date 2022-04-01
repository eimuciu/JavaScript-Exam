/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

function isNumber(value) {
  return !isNaN(value);
}

function kgToLb(kg) {
  return kg * 2.2046;
}
function kgToGrams(kg) {
  return kg / 0.001;
}
function kgToOz(kg) {
  return kg * 35.274;
}

function paintValue(text) {
  const h2El = document.createElement("h2");
  h2El.style.textAlign = "center";
  h2El.textContent = text;
  return h2El;
}

function paintToDOM(kilograms) {
  const outputContainer = document.getElementById("output");
  outputContainer.innerHTML = "";
  outputContainer.append(paintValue(`Pounds: ${kgToLb(kilograms)} lb`));
  outputContainer.append(paintValue(`Grams: ${kgToGrams(kilograms)} g`));
  outputContainer.append(paintValue(`Ounces: ${kgToOz(kilograms)} oz`));
}

function listenToForm() {
  const form = document.forms[0];
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Gets input value and converts that input value to number
    const kilogramsInput = Number(e.target.elements.search.value);
    // Checks if converted input value is actually a number
    if (!isNumber(kilogramsInput)) {
      alert("Please enter a number!");
      form.reset();
    } else if (kilogramsInput < 0) {
      alert("Negative values not permitted!");
      form.reset();
    } else {
      paintToDOM(kilogramsInput);
    }
  });
}

// CALL STACK
listenToForm();
// paintToDOM(0);
