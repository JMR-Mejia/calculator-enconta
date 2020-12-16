const request = require("supertest");

const app = require("../server/server");

const body = {
  value1: 6,
  value2: 3,
};

const bodyWithErrorInValue2 = {
  value1: 6,
  value2: "t",
};

const bodyWithErrorInValue1 = {
  value1: "e",
  value2: 9,
};

const bodyEqual = {
  sum: {
    value: 6,
    operator: "+",
  },
  sub: {
    value: 6,
    operator: "-",
  },
  mul: {
    value: 6,
    operator: "*",
  },
  div: {
    value: 6,
    operator: "/",
  },
  clear: {
    operator: "C",
  },
  valueIncorrect: {
    value: "",
    operator: "+",
  },
  valueIncorrect: {
    value: 3,
    operator: "?",
  },
};

describe("Server routes tests", () => {
  describe("Get addiction", () => {
    test("Operation sum is successfull", (done) => {
      request(app)
        .get("/calculator/addiction")
        .send(body)
        .expect("Content-Type", /json/)
        .expect(200)
        .then((response) => {
          expect(response.body.body).toBe(9);
          done();
        });
    });
    test("Value 1 is incorrect", (done) => {
      request(app)
        .get("/calculator/addiction")
        .send(bodyWithErrorInValue1)
        .expect("Content-Type", /json/)
        .expect(400)
        .then((response) => {
          expect(response.body.error).toMatchSnapshot();
          done();
        });
    });
    test("Value 2 is incorrect", (done) => {
      request(app)
        .get("/calculator/addiction")
        .send(bodyWithErrorInValue2)
        .expect("Content-Type", /json/)
        .expect(400)
        .then((response) => {
          expect(response.body.error).toMatchSnapshot();
          done();
        });
    });
  });
  describe("Get subtraction", () => {
    test("Operation sub is successfull", (done) => {
      request(app)
        .get("/calculator/subtraction")
        .send(body)
        .expect("Content-Type", /json/)
        .expect(200)
        .then((response) => {
          expect(response.body.body).toBe(3);
          done();
        });
    });
    test("Value 1 is incorrect", (done) => {
      request(app)
        .get("/calculator/subtraction")
        .send(bodyWithErrorInValue1)
        .expect("Content-Type", /json/)
        .expect(400)
        .then((response) => {
          expect(response.body.error).toMatchSnapshot();
          done();
        });
    });
    test("Value 2 is incorrect", (done) => {
      request(app)
        .get("/calculator/subtraction")
        .send(bodyWithErrorInValue2)
        .expect("Content-Type", /json/)
        .expect(400)
        .then((response) => {
          expect(response.body.error).toMatchSnapshot();
          done();
        });
    });
  });
  describe("Get multiplication", () => {
    test("Operation mul is successfull", (done) => {
      request(app)
        .get("/calculator/multiplication")
        .send(body)
        .expect("Content-Type", /json/)
        .expect(200)
        .then((response) => {
          expect(response.body.body).toBe(18);
          done();
        });
    });
    test("Value 1 is incorrect", (done) => {
      request(app)
        .get("/calculator/multiplication")
        .send(bodyWithErrorInValue1)
        .expect("Content-Type", /json/)
        .expect(400)
        .then((response) => {
          expect(response.body.error).toMatchSnapshot();
          done();
        });
    });
    test("Value 2 is incorrect", (done) => {
      request(app)
        .get("/calculator/multiplication")
        .send(bodyWithErrorInValue2)
        .expect("Content-Type", /json/)
        .expect(400)
        .then((response) => {
          expect(response.body.error).toMatchSnapshot();
          done();
        });
    });
  });
  describe("Get division", () => {
    test("Operation div is successfull", (done) => {
      request(app)
        .get("/calculator/division")
        .send(body)
        .expect("Content-Type", /json/)
        .expect(200)
        .then((response) => {
          expect(response.body.body).toBe(2);
          done();
        });
    });
    test("Value 1 is incorrect", (done) => {
      request(app)
        .get("/calculator/division")
        .send(bodyWithErrorInValue1)
        .expect("Content-Type", /json/)
        .expect(400)
        .then((response) => {
          expect(response.body.error).toMatchSnapshot();
          done();
        });
    });
    test("Value 2 is incorrect", (done) => {
      request(app)
        .get("/calculator/division")
        .send(bodyWithErrorInValue2)
        .expect("Content-Type", /json/)
        .expect(400)
        .then((response) => {
          expect(response.body.error).toMatchSnapshot();
          done();
        });
    });
  });
  describe("Get equal", () => {
    test("Operation equal in sum is successfull", (done) => {
      request(app)
      .get("/calculator/equal")
        .send(bodyEqual.sum)
        .expect("Content-Type", /json/)
        .expect(200)
        .then((response) => {
          expect(response.body.body).toBe(12);
          done();
        });
    });
    test("Operation equal in sub is successfull", (done) => {
      request(app)
        .get("/calculator/equal")
        .send(bodyEqual.sub)
        .expect("Content-Type", /json/)
        .expect(200)
        .then((response) => {
          expect(response.body.body).toBe(0);
          done();
        });
    });
    test("Operation equal in mul is successfull", (done) => {
      request(app)
        .get("/calculator/equal")
        .send(bodyEqual.mul)
        .expect("Content-Type", /json/)
        .expect(200)
        .then((response) => {
          expect(response.body.body).toBe(36);
          done();
        });
    });
    test("Operation equal in div is successfull", (done) => {
      request(app)
        .get("/calculator/equal")
        .send(bodyEqual.div)
        .expect("Content-Type", /json/)
        .expect(200)
        .then((response) => {
          expect(response.body.body).toBe(1);
          done();
        });
    });
    test("Operation equal in clear is successfull", (done) => {
      request(app)
        .get("/calculator/equal")
        .send(bodyEqual.clear)
        .expect("Content-Type", /json/)
        .expect(200)
        .then((response) => {
          expect(response.body.body).toBe(0);
          done();
        });
    });
    test("Value is incorrect", (done) => {
      request(app)
        .get("/calculator/equal")
        .send(bodyEqual.valueIncorrect)
        .expect("Content-Type", /json/)
        .expect(400)
        .then((response) => {
          expect(response.body.error).toMatchSnapshot();
          done();
        });
    });
    test("Value 2 is incorrect", (done) => {
      request(app)
        .get("/calculator/equal")
        .send(bodyEqual.operatorIncorrect)
        .expect("Content-Type", /json/)
        .expect(400)
        .then((response) => {
          expect(response.body.error).toMatchSnapshot();
          done();
        });
      });
  });
  describe("Get clear", () => {
    test("Operation clear is successfull", (done) => {
      request(app)
        .get("/calculator/clear")
        .send(body)
        .expect("Content-Type", /json/)
        .expect(200)
        .then((response) => {
          expect(response.body.body).toBe(0);
          done();
        });
    });
  });
});
