"use strict";

const calcular = require("./logic/operators");

const query = require("./console/query");
const msn = require('./console/grafic')

const operation = (async () => {
  let ANS = 0;
  let data;
  let operator = "+";
  while (operator !== "off") {
    console.clear();
    msn("Enconta-CLI");
    console.log(`${!ANS ? "0" : ANS}${operator}`);
    data = await query(ANS, operator);

    console.clear();
    msn("Enconta-CLI");
    if (isNaN(data.value)) data.value = 0;
    !ANS ? (ANS = data.value) : (ANS = calcular(ANS, operator, data.value));
    operator = "";
    
    console.log(`${!ANS ? "0" : ANS}${operator}`);
    data = await query(ANS, operator);
    operator = data.operator;
    if (operator === "=") ANS = calcular(ANS, operator);
  }
  console.log("Bye!!!");
})();
