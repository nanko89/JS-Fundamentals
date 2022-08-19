//---------------------LAB----------------------------

//01. Echo Type
function solve01(input) {
  if (typeof input === "string") {
    console.log("string");
    console.log(input);
  } else if (typeof input === "number") {
    console.log("number");
    console.log(input);
  } else {
    console.log(typeof input);
    console.log("Parameter is not suitable for printing");
  }
}

//02. Concatenate Names
function solve02(firstName, lastName, delimiter) {
  console.log(firstName + delimiter + lastName);
}

//03. Right Place
function solve03(string, char, result) {
  let input = string.replace("_", char);
  if (input === result) {
    console.log("Matched");
  } else {
    console.log("Not Matched");
  }
}

//04. Integer and Float
function solve04(first, second, third) {
  let sum = first + second + third;

  sum % 1 === 0 ? (sum += " - Integer") : (sum += " - Float");

  console.log(sum);
}

//05. Amazing Numbers
function solve(input) {
  let sum = 0;
  input = input.toString();
  for (let i = 0; i < input.length; i++) {
    let num = Number(input[i]);
    sum += num;
  }
  sum += "";
  sum.includes(9)
    ? console.log(`${input} Amazing? True`)
    : console.log(`${input} Amazing? False`);
}

//06. Gramophone
function solve06(band, album, song) {
  let duration = (album.length * band.length * song.length) / 2;
  rotations = Math.ceil(duration / 2.5);

  console.log(`The plate was rotated ${rotations} times.`);
}

//07. Required reading
function solve(pages, pagesPerHoure, days) {
  let numberOfHoure = pages / pagesPerHoure / days;
  console.log(numberOfHoure);
}

//08. Centuries to Minutes
function solve(centuries) {
  let years = centuries * 100;
  let days = Math.trunc(years * 365.2422);
  let hours = days * 24;
  let minutes = hours * 60;

  console.log(
    `${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`
  );
}

//09. Special Numbers
function solve(number) {
  for (let i = 1; i <= number; i++) {
    let sum = 0;
    if (i > 9) {
      let currentNum = i + "";
      for (let j = 0; j < currentNum.length; j++) {
        let num = Number(currentNum[j]);
        sum += num;
      }
    } else {
      sum += i;
    }

    if (sum === 5 || sum === 7 || sum === 11) {
      console.log(`${i} -> True`);
    } else {
      console.log(`${i} -> False`);
    }
  }
}

//10. Triples of Latin Letters
function solve(number) {
  for (let f = 0; f < number; f++) {
    for (let s = 0; s < number; s++) {
      for (let t = 0; t < number; t++) {
        let first = String.fromCharCode(97 + f);
        let second = String.fromCharCode(97 + s);
        let thirth = String.fromCharCode(97 + t);
        console.log(`${first}${second}${thirth}`);
      }
    }
  }
}
