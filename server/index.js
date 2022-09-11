const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.listen(4000, () => console.log("Server running on 4000"));


const {getCompliment} = require('./controller')

app.get("/api/compliment", getCompliment);

const {getFortune} = require('./controller')

app.get("/api/fortune", getFortune);

const {getColor} = require('./controller')

app.get("/api/color", getColor);