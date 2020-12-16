const express = require("express");

const response = require("../../network/response");
const controller = require("./controller");

const router = express.Router();

/**
 * sum two values, recive in format JSON
 * @return {object} success || error
 */

router.get("/addiction", function (req, res) {
  controller
    .addiction(parseFloat(req.query.value1), parseFloat(req.query.value2))
    .then((result) => {
      response.success(req, res, result, 200);
    })
    .catch((e) => {
      response.error(req, res, e.message, e.code, e);
    });
});

/**
 * substract two values, recive in format JSON
 * @param {object} req
 * @return {object} success || error
 */

router.get("/subtraction", function (req, res) {
  controller
    .subtraction(parseFloat(req.query.value1), parseFloat(req.query.value2))
    .then((result) => {
      response.success(req, res, result, 200);
    })
    .catch((e) => {
      response.error(req, res, e.message, e.code, e);
    });
});

/**
 * multiply two values, recive in format JSON
 * @param {object} req
 * @return {object} success || error
 */

router.get("/multiplication", function (req, res) {
  controller
    .multiplication(parseFloat(req.query.value1), parseFloat(req.query.value2))
    .then((result) => {
      response.success(req, res, result, 200);
    })
    .catch((e) => {
      response.error(req, res, e.message, e.code, e);
    });
});

/**
 * divide two values, recive in format JSON
 * @param {object} req
 * @return {object} success || error
 */

router.get("/division", function (req, res) {
  controller
    .division(parseFloat(req.query.value1), parseFloat(req.query.value2))
    .then((result) => {
      response.success(req, res, result, 200);
    })
    .catch((e) => {
      response.error(req, res, e.message, e.code, e);
    });
});

/**
 * Opera two values  , recive in format JSON
 * @param {object} req
 * @return {object} success || error
 */

router.get("/equal", function (req, res) {
  if (req.query.operator === "s") req.query.operator = "+";
  controller
    .equal(parseFloat(req.query.value || 0), req.query.operator)
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
