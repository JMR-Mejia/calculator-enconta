const store = require("./store");

let operators = ["+", "-", "*", "/", "=", "C"];

function addiction(value1, value2) {
  return new Promise((resolve, reject) => {
    if (value1 === undefined || value2 === undefined) {
      return reject({ e: "", code: 400, message: "Falta valores" });
    }
    if (Number.isFinite(value1) === false || Number.isFinite(value2) === false || isNaN(value1) || isNaN(value2))
      reject({ e: "", code: 400, message: "Debe ser un numero" });

    resolve(store.addiction(value1, value2));
  });
}

function subtraction(value1, value2) {
  return new Promise((resolve, reject) => {
    if (value1 === undefined || value2 === undefined) {
      return reject({ e: "", code: 400, message: "Falta valores" });
    }
    if (Number.isFinite(value1) === false || Number.isFinite(value2) === false || isNaN(value1) || isNaN(value2))
      reject({ e: "", code: 400, message: "Debe ser un numero" });

    resolve(store.subtraction(value1, value2));
  });
}

function multiplication(value1, value2) {
  return new Promise((resolve, reject) => {
    if (value1 === undefined || value2 === undefined) {
      return reject({ e: "", code: 400, message: "Falta valores" });
    }
    if (Number.isFinite(value1) === false || Number.isFinite(value2) === false || isNaN(value1) || isNaN(value2))
      reject({ e: "", code: 400, message: "Debe ser un numero" });

    resolve(store.multiplication(value1, value2));
  });
}

function division(value1, value2) {
  return new Promise((resolve, reject) => {
    if (value1 === undefined || value2 === undefined) {
      return reject({ e: "", code: 400, message: "Falta valores" });
    }
    if (Number.isFinite(value1) === false || Number.isFinite(value2) === false || isNaN(value1) || isNaN(value2))
      reject({ e: "", code: 400, message: "Debe ser un numero" });

    resolve(store.division(value1, value2));
  });
}

function equal(value, operator) {
  return new Promise((resolve, reject) => {
    if (value === undefined || !operator) {
      return reject({ e: "", code: 400, message: "Faltan valores" });
    }
    if (Number.isFinite(value) === false || isNaN(value))
      reject({ e: "", code: 400, message: "Debe ser un numero" });
    if (operators.includes(operator) === false)
      reject({ e: "", code: 400, message: "Operador invalido" });

    resolve(store.equal(value, operator));
  });
}

function clear() {
  return new Promise((resolve, reject) => {
    resolve(store.clear());
  });
}

module.exports = {
  addiction,
  subtraction,
  multiplication,
  division,
  equal,
  clear,
};
