//logger
const log = (param) => console.log(param);

// result element
const resultString = document.getElementById("result");

// browser inbuild methods
function alertMsg(msg) {
  alert(msg); // returns nothing
  resultString.innerText = "Alter msg triggered";
}
//alertMsg("Hello there !");

function promtMsg() {
  const name = prompt("Can I get your name?", "Default value");
  // returns a string
  // if cancel returns null
  log(name);
  resultString.innerText = name;
}
//promtMsg();
function confirmMsg() {
  const result = confirm("Have completed Degree");
  log(result);
  // returns true or false
  resultString.innerText = result;
}

// set time out
// 2 args -> 1. function , 2. timer in ms
let timeoutCounter = 10;
function countDown() {
  log(timeoutCounter);
  timeoutCounter--;
  const id = setTimeout(countDown, 1000);
  if (timeoutCounter == 0) {
    log("Time out");
    clearTimeout(id);
  }
}
countDown();
