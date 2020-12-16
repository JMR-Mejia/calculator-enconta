"use strict";

const calcular = require("./logic/operators");

const query = require("./console/query");
const msn = require("./console/grafic");

const operation = (async () => {
  let ANS = 0;
  let data;
  let operator = {
    current: "+",
    last: "+",
  };
  while (operator.current !== "off") {
    if (operator.current !== "i") {
      console.clear();
      msn("Enconta-CLI");
      console.log(`${ANS}${operator.current}`);
      data = await query(operator.current);
      if (isNaN(data.value)) data.value = 0;
      if (operator.current !== "C") {
        ANS = await calcular(operator.current, ANS, data.value);
      } else {
        ANS = data.value;
      }

      operator.last = operator.current;
      operator.current = " ";
    }
    console.clear();
    msn("Enconta-CLI");
    console.log(`${ANS}${operator.current}`);

    data = await query(operator.current);
    operator.current = data.operator;
    if (operator.current === "=") operator.current = "i";
    if (operator.current === "i") {
      if (operator.last === "+") operator.last = "s";
      ANS = await calcular(operator.current, ANS, operator.last);
    }
    if (operator.current === "C") ANS = await calcular(operator.current);
  }
  console.log("Bye!!!");
})();
