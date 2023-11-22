const [, , configPath] = process.argv;
const fs = require("fs"); // file system access'
const os = require("os"); // operating system info

function calculate(num1, num2, operation) {
  switch (operation) {
    case "add":
      return console.log(num1 + num2);
    case "sub":
      return console.log(num1 - num2);
    case "mul":
      return console.log(num1 * num2);
    default:
      console.log("please specify right operation");
  }
}
//calculate(parseInt(n1), parseInt(n2), op);
// reading a file

fs.readFile("sample.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error Occured :", err);
  } else {
    console.log(data);
  }
});
const content = "This text file is written in nodejs";
fs.writeFile("./node.txt", content, (err) => {
  if (err) {
    console.log("Error Occured :", err);
  } else {
    console.log("Written successfully");
  }
});

// read the config files
fs.readFile(configPath, "utf-8", (err, data) => {
  if (err) {
    console.log("Error Occured :", err);
  } else {
    console.log(data);
    const config = JSON.parse(data);
    console.log(config);
  }
});

const appendContent = `\n New line added in a file`;
fs.appendFile("./node.txt", appendContent, (err) => {
  if (err) {
    console.log("error", err);
  } else {
    console.log("file updated successfully");
  }
});

// delete a file
// fs.unlink("./sample.txt", (err) => {
//   if (err) {
//     console.log("error", err);
//   } else {
//     console.log("file deleted successfully");
//   }
// });

// os info
console.log("Total memory", os.totalmem());
console.log("Free memory space", os.freemem());
console.log("version", os.version());
console.log("CPUS", os.cpus());

// date
let time = Date.now();
console.log("Timeeeee", time);
let date = new Date();
console.log("Date----------------", date.getDate());
console.log("month----------------", date.getMonth());
console.log("year----------------", date.getFullYear());
console.log("Today----------------", date.toUTCString().slice(0, 17));
