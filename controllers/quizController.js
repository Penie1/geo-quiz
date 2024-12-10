const db = require("../db/queries");

let currentScore = 0;
let currentQuestion = null;
let isGameOver = false;

// Function to get a random quiz question
async function randomQuiz() {
  const result = await db.getAllCapitals();
  const randomId = Math.floor(Math.random() * result.length);
  return result[randomId];
}

// Function to render the quiz form

async function getQuizForm(req, res) {
  try {
    currentQuestion = await randomQuiz();

    res.render("index.ejs", {
      isGameOver,
      totalScore: currentScore,
      country: currentQuestion?.country || null,
    });
  } catch (error) {
    console.error("Error fetching quiz data:", error);
    res.status(500).send("An error occurred while fetching the quiz.");
  }
}

async function submitAnswer(req, res) {
  const { capital } = req.body;

  const normalizedCapital = capital.trim().toLowerCase();

  if (currentQuestion?.capital.toLowerCase() === normalizedCapital) {
    isGameOver = false;
    currentScore++;
  } else {
    isGameOver = true;
    currentScore = 0;
  }
  res.redirect("/");
}

module.exports = { getQuizForm, submitAnswer };
