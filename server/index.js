const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.listen(4000, () => console.log("Server running on 4000"));

///////////////////////////////////////////////////////////////////////////////////////////

const {getCompliment, getColor, getFortune, getMotivations, addMotivation} = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/color", getColor);
app.get('/api/motivations', getMotivations);
app.post('/api/addMotivation', addMotivation);