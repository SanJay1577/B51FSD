// Creating an element
let divElement = document.createElement("div");
let anchorElement = document.createElement("a");
// adding attributes
divElement.setAttribute("class", "js-class js-class2");
divElement.setAttribute("id", "js-id");
anchorElement.setAttribute("href", "https://google.com/");
anchorElement.setAttribute("target", "_blank");

// access element using id and classname
let headElement = document.getElementById("heading");
let subHead = document.getElementsByClassName("head");
console.log(headElement);

console.log(subHead);

// short task
// create elemenet p , a
// setAtrributes , href "google.com"
// p class or id

// Query Selectors
let queryElement = document.querySelector(".query-class");
queryElement.style.backgroundColor = "red";
console.log(queryElement);

// Query Selector all
let queryElementAll = document.querySelectorAll(".query-class");
console.log(queryElementAll);
const colors = ["brown", "green", "orange", "blue"];

for (let i = 0; i < queryElementAll.length; i++) {
  console.log(queryElementAll[i]);
  queryElementAll[i].style.backgroundColor = colors[i];
}

divElement.innerText += `Hello I'm Div`;

divElement.innerHTML += `
 <h2 class="head">New Heading</h2>
 <p>New Para is created using js</p>
`;
anchorElement.innerText = "Google";
console.log(divElement);

queryElement.innerText +=
  " Hello I'm inner text       and i'm added with space";
queryElement.textContent += " Hello I'm text html       and i'm added space";
console.log(queryElement.innerText);
console.log(queryElement.textContent);

let newElements = document.createElement("div");
newElements.style.backgroundColor = "grey";
newElements.style.margin = "20px";
document.body.append(newElements);
// append the content

const append = newElements.append(divElement, anchorElement, "Appending Text");
console.log(append);
//appendchild (tradional method)
// const appendChild = newElements.appendChild(anchorElement);
// console.log(appendChild);

// diffence
//1. append - multiple nodes canbe appended not in appendchild
//2. appednchild - return's the node but append return the undefined.
