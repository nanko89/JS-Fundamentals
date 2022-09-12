//---------------------LAB----------------------------

//01. Phone Book

function solve01(input) {
  let phoneBook = {};
  for (let item of input) {
    let name = item.split(" ")[0];
    let number = item.split(" ")[1];
    phoneBook[name] = number;
  }

  for (let contact in phoneBook) {
    console.log(`${contact} -> ${phoneBook[contact]}`);
  }
}

//02. Meetings
function solve02(input) {
  let meeting = {};
  for (let line of input) {
    let weekday = line.split(" ")[0];
    let name = line.split(" ")[1];

    if (meeting.hasOwnProperty(weekday)) {
      console.log(`Conflict on ${weekday}!`);
    } else {
      meeting[weekday] = name;
      console.log(`Scheduled for ${weekday}`);
    }
  }

  for (let meetingDay in meeting) {
    console.log(`${meetingDay} -> ${meeting[meetingDay]}`);
  }
}

//03. Address Book

function solve03(input) {
  let addressBook = {};

  for (let line of input) {
    let [name, address] = line.split(":");
    addressBook[name] = address;
  }

  let entries = Object.entries(addressBook);
  entries
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach((e) => console.log(`${e[0]} -> ${e[1]}`));
}

//04. Storage

function solve04(input) {
  let storage = {};
  for (let item of input) {
    let product = item.split(" ")[0];
    let quantity = Number(item.split(" ")[1]);
    if (storage.hasOwnProperty(product)) {
      quantity += storage[product];
    }
    storage[product] = quantity;
  }
  Object.entries(storage).forEach((product) =>
    console.log(`${product[0]} -> ${product[1]}`)
  );
}

//05. School Grades
function solve05(input) {
  let students = new Map();
  for (let item of input) {
    let current = item.split(" ");
    let name = current.shift();
    let grades = current;
    if (students.has(name)) {
      let currentGrades = students.get(name);
      for (let i = 0; i < grades.length; i++) {
        currentGrades.push(grades[i]);
      }
      students.set(name, currentGrades);
    } else {
      students.set(name, grades);
    }
  }

  let studentAvg = new Map();
  for (let s of students) {
    let avg = 0;
    s[1].map(Number).forEach((g) => (avg += g));
    avg = avg / s[1].length;
    studentAvg.set(s[0], avg);
  }

  Array.from(studentAvg.entries())
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach((student) =>
      console.log(`${student[0]}: ${student[1].toFixed(2)}`)
    );
}

//06. Word Occurrences
function solve06(input) {
  let sentence = new Map();

  for (let item of input) {
    if (sentence.has(item)) {
      let count = Number(sentence.get(item)) + 1;
      sentence.set(item, count);
    } else {
      sentence.set(item, 1);
    }
  }

  Array.from(sentence.entries())
    .sort((a, b) => b[1] - a[1])
    .forEach((word) => console.log(`${word[0]} -> ${word[1]} times`));
}

solve06([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
