//---------------------Exercise----------------------------

//01. Ages
function solveE01(num) {
  if (num >= 0 && num <= 2) console.log("baby");
  else if (num >= 3 && num <= 13) console.log("child");
  else if (num >= 14 && num <= 19) console.log("teenager");
  else if (num >= 20 && num <= 65) console.log("adult");
  else if (num >= 65) console.log("elder");
  else console.log("out of bounds");
}

//02. Rounding
function solveE02(num, precision) {
  if (precision > 15) {
    precision = 15;
  }
  console.log(parseFloat(num.toFixed(precision)));
}

//03. Division
function solveE03(num) {
  //2, 3, 6, 7, and 10. You
  if (num % 10 == 0) console.log("The number is divisible by 10");
  else if (num % 7 == 0) console.log("The number is divisible by 7");
  else if (num % 6 == 0) console.log("The number is divisible by 6");
  else if (num % 3 == 0) console.log("The number is divisible by 3");
  else if (num % 2 == 0) console.log("The number is divisible by 2");
  else console.log("Not divisible");
}

//04. Vacation
function solveE04(people, type, day) {
  let total = 0;

  if (type === "Students") {
    switch (day) {
      case "Friday":
        total = people * 8.45;
        break;
      case "Saturday":
        total = people * 9.8;
        break;
      case "Sunday":
        total = people * 10.46;
        break;
    }

    if (people >= 30) {
      total = total * 0.85;
      console.log("Total price: " + total.toFixed(2));
    } else {
      console.log("Total price: " + total.toFixed(2));
    }
  } else if (type === "Business") {
    switch (day) {
      case "Friday":
        total = people * 10.9;
        if (people >= 100) {
          total = total - 10 * 10.9;
          console.log("Total price: " + total.toFixed(2));
        } else {
          console.log("Total price: " + total.toFixed(2));
        }
        break;
      case "Saturday":
        total = people * 15.6;
        if (people >= 100) {
          total = total - 10 * 15.6;
          console.log("Total price: " + total.toFixed(2));
        } else {
          console.log("Total price: " + total.toFixed(2));
        }
        break;
      case "Sunday":
        total = people * 16;
        if (people >= 100) {
          total = total - 10 * 16;
          console.log("Total price: " + total.toFixed(2));
        } else {
          console.log("Total price: " + total.toFixed(2));
        }
        break;
    }
  } else if (type === "Regular") {
    switch (day) {
      case "Friday":
        total = people * 15;
        break;
      case "Saturday":
        total = people * 20;
        break;
      case "Sunday":
        total = people * 22.5;
        break;
    }

    if (people >= 10 && people <= 20) {
      total = total * 0.95;
      console.log("Total price: " + total.toFixed(2));
    } else {
      console.log("Total price: " + total.toFixed(2));
    }
  }
}

//05. Leap Year
function solveE05(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("yes");
  } else {
    console.log("no");
  }
}

//06. Print And Sum
function solveE06(strarNum, endNum) {
  let sum = 0;
  let numbers = "";
  for (let i = strarNum; i <= endNum; i++) {
    sum += i;
    numbers += i + " ";
  }
  console.log(numbers);
  console.log("Sum: " + sum);
}

//07. Triangle Of Numbers
function solve(number) {
  for (let i = 1; i <= number; i++) {
    let numbers = "";
    for (let j = 0; j < i; j++) {
      numbers += i + " ";
    }
    console.log(numbers);
  }
}

//08. Multiplication Table
function solve(number) {
  for (let i = 1; i <= 10; i++) {
    let mulityply = number * i;
    console.log(`${number} X ${i} = ${mulityply}`);
  }
}

//09*. Login
function solve(input) {
  let username = input[0];
  let password = username.split("").reverse().join("");
  let inccorectAnswear = 0;

  for (let index = 1; index < input.length; index++) {
    if (password === input[index]) {
      console.log(`User ${username} logged in.`);
    } else {
      if (inccorectAnswear === 3) {
        console.log(`User ${username} blocked!`);
        break;
      } else {
        console.log("Incorrect password. Try again.");
        inccorectAnswear++;
      }
    }
  }
}

//10*. The Pyramid Of King Djoser
function solve(base, increment) {
  let stone = 0;
  let marble = 0;
  let gold = 0;
  let lapis = 0;
  let height = 0;

  for (let i = base; i > 0; i -= 2) {
    height++;
    if (i === 1) {
      gold += 1 * increment;
    } else if (i === 2) {
      gold += 2 * 2 * increment;
    } else {
      stone += (i - 2) * (i - 2) * increment;
      if (height % 5 == 0) {
        lapis += (i - 1) * 4 * increment;
      } else {
        marble += (i - 1) * 4 * increment;
      }
    }
  }
  console.log(`Stone required: ${Math.ceil(stone)}
  Marble required: ${Math.ceil(marble)}
  Lapis Lazuli required: ${Math.ceil(lapis)}
  Gold required: ${Math.ceil(gold)}
  Final pyramid height: ${Math.floor(height * increment)}`);
}

//11*. Bitcoin "Mining"
function solve(input) {
  const bitcointPrice = 11949.16;
  const golgPerGram = 67.51;
  let totalDay = 0;
  let firstDay = 0;
  let totalSum = 0;
  let totalBitCoint = 0;

  for (let i = 0; i < input.length; i++) {
    let curretGold = input[i];
    totalDay++;
    if (totalDay % 3 == 0) {
      curretGold *= 0.7;
    }
    totalSum += golgPerGram * curretGold;
    while (totalSum >= bitcointPrice) {
      totalBitCoint++;
      if (totalBitCoint == 1) {
        firstDay = totalDay;
      }
      totalSum -= bitcointPrice;
    }
  }
  console.log(`Bought bitcoins: ${totalBitCoint}`);

  if (firstDay != 0) {
    console.log(`Day of the first purchased bitcoin: ${firstDay}`);
  }
  console.log(`Left money: ${totalSum.toFixed(2)} lv.`);
}
