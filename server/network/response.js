"use strict";

const e = require("express");

/**
 * Response when the opeartion is successfull
 *
 * @param {any} req
 * @param {any} res
 * @param {string} message
 * @param {number} status
 */

exports.success = function (req, res, message, status) {
  res.status(status || 200).send({
    error: "",
    body: message,
  });
};

/**
 * Response when the operation has an error
 *
 * @param {any} req
 * @param {any} res
 * @param {string} message
 * @param {number} status
 * @param {any} details
 */

exports.error = function (req, res, message, status, details) {
  if (status === 500) {
    console.error("[response error] ", details);
  }

  res.status(status || 500).send({
    error: message,
    body: "",
  });
};
