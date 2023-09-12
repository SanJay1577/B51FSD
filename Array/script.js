//logger
const log = (param) => console.log(param);

//methods in array
// division
// Impact in original array
const array = [1, 2, 45, 27, 89, 123, 5];
log(array);

//push
//add a value at the last index
log("-------push method-------");
array.push(57);
log(array);

//pop
//remove a value at the last index
log("-------pop method-------");
array.pop();
log(array);

//unshift
//add a value at the first index
log("-------unshift method-------");
array.unshift(52);
log(array);

//shift
//add a value at the first index
log("-------shift method-------");
array.shift();
log(array);

//sorting
log("-------sort method-------");
const array2 = [5, 9, 4, 3, 1];
const strArr = ["a", "z", "s", "b"];
array2.sort();
strArr.sort();
// reverse
array.sort((a, b) => a - b).reverse();
log(array2);
log(strArr);
log(array);

// doesn't impact original array
// returns a new array or value
const newArr = ["a", "b"];
const newArr2 = ["c", "d"];
log(newArr);
log("-------contact method-------");
const concatedArr = newArr.concat(newArr2);
log(newArr);
log(concatedArr);

//Map filter reduce (MRF)

const MrfArray = [2, 3, 5, 7, 8, 9];
log("...............MRF.............");
log("--------ForEach---------");
const forEachArray = MrfArray.forEach((value, index, accArr) => {
  console.log(`
          Value : ${value}
          index : ${index}
          accArr : ${accArr}
        `);
});

log("..........Map............");
const newMappedArray = MrfArray.map((value, index, accArr) => {
  console.log(`
     Value : ${value}
     index : ${index}
     accArr : ${accArr}
   `);
  return value * 2;
});
log(MrfArray);
log(newMappedArray);

//Polyfill for map
//array [1, 3, 4, 5, 7]
Array.prototype.zenMap = function (fn) {
  let newarr = [];
  for (let i = 0; i < this.length; i++) {
    newarr.push(fn(this[i], i, this));
  }
  return newarr;
};

log("----------zen map-------------");
const newZenMappedArray = MrfArray.zenMap((value, index, accArr) => {
  console.log(`
          Value : ${value}
          index : ${index}
          accArr : ${accArr}
        `);
  return value * 2;
});
log(MrfArray);
log(newZenMappedArray);

// Filter
log("--------------filter---------");
//Filter also returns a new array
log(MrfArray);

const filtredArr = MrfArray.filter((value, index, accArr) => {
  // conditions
  return value % 2 != 0;
});

console.log(filtredArr);

// reduce
// reduce returns a value

log("---------reduce------------");

const sum = MrfArray.reduce((acc, value, index, accArr) => {
  return (acc += value);
}, 0);
log(MrfArray);
log(sum);

// chaining of MRF

const result = MrfArray.map((val) => val * 3)
  .filter((val) => val % 2 == 0)
  .reduce((acc, val) => (acc += val), 0);

console.log(result);
