//---------------------Exercise----------------------------

//01. Add and Subtract
function solveE01(array) {
  let orginalSum = 0;
  let modifiedSum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      orginalSum += array[i];
      array[i] = array[i] + i;
      modifiedSum += array[i];
    } else {
      orginalSum += array[i];
      array[i] = array[i] - i;
      modifiedSum += array[i];
    }
  }
  console.log(array);
  console.log(orginalSum);
  console.log(modifiedSum);
}

//02. Common Elements
function solveE02(firstArr, secondArr) {
  for (let i = 0; i < firstArr.length; i++) {
    for (let j = 0; j < secondArr.length; j++) {
      if (firstArr[i] === secondArr[j]) {
        console.log(firstArr[i]);
      }
    }
  }
}

//02. Common Elements
function solveE02New(firstArr, secondArr) {
  for (const element of firstArr) {
    if (secondArr.includes(element)) {
      console.log(element);
    }
  }
}

//03. Merge Arrays
function solveE03(firstArr, secondArr) {
  let newArray = "";
  for (let i = 0; i < firstArr.length; i++) {
    if (i % 2 == 0) {
      let sum = Number(firstArr[i]) + Number(secondArr[i]);
      newArray += sum;
    } else {
      newArray += firstArr[i] + secondArr[i];
    }
    if (i < firstArr.length - 1) {
      newArray += " - ";
    }
  }
  console.log(newArray);
}

//04. Array Rotation
function solvE04(arr, rotation) {
  for (let i = 0; i < rotation; i++) {
    let firstItem = arr[0];
    for (let j = 0; j < arr.length - 1; j++) {
      arr[j] = arr[j + 1];
    }
    arr[arr.length - 1] = firstItem;
  }

  console.log(arr.join(" "));
}

//05. Max Number

function solveE05(array) {
  let newArray = [];
  for (let i = 0; i < array.length - 1; i++) {
    let isMaxNum = true;
    for (let j = i + 1; j < array.length; j++) {
      const leftElement = array[i];
      const rightElement = array[j];
      if (leftElement < rightElement) {
        isMaxNum = false;
      }
    }
    if (isMaxNum) {
      newArray.push(array[i]);
    }
  }
  newArray.push(array[array.length - 1]);
  console.log(newArray.join(" "));
}

// 06. Equal Sums
function solveE06(arr) {
  let isNotEqual = true;
  for (let i = 0; i < arr.length; i++) {
    let leftSum = 0;
    let rightSum = 0;
    if (i !== arr.length - 1) {
      for (let right = i + 1; right < arr.length; right++) {
        rightSum += Number(arr[right]);
      }
    }
    if (i !== 0) {
      for (let left = 0; left < i; left++) {
        leftSum += Number(arr[left]);
      }
    }

    if (leftSum === rightSum) {
      console.log(i);
      isNotEqual = false;
    }
  }
  if (isNotEqual) {
    console.log("no");
  }
}

//07. Max Sequence of Equal Elements
function solveE07(arr) {
  let maxSequence = [];
  for (let i = 0; i < arr.length - 1; i++) {
    let currentElement = arr[i];
    let currentMaxSequence = [];
    currentMaxSequence.push(currentElement);
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        currentMaxSequence.push(arr[i]);
        if (currentMaxSequence.length > maxSequence.length) {
          maxSequence = currentMaxSequence;
        }
      } else {
        break;
      }
    }
  }
  console.log(maxSequence.join(" "));
}

//08. Magic Sum
function solveE08(arr, magicSum) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let currentSum = Number(arr[i]) + Number(arr[j]);
      if (currentSum === magicSum) {
        console.log(arr[i] + " " + arr[j]);
      }
    }
  }
}

//09. Dungeonest Dark

function solveE09(arr) {
  let array = arr[0].split("|");
  let health = 100;
  let coins = 0;
  let isDied = false;
  for (let room = 0; room < array.length; room++) {
    let element = array[room].split(" ");
    if (element[0] === "potion") {
      let diff = 0;
      health += Number(element[1]);
      if (health > 100) {
        diff = health - 100;
        health = 100;
      }
      console.log(`You healed for ${element[1] - diff} hp.`);
      console.log(`Current health: ${health} hp.`);
    } else if (element[0] === "chest") {
      coins += Number(element[1]);
      console.log(`You found ${element[1]} coins.`);
    } else {
      health -= Number(element[1]);
      if (health > 0) {
        console.log(`You slayed ${element[0]}.`);
      } else {
        console.log(`You died! Killed by ${element[0]}.`);
        console.log(`Best room: ${room + 1}`);
        isDied = true;
        break;
      }
    }
  }
  if (!isDied) {
    console.log(`You've made it!
Coins: ${coins}
Health: ${health}`);
  }
}
