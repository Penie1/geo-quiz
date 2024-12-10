const { Router } = require("express");
const quizController = require("../controllers/quizController");

const quizRouter = Router();

quizRouter.get("/", quizController.getQuizForm);
quizRouter.post("/", quizController.submitAnswer);
module.exports = { quizRouter };
