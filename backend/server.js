require("dotenv").config({ path: "./.env" });

const app = require("./app");
const pool = require("./config/db");

const PORT = process.env.PORT || 3000;



// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});