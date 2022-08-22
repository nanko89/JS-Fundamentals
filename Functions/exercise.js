//---------------------Exercise----------------------------

//01. Smallest of Three Numbers
function solveE01(first, second, third) {
  let smallestNum = Number.MAX_VALUE;
  if (first < smallestNum) {
    smallestNum = first;
  }
  if (second < smallestNum) {
    smallestNum = second;
  }

  if (third < smallestNum) {
    smallestNum = third;
  }

  console.log(smallestNum);
}

//02. Add and Subtract
function solveE02(first, second, third) {
  function sum(a, b) {
    return a + b;
  }
  function substract(a, b) {
    return a - b;
  }

  console.log(substract(sum(first, second), third));
}

//03. Characters in Range
function solveE03(a, b) {
  let buff = [];
  let start = a.codePointAt(0);
  let end = b.codePointAt(0);
  if (start > end) {
    for (let index = end + 1; index < start; index++) {
      buff.push(String.fromCharCode(index));
    }
  } else {
    for (let index = start + 1; index < end; index++) {
      buff.push(String.fromCharCode(index));
    }
  }
  console.log(buff.join(" "));
}

//04. Odd And Even Sum
function solveE04(num) {
  let sumOdd = 0;
  let sumEven = 0;
  num = num.toString();

  for (let i = 0; i < num.length; i++) {
    let currentNum = Number(num[i]);
    if (currentNum % 2 === 0) {
      sumEven += currentNum;
    } else {
      sumOdd += currentNum;
    }
  }

  console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}

//05. Palindrome Integers
function solveE05(input) {
  for (const item of input) {
    let num = item.toString();
    let palindrome = true;
    for (let i = 0; i <= num.length / 2; i++) {
      if (num[i] !== num[num.length - 1 - i]) {
        palindrome = false;
      }
    }
    if (palindrome) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}

//06. Password Validator
function solveE06(password) {
  let correctPass = true;
  let countNum = 0;
  if (password.length < 6 || password.length > 10) {
    correctPass = false;
    console.log("Password must be between 6 and 10 characters");
  }

  for (let i = 0; i < password.length; i++) {
    let asciiCode = password.codePointAt(i);
    if (
      (asciiCode >= 65 && asciiCode <= 90) ||
      (asciiCode >= 97 && asciiCode <= 122) ||
      (asciiCode >= 48 && asciiCode <= 57)
    ) {
      if (asciiCode >= 48 && asciiCode <= 57) {
        countNum++;
      }
      continue;
    } else {
      correctPass = false;
      console.log("Password must consist only of letters and digits");
      break;
    }
  }
  if (countNum < 2) {
    correctPass = false;
    console.log("Password must have at least 2 digits");
  }

  if (correctPass) {
    console.log("Password is valid");
  }
}

//07. NxN Matrix
function solveE07(num) {
  for (let row = 0; row < num; row++) {
    let colArr = [];
    for (let col = 0; col < num; col++) {
      colArr.push(num);
    }
    console.log(colArr.join(" "));
  }
}

//08. Perfect Number
function solveE08(num) {
  let sum = 0;
  if (num > 0) {
    for (let i = 1; i < num; i++) {
      if (num % i === 0) {
        sum += i;
      }
    }
    if (sum === num) {
      console.log("We have a perfect number!");
    } else {
      console.log(`It's not so perfect.`);
    }
  } else {
    console.log(`It's not so perfect.`);
  }
}

//09. Loading Bar
function solveE09(num) {
  let percent = num / 10;
  let point = 10 - percent;
  if (num === 100) {
    console.log("100% Complete!");
  } else {
    let info = "";
    info += num + "% [";
    for (let p = 1; p <= percent; p++) {
      info += "%";
    }
    for (let i = 1; i <= point; i++) {
      info += ".";
    }
    console.log(info + "]");
    console.log("Still loading...");
  }
}

//10. Factorial Division
function solveE10(num1, num2) {
  function factorialize(num) {
    if (num < 0) return -1;
    else if (num == 0) return 1;
    else {
      return num * factorialize(num - 1);
    }
  }

  let firstResult = factorialize(num1);
  let secondResult = factorialize(num2);

  console.log((firstResult / secondResult).toFixed(2));
}

solveE10(6, 2);
