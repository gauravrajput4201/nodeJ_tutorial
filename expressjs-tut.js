const express = require("express");
const app = express();
const path = require("path");
const filePath = path.join(__dirname, "public");

// app.get("", (req, resp) => {
//   resp.send("welcome " + req.query.name);
// });
// app.get("/about", (req, resp) => {
//   resp.send("hello send, this is about page");
// });
// app.get("/help", (req, resp) => {
//   resp.send("hello send, this is help page");
// });

// load static page from other folder
// app.use(express.static(filePath));

app.get("", (req, resp) => {
  resp.sendFile(`${filePath}/index.html`);
});
app.get("/aboutus", (req, resp) => {
  resp.sendFile(`${filePath}/about.html`);
});
app.get("*", (req, resp) => {
  resp.sendFile(`${filePath}/notfound.html`);
});

app.listen(5000);
