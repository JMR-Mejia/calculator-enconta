"use strict";

const calculator = require("../controller/calculator/network");

/**
 * Receives the server for declare routes
 *
 * @param {object} server
 */

const routes = function (server) {
  server.use("/calculator", calculator);
};

module.exports = routes;
