/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją showObjectKeys, kuri kaip argumentą priims objectą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: "audi",
  model: "A6",
  year: 2005,
  color: "white",
};

function showObjectKeys(obj) {
  return Object.keys(obj);
}

function showObjectKeys2(obj) {
  const objKeys = [];
  for (let key in obj) {
    objKeys.push(key);
  }
  return objKeys;
}
