const express = require("express");

const response = require("../../network/response");
const controller = require("./controller");

const router = express.Router();

router.get("/addiction", function (req, res) {
  controller
    .addiction(req.body.value1, req.body.value2)
    .then((result) => {
      response.success(req, res, result, 200);
    })
    .catch((e) => {
      response.error(req, res, e.message, e.code, e);
    });
});

router.get("/subtraction", function (req, res) {
  controller
    .subtraction(req.body.value1, req.body.value2)
    .then((result) => {
      response.success(req, res, result, 200);
    })
    .catch((e) => {
      response.error(req, res, e.message, e.code, e);
    });
});

router.get("/multiplication", function (req, res) {
  controller
    .multiplication(req.body.value1, req.body.value2)
    .then((result) => {
      response.success(req, res, result, 200);
    })
    .catch((e) => {
      response.error(req, res, e.message, e.code, e);
    });
});

router.get("/division", function (req, res) {
  controller
    .division(req.body.value1, req.body.value2)
    .then((result) => {
      response.success(req, res, result, 200);
    })
    .catch((e) => {
      response.error(req, res, e.message, e.code, e);
    });
});

router.get("/equal", function (req, res) {
  controller
    .equal(req.body.value1, req.body.value2, req.body.operator)
    .then((result) => {
      response.success(req, res, result, 200);
    })
    .catch((e) => {
      response.error(req, res, e.message, e.code, e);
    });
});

router.get("/clear", function (req, res) {
  controller
    .clear()
    .then((result) => {
      response.success(req, res, result, 200);
    })
    .catch((e) => {
      response.error(req, res, e.message, e.code, e);
    });
});

module.exports = router;
