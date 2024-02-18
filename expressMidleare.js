const express = require("express");

const app = express();

const reqFilter = (req, resp, next) => {
  if (!req.query.age) {
    resp.send("please pprovide age");
  } else {
    next();
  }
};
// app.use(reqFilter);

app.get("", reqFilter, (req, resp) => {
  resp.send("Welcome to home pae");
});
app.get("/user", (req, resp) => {
  resp.send("Welcome to user ppage");
});

app.listen(5000);
