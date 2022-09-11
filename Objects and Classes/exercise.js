//---------------------Exercise----------------------------
//01. Employees

function solveE01(input) {
  let people = [];
  class Peron {
    constructor(name, personalNumber) {
      this.name = name;
      this.personalNumber = personalNumber;
    }
  }

  for (let i = 0; i < input.length; i++) {
    let name = input[i];
    let personalNumber = name.length;
    // console.log(`Name: ${name} -- Personal Number: ${personalNumber}`);
    people.push(new Peron(name, personalNumber));
  }

  for (let p = 0; p < people.length; p++) {
    let person = people[p];
    console.log(
      `Name: ${person.name} -- Personal Number: ${person.personalNumber}`
    );
  }
}

//02. Towns
function solveE02(input) {
  class City {
    constructor(name, latitude, longitude) {
      this.name = name;
      this.latitude = latitude;
      this.longitude = longitude;
    }
  }

  for (let i = 0; i < input.length; i++) {
    let cityInfo = input[i].split(" | ");
    let city = new City(
      cityInfo[0],
      Number(cityInfo[1]).toFixed(2),
      Number(cityInfo[2]).toFixed(2)
    );
    console.log(
      `{ town: '${city.name}', latitude: '${city.latitude}', longitude: '${city.longitude}' }`
    );
  }
}

//03. Store Provision
function solveE03(stock, ordered) {
  let products = [];

  class Product {
    constructor(name, quantity) {
      this.name = name;
      this.quantity = quantity;
    }
  }

  for (let s = 0; s < stock.length - 1; s += 2) {
    let productName = stock[s];
    let productQuantity = Number(stock[s + 1]);

    products.push(new Product(productName, productQuantity));
  }

  for (let o = 0; o < ordered.length - 1; o += 2) {
    let productName = ordered[o];
    let productQuantity = Number(ordered[o + 1]);
    let isExist = false;
    for (let p = 0; p < products.length; p++) {
      let productListName = products[p].name;
      if (productListName === productName) {
        products[p].quantity = Number(products[p].quantity) + productQuantity;
        isExist = true;
      }
    }

    if (!isExist) {
      products.push(new Product(productName, productQuantity));
    }
  }

  for (let print = 0; print < products.length; print++) {
    console.log(`${products[print].name} -> ${products[print].quantity}`);
  }
}

//04. Movies
function solveE04(input) {
  let movies = [];

  input.forEach((el) => {
    if (el.includes("addMovie")) {
      let movie = el.replace("addMovie ", "");
      movies.push({ name: movie });
    } else if (el.includes("directedBy")) {
      let [name, director] = el.split(" directedBy ");
      movies.forEach((movie) => {
        if (movie.name === name) {
          movie.director = director;
        }
      });
    } else if (el.includes("onDate")) {
      let [name, date] = el.split(" onDate ");
      movies.forEach((movie) => {
        if (movie.name === name) {
          movie.date = date;
        }
      });
    }
  });

  for (let i = 0; i < movies.length; i++) {
    let movie = movies[i];
    if (movie.name != null && movie.date != null && movie.director != null) {
      console.log(JSON.stringify(movie));
    }
  }
}

//05. Inventory
function solveE05(input) {
  let heroes = [];
  for (const item of input) {
    let heroInfo = item.split(" / ");
    let curentHero = {};
    curentHero.name = heroInfo[0];
    curentHero.level = heroInfo[1];
    curentHero.items = heroInfo[2];
    heroes.push(curentHero);
  }
  heroes.sort((h1, h2) => h1.level - h2.level);

  heroes.forEach((hero) =>
    console.log(`Hero: ${hero.name}
level => ${hero.level}
items => ${hero.items}`)
  );
}

//06. Make a Dictionary
function solveE06(input) {
  class Word {
    constructor(termin, definitionW) {
      this.termin = termin;
      this.definitionW = definitionW;
    }
  }
  let dictionary = [];
  let terms = [];
  for (const item of input) {
    let currentWord = JSON.parse(item);
    let term = Object.keys(currentWord)[0];
    let definition = Object.values(currentWord)[0];
    if (!terms.includes(term)) {
      let word = new Word(term, definition);
      terms.push(term);
      dictionary.push(word);
    } else {
      for (let word of dictionary) {
        if (word.hasOwnProperty(term)) {
          word.definitionW(definition);
        }
      }
    }
  }

  dictionary.sort((w1, w2) => w1.termin.localeCompare(w2.termin));
  dictionary.forEach((word) =>
    console.log(`Term: ${word.termin} => Definition: ${word.definitionW}`)
  );
}

//07. Class Vehicle

function solveE07() {
  class Vehicle {
    constructor(type, model, parts, fuel) {
      this.type = type;
      this.model = model;
      this.parts = parts;
      this.fuel = fuel;
      this.parts.quality = this.parts.engine * this.parts.power;
    }

    drive(lostFuel) {
      return (this.fuel -= lostFuel);
    }
  }

  let parts = { engine: 6, power: 100 };
  let vehicle = new Vehicle("a", "b", parts, 200);
  vehicle.drive(100);
  console.log(vehicle.fuel);
  console.log(vehicle.parts.quality);
}
solveE07();
