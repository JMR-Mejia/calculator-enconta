const { calculator } = require("../../models");

function addiction(value1, value2) {
  return calculator.addiction(value1, value2);
}

function subtraction(value1, value2) {
  return calculator.subtraction(value1, value2);
}

function multiplication(value1, value2) {
  return calculator.multiplication(value1, value2);
}

function division(value1, value2) {
  return calculator.division(value1, value2);
}

function equal(value1, value2, operator) {
  return calculator.equal(value1, value2, operator);
}

function clear() {
  return calculator.clear();
}

module.exports = {
  addiction,
  subtraction,
  multiplication,
  division,
  equal,
  clear,
};
