//---------------------LAB----------------------------

//01. Sum First and Last Array Elements
function solve01(input) {
  let firstElemnt = input[0];
  let lastElement = input[input.length - 1];
  console.log(firstElemnt + lastElement);
}

//02. Day of Week
function solve02(day) {
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  if (day >= 1 && day <= 7) {
    console.log(days[day - 1]);
  } else {
    console.log("Invalid day!");
  }
}

//03. Reverse an Array of Numbers
function solve03(num, startArr) {
  let newArr = [];
  let print = "";
  for (let i = 0; i < num; i++) {
    newArr.push(startArr[i]);
  }

  for (let i = newArr.length - 1; i >= 0; i--) {
    print += newArr[i] + " ";
  }
  console.log(print);
}

//04. Reverse in Place
function solve04(arr) {
  let print = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    print += arr[i] + " ";
  }
  console.log(print);
}

//05. Sum Even Numbers
function solve05(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let element = Number(arr[i]);
    if (element % 2 === 0) {
      sum += element;
    }
  }
  console.log(sum);
}

//06. Even and Odd Subtraction
function solve06(arr) {
  let sumEven = 0;
  let sumOdd = 0;

  for (let i = 0; i < arr.length; i++) {
    let element = Number(arr[i]);
    if (element % 2 === 0) {
      sumEven += element;
    } else {
      sumOdd += element;
    }
  }
  console.log(sumEven - sumOdd);
}

//07. Equal Arrays
function solve07(firstArr, secondArr) {
  let flagIdentical = true;
  let sum = 0;
  for (let i = 0; i < firstArr.length; i++) {
    const firstElement = firstArr[i];
    const secondElement = secondArr[i];
    sum += Number(firstElement);
    if (firstElement !== secondElement) {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      flagIdentical = false;
      break;
    }
  }
  if (flagIdentical) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}

//08. Condense Array to Number
function solve08(arr) {
  let newArray = [];
  while (arr.length > 1) {
    for (let i = 0; i < arr.length - 1; i++) {
      let currentElement = arr[i] + arr[i + 1];
      newArray.push(currentElement);
    }
    arr = newArray;
    newArray = [];
  }
  console.log(arr[0]);
}

solve08([5, 0, 4, 1, 2]);
