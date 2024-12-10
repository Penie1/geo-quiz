const db = require("./pool");

const getAllCapitals = async () => {
  const { rows } = await db.query("SELECT * FROM capital");
  return rows;
};

module.exports = { getAllCapitals };
