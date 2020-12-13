"use strict";

const inquirer = require("inquirer");

const iterator = require("../iterator.steps");

const createQuery = (string) => {
  const query = {};
  let choices = [
    '+',
    '-',
    '*',
    '/',
    '=',
    'C',
    'off',
  ]

  query.name = string;
  query.type = string === "value" ? "number" : "list";
  query.message = " ";
  query.choices = string === "operator" ? choices : undefined;

  return query;
};

const queryParams = () => {
  let string;

  iterator.next().value % 2 === 0 ? (string = "value") : (string = "operator");

  const query = createQuery(string)

  const qs = [query];

  return inquirer.prompt(qs);
};

module.exports = queryParams;
