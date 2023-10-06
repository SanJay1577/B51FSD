function abc() {
  var a = 10;
  function xyz() {
    console.log(a);
  }
  a = 100;
  return xyz;
}

const efg = abc();
//console.log(efg);
efg();

//curring functions
function first(a) {
  return function second(b) {
    console.log(a, b);
  };
}
// const func = first(5);
// console.log(func);
// func(6);
first(5)(6);

function calculate(oper) {
  return function a(val1) {
    return function b(val2) {
      if (oper === "sum") return val1 + val2;
      else if (oper === "mul") return val1 * val2;
      else if (oper === "div") return val1 / val2;
      else if (oper === "sub") return val1 - val2;
      else return "proper operation is required";
    };
  };
}

const result = calculate("sub")(6)(5);
console.log(result);

// multiple of a number
// infinte
//multiple()()()()()()

function mul(val1) {
  return function (val2) {
    if (val2) {
      return mul(val1 * val2);
    }
    return val1;
  };
}
console.log(mul(2)(2)(2)(2)(5)(7)());
// debouncing in js
let id;
const debounce = (cb) => {
  clearTimeout(id);
  // calling the cb function every 1 sec
  id = setTimeout(cb, 1000);
};

const input = document.querySelector("input");
input.addEventListener("input", () => {
  debounce(() => {
    console.log("fetching data");
  });
});
