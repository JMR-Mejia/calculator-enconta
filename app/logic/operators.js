const axios = require("axios");

const server = async (operator, values) => {
  const response = await axios.get(
    `http://localhost:3000/calculator/${operator}`,
    {
      params: values,
    }
  );
  return response.data;
};

const calcular = async (operator, ANS, value) => {
  switch (operator) {
    case "+":
      try {
        const result = await server("addiction", {
          value1: ANS,
          value2: value,
        });
        return result.body;
      } catch (e) {
        return e.message;
      }
    case "-":
      try {
        const result = await server("subtraction", {
          value1: ANS,
          value2: value,
        });
        return result.body;
      } catch (e) {
        return e.message;
      }
    case "*":
      try {
        const result = await server("multiplication", {
          value1: ANS,
          value2: value,
        });
        return result.body;
      } catch (e) {
        return e.message;
      }
    case "/":
      try {
        const result = await server("division", { value1: ANS, value2: value });
        return result.body;
      } catch (e) {
        return e.message;
      }
    case "i":
      try {
        const result = await server("equal", {
          value: ANS,
          operator: value,
        });
        return result.body;
      } catch (e) {
        return e.message;
      }
    case "C":
      try {
        const result = await server("clear");
        return result.body;
      } catch (e) {
        return e.message;
      }
  }
};

module.exports = calcular;
