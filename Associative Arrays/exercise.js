//---------------------Exercise----------------------------

//01. Word Tracker
function solveE01(input) {
  let findedWord = input.shift().split(" ");
  let map = new Map();

  for (let item of findedWord) {
    map.set(item, 0);
  }

  for (let word of input) {
    if (map.has(word)) {
      let newQuantity = map.get(word) + 1;
      map.set(word, newQuantity);
    }
  }

  Array.from(map.entries())
    .sort((a, b) => b[1] - a[1])
    .forEach((word) => console.log(`${word[0]} - ${word[1]}`));
}

//02. Odd Occurrences
function solveE02(input) {
  let map = new Map();

  let words = input.split(" ");
  for (let item of words) {
    item = item.toLowerCase();
    if (map.has(item)) {
      let quantity = map.get(item) + 1;
      map.set(item, quantity);
    } else {
      map.set(item, 1);
    }
  }

  let buff = "";
  let filterResult = Array.from(map).filter(([key, value]) => {
    return value % 2 != 0;
  });
  for (const key of filterResult) {
    buff += key[0] + " ";
  }
  console.log(buff);
}

//03. Piccolo
function solveE03(input) {
  let parkingCar = new Set();
  for (let item of input) {
    let [direction, number] = item.split(", ");
    if (direction === "IN") {
      parkingCar.add(number);
    } else {
      parkingCar.delete(number);
    }
  }
  let resultSorting = Array.from(parkingCar)
    .sort((a, b) => a.localeCompare(b))
    .forEach((carNumber) => console.log(carNumber));
}

//04. Party Time

function solveE04(input) {
  let listVIP = [];
  let regularList = [];
  let startParty = false;
  for (let item of input) {
    let char = item.split("")[0].charCodeAt(0);
    if (startParty) {
      if (char >= 48 && char <= 57) {
        let index = listVIP.indexOf(item);
        listVIP.splice(index, 1);
      } else if (item != "PARTY") {
        let index = regularList.indexOf(item);
        regularList.splice(index, 1);
      }
    } else {
      if (char >= 48 && char <= 57) {
        listVIP.push(item);
      } else if (item != "PARTY") {
        regularList.push(item);
      } else {
        startParty = true;
      }
    }
  }
  console.log(regularList.length + listVIP.length);
  listVIP.forEach((g) => console.log(g));
  regularList.forEach((g) => console.log(g));
}

//05. Card Game
function solveE05(input) {
  let players = new Map();
  let enumCartPower = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };

  let enumCartType = {
    S: 4,
    H: 3,
    D: 2,
    C: 1,
  };

  for (let item of input) {
    let name = item.split(": ")[0];
    let playerCart = item.split(": ")[1].split(", ");
    let carts = new Set();

    if (players.has(name)) {
      carts = players.get(name);
    }

    for (let cart of playerCart) {
      carts.add(cart);
    }

    players.set(name, carts);
  }

  for (let [key, value] of players) {
    let sum = 0;
    for (let cart of value) {
      let cartInfo = cart.split("");
      let cartType = cartInfo.pop();
      let cartPower = cartInfo.join("");

      sum += enumCartType[cartType] * enumCartPower[cartPower];
    }

    console.log(`${key}: ${sum} `);
  }
}

//06. Company Users
function solveE06(input) {
  let companies = new Map();

  for (let item of input) {
    let [companyName, employee] = item.split(" -> ");
    if (!companies.has(companyName)) {
      companies.set(companyName, new Set());
    }
    let employees = companies.get(companyName);
    employees.add(employee);
  }

  let sortCompany = new Map([...companies].sort());
  for (let [key, value] of sortCompany) {
    console.log(key);
    for (let employee of value) {
      console.log(`-- ${employee}`);
    }
  }
}

//07. A Miner Task
function solveE07(input) {
  let resource = new Map();

  for (let i = 0; i < input.length; i += 2) {
    let name = input[i];
    let quantity = Number(input[i + 1]);

    if (!resource.has(name)) {
      resource.set(name, 0);
    }

    let newQuantity = resource.get(name) + quantity;
    resource.set(name, newQuantity);
  }
  Array.from(resource).forEach((r) => console.log(`${r[0]} -> ${r[1]}`));
}

//08. Travel Time

function solveE08(input) {
  let countties = new Map();
  for (let item of input) {
    let token = item.split(" > ");
    let country = token[0];
    let town = token[1];
    let cost = Number(token[2]);

    if (!countties.has(country)) {
      let towns = new Map();
      towns.set(town, cost);
      countties.set(country, towns);
    } else {
      let towns = countties.get(country);
      if (towns.has(town)) {
        if (towns.get(town) < cost) {
          continue;
        } else {
          towns.set(town, cost);
        }
      } else {
        towns.set(town, cost);
      }
    }
  }
  let sortCountries = Array.from(countties.entries()).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (let i = 0; i < sortCountries.length; i++) {
    let currentCountry = sortCountries[i];
    let name = currentCountry[0];
    let towns = currentCountry[1];
    let sortTowns = new Map([...towns].sort((a, b) => a[1] - b[1]));
    let buff = "" + name + " -> ";
    for (const [town, cost] of sortTowns) {
      buff += town + " -> " + cost + " ";
    }
    console.log(buff.trim());
  }
}

function print() {
  let text =
    "Hello, john@softuni.bg, you have been using john@softuni.bg in your registration.";
  let replacedText = text.replace(".bg", ".com");
  console.log(replacedText);
}

print();
