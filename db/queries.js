const pool = require("./pool");
const getAllCapitals = async () => {
  const { rows } = await pool.query("SELECT * FROM captial");
  return rows;
};

module.exports = { getAllCapitals };
