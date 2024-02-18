const express = require("express");
const path = require("path");
const filePath = path.join(__dirname, "public");
const app = express();
app.set("view engine", "ejs");

app.get("", (req, resp) => {
  resp.sendFile(`${filePath}/index.html`);
});
app.get("/aboutus", (req, resp) => {
  resp.sendFile(`${filePath}/about.html`);
});
app.get("/profile", (req, resp) => {
  const user = {
    name: "Wing Richmond",
    phone: "(315) 294-3773",
    email: "amet.dapibus@outlook.ca",
    postalZip: "M0W 3PV",
    region: "Lombardia",
    country: "Colombia",
    address: "935-7593 Aliquam Road",
  };
  resp.render("profile", { user });
});
app.get("*", (req, resp) => {
  resp.sendFile(`${filePath}/notfound.html`);
});

app.listen(5000);
