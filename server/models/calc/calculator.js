class Calculator {
  constructor() {}

  addiction(value1, value2) {
    return value1 + value2;
  }

  subtraction(value1, value2) {
    return value1 - value2;
  }

  multiplication(value1, value2) {
    return value1 * value2;
  }

  division(value1, value2) {
    if (value2 === 0) return "Error"
    return value1 / value2;
  }

  equal(value1, value2, operator) {
    switch (operator) {
      case '+':
        return this.addiction(value1, value2);
      case '-':
        return this.subtraction(value1, value2);
      case '*':
        return this.multiplication(value1, value2);
      case '/':
        return this.division(value1, value2);
      case 'C':
        return this.clear();
    }
  }

  clear() {
    return 0;
  }
}

module.exports = Calculator;
