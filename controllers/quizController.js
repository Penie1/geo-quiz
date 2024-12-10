const db = require("../db/queries");

async function getQuizForm(req, res) {
  const result = await db.getAllCapitals();
  res.render("index.ejs");
}

module.exports = { getQuizForm };
