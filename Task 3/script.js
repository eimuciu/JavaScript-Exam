/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" reikšmė ir "avatar_url" paveiklslėlis (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

async function getUsers() {
  const request = await fetch(ENDPOINT);
  const responseData = await request.json();
  return responseData;
}

function userCard(userObj) {
  const { login, avatar_url } = userObj;
  return `
<div class="userCard-container">
  <div class=userImg-container>
    <img src=${avatar_url} alt="avatar" />
  </div>
  <h2>${login}</h2>
</div>`;
}

function paintToDOM(users) {
  const outputContainer = document.getElementById("output");
  outputContainer.innerHTML = "";
  users.forEach((element) => {
    outputContainer.innerHTML += userCard(element);
  });
}

function listenToButton() {
  const btn = document.getElementById("btn");
  btn.addEventListener("click", () => {
    getUsers().then((data) => {
      paintToDOM(data);
    });
  });
}

// CALL STACK
listenToButton();
