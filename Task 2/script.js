/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
const add = (function () {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
})();

function listenToButton() {
  const button = document.getElementById("btn__element");
  const state = document.getElementById("btn__state");
  button.addEventListener("click", () => {
    state.textContent = add();
  });
}

// CALL STACK
listenToButton();
