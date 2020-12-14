const express = require("express");
const cors = require("cors");
const router = require("./network/routes");

const app = express();

app.use(cors());

app.use(express.json());

router(app)

app.listen(3000);
