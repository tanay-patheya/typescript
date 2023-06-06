import express from "express";
const app = express();
const port = 3000;
app.use(express.json());
const routes = require("./routes/routes");
app.use("/", routes);

app.listen(port, () => {
  console.log("live on http://localhost:3000");
});
