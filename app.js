const express = require("express");
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Blackpink in your area!",
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
