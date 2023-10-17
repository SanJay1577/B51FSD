console.log("working good");
// ES5 vs Es6
//     - normal function
//     - arrow function iife anonymous functgion
//     - template $ lietrals {}
//     - object and arra6y destructring

// Scoping - var vs let vs const

console.log(a);
var a = 15;

function giveData() {
  if (true) {
    var x = 10;
    let y = 15;
    console.log(x); //10
    console.log(y); //15
  }
  console.log(x); // 10
  console.log(y); // not defined
}
//console.log(x); // not defined
//console.log(y); // not defined
//giveData();

// arrow functions
console.log(getA());

function getA() {
  return 15;
}

const getArrow = () => 15;
console.log(getArrow());

// use of this keyword(lexical scoping)
function outerScope() {
  var x = 125;
  return function innerscope() {
    console.log(x);
  };
}
const result = outerScope();
console.log(result);
result();

// template literals
let state = true;
const perName = "sanjay";
if (state === true) {
  console.log("state is true");
} else {
  console.log("state is true");
}
// ternary operator
state == true ? console.log("true") : console.log("false");
// console.log("My name is " + perName)
console.log(`My name is ${perName}`);

// spred & rest prarameter
const studObj = {
  name: "Sanjay",
  age: "25",
  batch: "B51WE2",
};

function editObj(obj, batchName) {
  const newObj = { ...obj, batch: batchName, edu: "ede" };
  console.log(newObj);
}
editObj(studObj, "B42");

// rest
function sum(...arr) {
  console.log(arr);
  return arr.reduce((acc, value) => acc + value, 0);
}
console.log(sum(1, 2, 3, 4, 5));

// array & object destructure
const names = ["sanjay", "pradeep", "deepa"];
const [name1, ...rest] = names;
console.log(names);
console.log(name1);
console.log(rest);

// object destructuring
const { name: mentorName, age: mentorAge, batch, education = "B.E" } = studObj;
console.log(mentorName);
console.log(mentorAge);
console.log(batch);
console.log(education);

// task
const taskData = {
  userInfo: {
    name: "Sanjay",
    position: "mentor",
  },
  batches: ["B42", "B43", "B50", "B51"],
};

const {
  userInfo: { name: firstName, position },
  batches: [firstBatch, ...remaining],
} = taskData;
// expected output
console.log(firstName); // sanjay
console.log(position); // mentor
console.log(firstBatch); // B42
console.log(remaining); // ["B43", "B50", "B51"]

// property shorthand

const orderBY = "sanjay";
const develiryAt = "chennai";
const productname = "iphone";
const productPrice = "720000";

const package = {
  orderBY,
  develiryAt,
  productname,
  productPrice,
};

console.log(package);
