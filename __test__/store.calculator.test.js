const store = require("../server/controller/calculator/store");

describe('Store calculator test', ()=> {
  test("Addiction", () => {
    expect(store.addiction(5, 2)).toBe(7);
  });
  test("Subtraction", () => {
    expect(store.subtraction(5, 2)).toBe(3);
  });
  test("Multiplication", () => {
    expect(store.multiplication(5, 2)).toBe(10);
  });
  test("division", () => {
    expect(store.division(5, 2)).toBe(2.5);
  });
  test("division in 0", () => {
    expect(store.division(5, 0)).toBe("Error");
  });
  test("Equal with +", () => {
    expect(store.equal(5, '+')).toBe(10);
  });
  test("Equal with +", () => {
    expect(store.equal(5, '-')).toBe(0);
  });
  test("Equal with *", () => {
    expect(store.equal(5, '*')).toBe(25);
  });
  test("Equal with /", () => {
    expect(store.equal(5, '/')).toBe(1);
  });
  test("clear", () => {
    expect(store.clear()).toBe(0);
  });
})
