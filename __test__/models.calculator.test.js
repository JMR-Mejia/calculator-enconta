const { calculator } = require("../server/models");

describe("Calculator object test", () => {
  test("Addiction", () => {
    expect(calculator.addiction(3, 4)).toBe(7);
  });
  test("Subtraction", () => {
    expect(calculator.subtraction(3, 4)).toBe(-1);
  });
  test("Multiplication", () => {
    expect(calculator.multiplication(3, 4)).toBe(12);
  });
  test("division", () => {
    expect(calculator.division(3, 4)).toBe(0.75);
  });
  test("division in 0", () => {
    expect(calculator.division(3, 0)).toBe("Error");
  });
  test("Equal with +", () => {
    expect(calculator.equal(3, '+')).toBe(6);
  });
  test("Equal with +", () => {
    expect(calculator.equal(3, '-')).toBe(0);
  });
  test("Equal with *", () => {
    expect(calculator.equal(3, '*')).toBe(9);
  });
  test("Equal with /", () => {
    expect(calculator.equal(3, '/')).toBe(1);
  });
  test("clear", () => {
    expect(calculator.clear()).toBe(0);
  });
});
