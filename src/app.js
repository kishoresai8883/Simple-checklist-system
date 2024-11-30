const express = require("express");
const path = require("path");
const fetchData = require("./fetchData");
const evaluateRules = require("./evaluateRules");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "../public")));

app.get("/api/checklist", async (req, res) => {
  const data = await fetchData();
  if (!data) {
    return res.status(500).send("Error fetching application data");
  }
  const results = evaluateRules(data);
  res.json(results);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
