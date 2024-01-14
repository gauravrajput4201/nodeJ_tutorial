const fs = require("fs");
// fs.writeFileSync("example.txt", "this is example");
const path = require("path");
const dirPath = path.join(__dirname, "files");
console.log(dirPath);
// create files

// for (let index = 0; index < 5; index++) {
//   fs.writeFileSync(
//     dirPath + `/files${index}.txt`,
//     `this is create files ${index}`
//   );
// }

//read files

fs.readdir(dirPath, (err, files) => {
  files.forEach((element) => {
    console.warn(element);
  });
});
