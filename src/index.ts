import * as express from "express";

// Express server creation
const app = express();
const port = 8080;

// First route
app.get("/hello", (req, res) => {
  res.send({ message: "Hello World !" });
});

// Bind express server on port 8080
app.listen(port, () => {
  console.log(
    `Express server has started on port ${port}. Open http://localhost:${port}/hello to see results`
  );
});
