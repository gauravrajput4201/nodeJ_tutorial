const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "files");
const filesPath = `${dirPath}/files0.txt`;
// fs.writeFileSync(dirPath,"ex.xtx",'exame');

// fs.readdir()
// readd file text
// fs.readFile(filesPath, "utf8", (err, file) => {
//   console.log(file);
// });
// update file text
fs.appendFile(filesPath, " this is updated file", (err) => {
  if (!err) console.log("file is update");
});

// readd file text
fs.readFile(filesPath, "utf8", (err, file) => {
  console.log(file);
});
