//---------------------LAB----------------------------

//01. Sum First and Last
function solve01(arr) {
  let sum = Number(arr[0]) + Number(arr[arr.length - 1]);
  console.log(sum);
}

//02. Negative or Positive Numbers
function solve02(arr) {
  let newArray = [];
  for (const item of arr) {
    let element = Number(item);
    if (element < 0) {
      newArray.unshift(element);
    } else {
      newArray.push(element);
    }
  }
  console.log(newArray.join("\n"));
}

//03. First and Last K Numbers
function solve03(arr) {
  let kNum = arr.shift();
  let firstElement = [];
  let lastElement = [];
  for (let f = 0; f < kNum; f++) {
    firstElement.push(arr[f]);
    lastElement.unshift(arr[arr.length - 1 - f]);
  }

  console.log(firstElement.join(" "));
  console.log(lastElement.join(" "));
}

//04. Last K Numbers Sequance
function solve04(n, k) {
  let arr = [];
  arr.push(1);
  while (n > 1) {
    let count = k;
    let sum = 0;
    for (let index = arr.length - 1; index >= 0; index--) {
      if (count > 0) {
        sum += arr[index];
        count--;
      }
    }
    arr.push(sum);
    n--;
  }
  console.log(arr.join(" "));
}

//5.	Process Odd Numbers
function solve05(arr) {
  let newArr = [];
  for (let index = 0; index < arr.length; index++) {
    if (index % 2 !== 0) {
      newArr.push(arr[index] * 2);
    }
  }
  newArr.reverse();
  console.log(newArr.join(" "));
}

function solve05new(numbers) {
  (numbers) =>
    numbers
      .filter((el, i) => i % 2 === 1)
      .map((x) => x * 2)
      .reverse()
      .join(" ");
}

//06. Smallest Two Numbers
function solve06(arr) {
  let sortingElement = arr.sort((a, b) => {
    return a - b;
  });
  let smallestElement = sortingElement.slice(0, 2);

  console.log(smallestElement.join(" "));
}

//07. List Of Products
function solve07(arr) {
  let sortArr = arr.sort((a, b) => a.localeCompare(b));
  for (let i = 0; i < sortArr.length; i++) {
    console.log(`${i + 1}.${sortArr[i]}`);
  }
}

//08. Array Manipulations
function solve08(arr) {

solve07(["Potatoes", "Tomatoes", "Onions", "Apples"]);
