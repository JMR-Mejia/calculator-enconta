const {
  subtraction,
  addiction,
  multiplication,
  division,
  equal,
  clear,
} = require("../server/controller/calculator/controller");

describe("Controller test", () => {
  describe("Addiction", () => {
    test("Addiction successfull", (done) => {
      addiction(2, 5).then((data) => {
        expect(data).toEqual(7);
        done();
      });
    });
    test("Is Number in value", () => {
      expect(addiction(2, 5)).resolves.toEqual(7);
    });
    test("Error in string in value1", (done) => {
      addiction("j", 5).catch((e) => {
        expect(e).toMatchSnapshot();
        done();
      });
    });
    test("Error when value1 is undefined", (done) => {
      addiction(undefined, 5).catch((e) => {
        expect(e).toMatchSnapshot();
        done();
      });
    });
    test("Error in string in value 2", (done) => {
      addiction("5", 2).catch((e) => {
        expect(e).toMatchSnapshot();
        done();
      });
    });
    test("Error when value2 is undefined", (done) => {
      addiction(2, undefined).catch((e) => {
        expect(e).toMatchSnapshot();
        done();
      });
    });
  });
  describe("Subtraction", () => {
    test("subtraction successfull", (done) => {
      subtraction(2, 5).then((data) => {
        expect(data).toEqual(-3);
        done();
      });
    });
    test("Is Number in value", () => {
      expect(subtraction(2, 5)).resolves.toEqual(-3);
    });
    test("Error in string in value1", (done) => {
      subtraction("j", 5).catch((e) => {
        expect(e).toMatchSnapshot();
        done();
      });
    });
    test("Error when value1 is undefined", (done) => {
      subtraction(undefined, 5).catch((e) => {
        expect(e).toMatchSnapshot();
        done();
      });
    });
    test("Error in string in value 2", (done) => {
      subtraction("5", 2).catch((e) => {
        expect(e).toMatchSnapshot();
        done();
      });
    });
    test("Error when value2 is undefined", (done) => {
      subtraction(2, undefined).catch((e) => {
        expect(e).toMatchSnapshot();
        done();
      });
    });
  });
  describe("Multiplication", () => {
    test("multiplication successfull", (done) => {
      multiplication(2, 5).then((data) => {
        expect(data).toEqual(10);
        done();
      });
    });
    test("Is Number in value", () => {
      expect(multiplication(2, 5)).resolves.toEqual(10);
    });
    test("Error in string in value1", (done) => {
      multiplication("j", 5).catch((e) => {
        expect(e).toMatchSnapshot();
        done();
      });
    });
    test("Error when value1 is undefined", (done) => {
      multiplication(undefined, 5).catch((e) => {
        expect(e).toMatchSnapshot();
        done();
      });
    });
    test("Error in string in value 2", (done) => {
      multiplication("5", 2).catch((e) => {
        expect(e).toMatchSnapshot();
        done();
      });
    });
    test("Error when value2 is undefined", (done) => {
      multiplication(2, undefined).catch((e) => {
        expect(e).toMatchSnapshot();
        done();
      });
    });
  });
  describe("Division", () => {
    test("Division successfull", (done) => {
      division(2, 5).then((data) => {
        expect(data).toEqual(0.4);
        done();
      });
    });
    test("Is Number in value", () => {
      expect(division(2, 5)).resolves.toEqual(0.4);
    });
    test("Error in string in value1", (done) => {
      division("j", 5).catch((e) => {
        expect(e).toMatchSnapshot();
        done();
      });
    });
    test("Error when value1 is undefined", (done) => {
      division(undefined, 5).catch((e) => {
        expect(e).toMatchSnapshot();
        done();
      });
    });
    test("Error in string in value 2", (done) => {
      division("5", 2).catch((e) => {
        expect(e).toMatchSnapshot();
        done();
      });
    });
    test("Error when value2 is undefined", (done) => {
      division(2, undefined).catch((e) => {
        expect(e).toMatchSnapshot();
        done();
      });
    });
  });
  describe("Equal", () => {
    test("Equal sum is successfull ", () => {
      expect(equal(5, "+")).resolves.toEqual(10);
    });
    test("Equal sub is successfull", () => {
      expect(equal(5, "-")).resolves.toEqual(0);
    });
    test("Equal mul is successfull", () => {
      expect(equal(5, "*")).resolves.toEqual(25);
    });
    test("Equal div is successfull", () => {
      expect(equal(5, "/")).resolves.toEqual(1);
    });
    test("Equal clear is successfull", (done) => {
      equal(0, "C").then((data) => {
        expect(data).toEqual(0);
        done();
      });
      // expect(equal(0, "C")).resolves.toEqual(0);
    });
    test("Error in string for value1", (done) => {
      equal("j", "+").catch((e) => {
        expect(e).toMatchSnapshot();
        done();
      });
    });
    test("Error in operator incorrect", (done) => {
      equal(2, "u").catch((e) => {
        expect(e).toMatchSnapshot();
        done();
      });
    });
    test("Error when value1 is undefined", (done) => {
      division(undefined, "+").catch((e) => {
        expect(e).toMatchSnapshot();
        done();
      });
    });
    test("Error when opeartor is undefined", (done) => {
      division(5, undefined).catch((e) => {
        expect(e).toMatchSnapshot();
        done();
      });
    });
  });

  describe("Clear", () => {
    test("Clear successfull", (done) => {
      clear().then((data) => {
        expect(data).toEqual(0);
        done();
      });
    });
  });
});
