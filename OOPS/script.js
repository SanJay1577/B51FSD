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
//prototypes ....
ManfuctureCar.prototype.getNameOfCar = function () {
  console.log(this.name);
};

const passat = new ManfuctureCar("passat", 4, 2, "petrol");
console.log(passat);

passat.getCarDetails();
passat.getNameOfCar();

// creates a obj manufatcure {}
// this = {}
// this.name = name
// {name : "passat"}

// Class
// 4 Pillars of oops
//Encapsulation -> ability to define a data with methods
//Inheritance
// Abstraction
// polymorphism
// class in js

class CarProduction {
  // Encapsulation
  constructor(name, color, fuelVariant, engineCapacity) {
    this.name = name;
    this.color = color;
    this.fuelVariant = fuelVariant;
    this.engineCapacity = engineCapacity;
  }
  // businnes logic or methods
  getDetails() {
    console.log(`
     Name : ${this.name}
     Color : ${this.color}
     Fuel-Type : ${this.fuelVariant}
     Engine-Capacity : ${this.engineCapacity} liter
    `);
  }

  getspecialDetails() {
    console.log(`Special Details are ${this.fuelVariant} engine`);
  }
}

// Inheritance
class Features extends CarProduction {
  constructor(
    name,
    color,
    fuelVariant,
    engineCapacity,
    safety,
    model,
    type,
    seatType
  ) {
    super(name, color, fuelVariant, engineCapacity);
    this._safety = safety;
    this.model = model;
    this.type = type;
    this.seatType = seatType;
  }
  // getter method
  get safety() {
    return this._safety;
  }

  //setter method
  set safety(newStarRating) {
    if (newStarRating < 0) {
      console.log("Error : star rating cannot be less than 0");
    } else if (newStarRating > 5) {
      console.log("Error : star rating cannot be greate than 5");
    } else {
      this._safety = newStarRating;
    }
  }

  getCarFeatures() {
    //abstraction..
    let bhp = (this.engineCapacity * 100) / 1.8;
    console.log(`
      Star Ratings : ${this._safety}
      Model : ${this.model}
      Seats : ${this.seatType} seats
      Car-Body Type : ${this.type}
      BHP : ${bhp.toFixed(1)} BHP
    `);
  }
  // polymorphism
  getspecialDetails() {
    console.log(`Special Details are ${this.seatType} seats`);
  }
}

const car1 = new CarProduction("polo", "red", "diesel", 1.5);
const car2 = new CarProduction("tiguan", "grey", "petrol", 4);
console.log(car1);
car1.getDetails();
console.log(car2);
car2.getDetails();

const car3 = new Features(
  "Jetta",
  "lava blue",
  "petrol",
  4,
  5,
  "Topline",
  "SUV",
  "leather"
);
console.log(car3);
car3.getDetails();
car3.bhp = 400; // cannot do this
car3.getCarFeatures();

console.log(car3.safety);
car3.safety = -1; // throw and error
car3.safety = 4; // change to 4
console.log(car3.safety);
car3.getspecialDetails();
