//---------------------LAB----------------------------

//01. Person Info
function solve01(firstName, lastName, age) {
  let person = {};
  person.firstName = firstName;
  person.lastName = lastName;
  person.age = age;
  return person;
}

//02. City

function solve02(city) {
  let entries = Object.entries(city);
  for (let [key, value] of entries) {
    console.log(`${key} -> ${value}`);
  }
}

//03. Convert to Object
function solve03(json) {
  let person = JSON.parse(json);
  let entries = Object.entries(person);
  for (let [key, value] of entries) {
    console.log(`${key}: ${value}`);
  }
}

//04. Convert to JSON
function solve04(firstName, lastName, hairColor) {
  let person = {};
  person.name = firstName;
  person.lastName = lastName;
  person.hairColor = hairColor;

  console.log(JSON.stringify(person));
}

//05. Cats

function solve05(input) {
  class Cat {
    constructor(catName, age) {
      this.catName = catName;
      this.age = age;
    }

    meow() {
      console.log(`${this.catName}, age ${this.age} says Meow`);
    }
  }

  for (let i = 0; i < input.length; i++) {
    let cat = new Cat(input[i].split(" ")[0], input[i].split(" ")[1]);
    cat.meow();
  }
}

//06. Songs
function solve06(input) {
  class Song {
    constructor(typeList, songName, time) {
      this.typeList = typeList;
      this.songName = songName;
      this.time = time;
    }
  }
  let songCount = input.shift();
  let typeList = input.pop();
  if (typeList === "all") {
    for (let i = 0; i < songCount; i++) {
      console.log(input[i].split("_")[1]);
    }
  } else {
    for (let i = 0; i < songCount; i++) {
      let currentSongInfo = input[i].split("_");
      if (currentSongInfo[0] === typeList) {
        console.log(currentSongInfo[1]);
      }
    }
  }
}
solve06([
  4,
  "favourite_DownTown_3:14",
  "listenLater_Andalouse_3:24",
  "favourite_In To The Night_3:58",
  "favourite_Live It Up_3:48",
  "listenLater",
]);
