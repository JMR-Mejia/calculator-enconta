"use strict";

/**
 * The calculator Object
 */
class Calculator {
  constructor() {}

  /**
   * addiction, sum two values
   * 
   * @param {number} value1 
   * @param {number} value2
   * @return {number}
   */
  
  addiction(value1, value2) {
    return value1 + value2;
  }

  /**
   * subtraction, subtract two values
   * 
   * @param {number} value1 
   * @param {number} value2
   * @return {number}
   */
  
  subtraction(value1, value2) {
    return value1 - value2;
  }
  
  /**
   * Multiplication, multiply two values
   * 
   * @param {number} value1 
   * @param {number} value2
   * @return {number}
   */
  
  multiplication(value1, value2) {
    return value1 * value2;
  }
  
  /**
   * Divison, divide two values
   * 
   * @param {number} value1 
   * @param {number} value2
   * @return {number}
   */
  
  division(value1, value2) {
    if (value2 === 0) return "Error";
    return value1 / value2;
  }

/**
 * Repeat the last operation with your result
 * @param {number} value1 
 * @param {string} operator - +,-,*,/,C
 * @return {number}
 */

  equal(value1, operator) {
    switch (operator) {
      case "+":
        return this.addiction(value1, value1);
      case "-":
        return this.subtraction(value1, value1);
      case "*":
        return this.multiplication(value1, value1);
      case "/":
        return this.division(value1, value1);
      case "C":
        return this.clear();
    }
  }

  /**
   * return 0 in the CLI
   * 
   * @return {number}
   */

  clear() {
    return 0;
  }
}

module.exports = Calculator;
