//---------------------LAB----------------------------

//01. Multiply Number by 2
function solve01(x) {
  console.log(x * 2);
}
solve01(2);

//02. Student Information
function solve02(name, age, grade) {
  console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`);
}
solve02("John", 15, 5.54678);

//03. Excellent grade
function solve03(grade) {
  if (grade >= 5.5) {
    console.log("Excellent");
  } else {
    console.log("Not excellent");
  }
}
solve03(5.5);

//04. Foreign Languages
function solve04(country) {
  if (country === "England" || country === "USA") {
    console.log("English");
  } else if (
    country === "Spain" ||
    country === "Argentina" ||
    country === "Mexico"
  ) {
    console.log("Spanish");
  } else {
    console.log("unknown");
  }
}
solve04("USA");

// 05. Month Printer
function solve05(number) {
  if (number == 1) {
    console.log("January");
  } else if (number == 2) {
    console.log("February");
  } else if (number == 3) {
    console.log("March");
  } else if (number == 4) {
    console.log("April");
  } else if (number == 5) {
    console.log("May");
  } else if (number == 6) {
    console.log("June");
  } else if (number == 7) {
    console.log("July");
  } else if (number == 8) {
    console.log("August");
  } else if (number == 9) {
    console.log("September");
  } else if (number == 10) {
    console.log("October");
  } else if (number == 11) {
    console.log("November");
  } else if (number == 12) {
    console.log("December");
  } else {
    console.log("Error!");
  }
}
solve05("February");

//06. Theatre Promotions
function solve06(day, age) {
  if (day === "Weekday" && age >= 0 && age <= 18) console.log("12$");
  else if (day === "Weekend" && age >= 0 && age <= 18) console.log("15$");
  else if (day === "Holiday" && age >= 0 && age <= 18) console.log("5$");
  else if (day === "Weekday" && age > 18 && age <= 64) console.log("18$");
  else if (day === "Weekend" && age > 18 && age <= 64) console.log("20$");
  else if (day === "Holiday" && age > 18 && age <= 64) console.log("12$");
  else if (day === "Weekday" && age > 64 && age <= 122) console.log("12$");
  else if (day === "Weekend" && age > 64 && age <= 122) console.log("15$");
  else if (day === "Holiday" && age > 64 && age <= 122) console.log("10$");
  else console.log("Error!");
}
solve06("Weekday", 42);

//07. Numbers from 1 to 5
function solve07() {
  for (let i = 0; i < 5; i++) {
    console.log(i + 1);
  }
}
solve07();

//08. Divisible by 3
function solve08() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) console.log(i);
  }
}
solve08();

//09. Numbers from N to 1
function solve09(num) {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
}
solve09(6);

//10. Numbers from M to N
function solve10(mNumber, nNumber) {
  for (let i = mNumber; i >= nNumber; i--) {
    console.log(i);
  }
}
solve10(7, 1);

//11. Sum of Odd Numbers
function solve11(num) {
  let sum = 0;
  let currentNum = 0;
  while (num != 0) {
    currentNum++;
    if (currentNum % 2 != 0) {
      console.log(currentNum);
      num--;
      sum += currentNum;
    }
  }

  console.log("Sum: " + sum);
}
