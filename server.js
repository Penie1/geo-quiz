require("dotenv").config();
const path = require("path");
const express = require("express");
const { quizRouter } = require("./routes/quizRouter");

const app = express();
const PORT = process.env.PORT || 3000;

const assetsPath = path.join(__dirname, "public");
const viewsPath = path.join(__dirname, "views");

app.set("views", viewsPath);
app.set("view engine", "ejs");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));
app.use(quizRouter);

app.listen(PORT);
