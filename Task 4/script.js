/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

async function getCarsData() {
  const request = await fetch(ENDPOINT);
  const responseData = await request.json();
  return responseData;
}

function carCard(userObj) {
  const { brand, models } = userObj;
  return `
<tr>
    <td>${brand}</td>
    <td>${models.join(", ")}</td>
</tr>`;
}

function paintToDOM(cars) {
  const outputContainer = document.querySelector("#output table tbody");
  outputContainer.innerHTML = "";
  cars.forEach((element) => {
    outputContainer.innerHTML += carCard(element);
  });
}

// CALL STACK
getCarsData().then((data) => {
  paintToDOM(data);
});
