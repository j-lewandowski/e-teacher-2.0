const express = require("express");
const app = express();
const dotenv = require("dotenv").config();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Welcome to E-teacher 2.0 API!");
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
