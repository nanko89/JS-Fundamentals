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
function solveE05() {}
solveE04([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
