/*
 * Enconta-Backend
 * Copyright(c) 2020 Jesus Mejia
 * MIT Licensed
 */

"use strict";

/*
 * Modules dependencies
 */

const express = require("express");
const cors = require("cors");

const router = require("./network/routes");

const app = express();

app.use(cors());

app.use(express.json());

/**
 * Create routers using express
 */

router(app);

app.listen(3000);
