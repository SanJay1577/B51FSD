console.log("wokring good");
//when returing a promise
// function fetchAllContent() {
//   return new Promise((res, rej) => {
//     res("fetched data");
//   });
// }

async function fetchAllContent() {
  return "data";
}

//fetchAllContent().then((result) => console.log(result));

function delay(ms) {
  return new Promise((res, rej) => setTimeout(res, ms));
}

async function loggers(timer) {
  console.log("Start");
  await delay(timer);
  console.log("operation 1");
  console.log("operation 2");
  console.log("operation 3");
  await delay(timer);
  console.log("End");
  return "start";
}

//loggers(1000);

function fetchContent(data) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (data == "error") {
        rej("Error fetching data");
      } else {
        res("data fetched");
      }
    }, 3000);
  });
}

//   fetchContent(param)
//     .then((data) => console.log(data))
//     .catch((err) => console.log("error :", err));

// error handling in async and await
async function processFetch(param) {
  try {
    const data = await fetchContent(param);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

//processFetch("error");

// process of function
function enterCardNumber(cardNumber) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (cardNumber.length < 5) {
        rej("Enter valid card");
      } else if (cardNumber.length < 7) {
        res("savings");
      } else {
        res("current");
      }
    }, 2000);
  });
}

function displaySelctedCard(cardType) {
  console.log(`${cardType} is activated`);
}

function selectOption(option) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (option === "withdraw") {
        res("withdraw");
        console.log("selected withdrawal");
      } else if (option === "debit") {
        res("debit");
        console.log("selected debit");
      } else {
        rej("please select a option");
      }
    }, 3000);
  });
}

function enterSecurtity(optionSelected, cardType) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (optionSelected == "withdraw") {
        res(`${optionSelected} account in processed for ${cardType}`);
      } else if (optionSelected == "debit") {
        res(`${optionSelected} account in processed for ${cardType}`);
      } else {
        rej("error processing your request");
      }
    }, 5000);
  });
}

// always function should start with async keyword
// where were you hjave promise that returns - await keyword
// retured promise value can be stores in variable
// err hanling we can use try catch
async function bankOperation(cardNumber, operation) {
  try {
    console.log("process start");
    console.log("entering card number");
    const cardType = await enterCardNumber(cardNumber);
    displaySelctedCard(cardType);
    const option = await selectOption(operation);
    console.log("enter security pin");
    const result = await enterSecurtity(option, cardType);
    console.log(result);
    console.log("thanks for choosing our bank");
  } catch (error) {
    console.log("Error :", error);
  }
}

//bankOperation("123456765", "debit");

async function fetchData() {
  try {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
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
  } catch (error) {
    console.log(error);
  }
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
                  </div>
                  </div>
                  `;
}

fetchData();
