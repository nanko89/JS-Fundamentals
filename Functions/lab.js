//---------------------LAB----------------------------

//01. Format Grade
function solve01(grade) {
  if (grade < 3) {
    console.log("Fail (2)");
  } else if (grade >= 3 && grade < 3.5) {
    console.log(`Poor (${grade.toFixed(2)})`);
  } else if (grade >= 3.5 && grade < 4.5) {
    console.log(`Good (${grade.toFixed(2)})`);
  } else if (grade >= 4.5 && grade < 5.5) {
    console.log(`Very good (${grade.toFixed(2)})`);
  } else if (grade >= 5.5) {
    console.log(`Excellent (${grade.toFixed(2)})`);
  }
}

//02. Math Power
function solve02(num, pow) {
  console.log(Math.pow(num, pow));
}

//03. Repeat String
function solve03(str, repeat) {
  let print = "";
  for (let i = 0; i < repeat; i++) {
    print += str;
  }
  console.log(print);
}

//04. Orders
function solve04(name, count) {
  let price = 0.0;
  switch (name) {
    case "coffee":
      price = 1.5;
      break;
    case "water":
      price = 1.0;
      break;
    case "coke":
      price = 1.4;
      break;
    case "snacks":
      price = 2.0;
      break;
  }

  console.log((price * count).toFixed(2));
}

//05. Simple Calculator
function solve05(firsNum, secondNum, operator) {
  let result = 0;
  switch (operator) {
    case "multiply":
      result = Number(firsNum) * Number(secondNum);
      break;
    case "divide":
      result = Number(firsNum) / Number(secondNum);
      break;
    case "add":
      result = Number(firsNum) + Number(secondNum);
      break;
    case "subtract":
      result = Number(firsNum) - Number(secondNum);
      break;
  }
  console.log(result);
}

function solve05new(firsNum, secondNum, operator) {
  let currentOperator;
  switch (operator) {
    case "multiply":
      multiply(firsNum, secondNum);
      break;
    case "divide":
      divide(firsNum, secondNum);
      break;
    case "add":
      add(firsNum, secondNum);
      break;
    case "subtract":
      subtract(firsNum, secondNum);
      break;
  }

  function multiply(firsNum, secondNum) {
    console.log(Number(firsNum) * Number(secondNum));
  }
  function divide(firsNum, secondNum) {
    console.log(Number(firsNum) / Number(secondNum));
  }
  function add(firsNum, secondNum) {
    console.log(Number(firsNum) + Number(secondNum));
  }
  function subtract(firsNum, secondNum) {
    console.log(Number(firsNum) - Number(secondNum));
  }
}

//06. Sign Check
function solve06(first, second, third) {
  let signMinus = 0;
  if (Number(first) < 0) {
    signMinus++;
  }
  if (Number(second) < 0) {
    signMinus++;
  }

  if (Number(third) < 0) {
    signMinus++;
  }

  if (signMinus % 2 === 0) {
    console.log("Positive");
  } else {
    console.log("Negative");
  }
}

solve06(5, 12, -15);
