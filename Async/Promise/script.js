console.log("working good");
// Promise
//  - What is a promise?
//  - Promise States
//  - Promise chain
//  - promise.all()
//  - Use of fetch() & then()

// making a promise (producer)
let task = 90;
let placemetPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (task >= 80) {
      resolve("yes you are placement is processed");
    } else {
      reject("please completed task above 80");
    }
  }, 1000);
});
// analysing the result of tyhe promise (consumer)

// three different states
// pending
// fulfilled(resolved)
//rejected

placemetPromise
  .then((res) => console.log(res))
  .catch((res) => console.log(res));

let chainPromise = new Promise((resolve, reject) => {
  let value = 0;
  setTimeout(() => {
    if (value > 0) {
      resolve(value);
    } else {
      reject("it's a negative value");
    }
  }, 1000);
});

chainPromise
  .then((data) => {
    console.log(data); // 15
    return data * 2; // 30
  })
  .then((data2) => {
    console.log(data2);
    return data2 * 2;
  })
  .then((data3) => {
    console.log(data3);
  })
  .catch((err) => console.log(err));

// normal function in promises
// disadvantages

// details name and age

function getName(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name.length == 0) {
        reject("Please enter a valid name");
      } else {
        resolve(name);
      }
    }, 2000);
  });
}

function getAge(age) {
  setTimeout(() => {
    console.log(`Please enter a valid age ${age}`);
  }, 2000);
}

function displayDetails(name, age) {
  setTimeout(() => {
    console.log(`Hi ${name}, we got your age as ${age}`);
  }, 2000);
}

getName("sanjay")
  .then((data) => {
    console.log("Your name is", data);
    return data;
  })
  .then((name) => {
    getAge(25);
    return name;
  })
  .then((resName) => {
    displayDetails(resName, 25);
  })
  .catch((err) => console.log(err));

// functionality1
let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("promise1 is called");
    //resolve(25);
    reject("no data available 1");
  }, 5000);
});
// functionality2
let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("promise2 is called");
    //resolve(50);
    //reject("no data available 2");
  }, 7000);
});

// functionality3
let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("promise3 is called");
    resolve(100);
    //     reject("no data available");
  }, 9000);
});

//promise1.all method to club all promises
// all the promise should get reolved
Promise.all([promise1, promise2, promise3])
  .then((value) => {
    console.log("Promise value", value);
  })
  .catch((err) => {
    console.log("Error :", err);
  });

// fetch returns a promise
fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((element) => {
      const countryObject = {
        ...element,
        name: element.name.common,
        flags: element.flags.png,
        population: element.population,
        region: element.region,
        capital: element.capital,
        countryCode: element.cca3 ? element.cca3 : "no countrycode",
      };
      createCountryCard(countryObject);
    });
  })
  .catch((err) => console.log("error : ", err));

// fetch functionality
// weather api
function getWeather(name) {
  // fetch
  // return
}
function createCountryCard(element) {
  document.body.innerHTML += `
          <div class="container">
          <img id="flag" src="${element.flags}" alt="${element.name}"/>
          <div class="info">
          <h2>${element.name}</h2>
          <p><span>Population : ${element.population}</span></p>
          <p><span>Region : ${element.region}</span></p>
          <p><span>Capital : ${element.capital}</span></p>
          <p><span>Country Code : ${element.countryCode}</span></p>
          <button onclick="${getWeather(element.name)}">get weather</button>
          </div>
          </div>
          `;
}

//   img - flag
//   name - name
//   population
//   region
//   captal

//callback
