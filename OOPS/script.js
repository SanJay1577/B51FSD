// basic carMakinmg object
const carObject = {
  name: "virtus",
  engine: "1liter",
  seat: "leather",
  variant: "petrol",
  length: "above 4 meter",
  makeWheel: function () {
    console.log("making wheels for the car");
  },
  makechase: function () {
    console.log("making chase of length", carObject.length);
  },

  startProduction: function () {
    carObject.makeWheel();
    carObject.makechase();
  },
};
console.log(carObject);

carObject.startProduction();

// short hand property example
const data1 = "sample data";
const sampleObj = {
  // short hand property
  //data1: data1,
  data1,
};
console.log("sample Obj ------", sampleObj);
console.log("------------factory function--------------------");
// factory method
// returns an object
function manufactureCar(name, engineSpec, seat, variant) {
  return {
    name,
    engineSpec,
    seat,
    variant,
    startManufuring: function () {
      console.log(
        `
Starting Manufacturing ${name},
Creating a engine of ${engineSpec} liter and variant ${variant},
Creating a Body for ${name},
Attaching seats of type ${seat},
Completed the chase of car ${name}
                    `
      );
    },
  };
}
const virtus = manufactureCar("virtus", 1, "4 seat leather", "petrol");
const vento = manufactureCar("vento", 1.5, "4 foam seat", "diesel");
console.log(virtus);
virtus.startManufuring();
console.log(vento);
vento.startManufuring();

// this keyword
const granFatherObj = {
  house: "GrandFather house",
  getHouse: function () {
    console.log(this.house);
  },
  fatherObj: {
    house: "Father house",
    // in normal func this targets immediate parent obj
    getHouse: function () {
      console.log(this.house);
    },
    // execution of arrow function inisde obj
    //     getAllDeatils() {
    //       const inArrow = () => {
    //         console.log(this.house);
    //       };
    //       inArrow();
    //     },
    // in arrow function this always targets global obj(window)
    getDetails: () => {
      console.log(this);
    },
  },
};

granFatherObj.getHouse();
granFatherObj.fatherObj.getHouse();
granFatherObj.fatherObj.getDetails();
//granFatherObj.fatherObj.getAllDeatils();

// constructor fuinctions
// creates a object

function ManfuctureCar(name, seat, engine, variant) {
  this.name = name;
  this.seat = seat;
  this.engine = engine;
  this.variant = variant;
  this.power = engine * 100;
  this.getCarDetails = function () {
    console.log(`
      Name of the car is ${this.name}
      No of seats ${this.seat}
      Engine capacity ${this.engine} liter
      Variant of the car is  ${this.variant} 
      Horse power is ${this.power}BHP
    `);
  };
}

const passat = new ManfuctureCar("passat", 4, 2, "petrol");
console.log(passat);
passat.getCarDetails();

// creates a obj manufatcure {}
// this = {}
// this.name = name
// {name : "passat"}
