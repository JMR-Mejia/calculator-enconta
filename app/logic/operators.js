const calcular = (ANS, operator, value) => {
  switch (operator) {
    case "+":
      return ANS + value;
    case "-":
      return ANS - value;
    case "*":
      return ANS * value;
    case "/":
      return ANS / value;
    case "=":
      return ANS + ANS;
    case "C":
      return 0;
  }
};

module.exports = calcular;