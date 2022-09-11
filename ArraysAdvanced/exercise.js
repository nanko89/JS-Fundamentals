//---------------------Exercise----------------------------

//01. Train

function solveE01(input) {
  let wagons = input.shift().split(" ").map(Number);
  let maxCapacity = Number(input.shift());

  for (const command of input) {
    let currrentCommand = command.split(" ");
    if (currrentCommand.length === 2) {
      wagons.push(Number(currrentCommand[1]));
    } else {
      let people = Number(currrentCommand[0]);

      for (let i = 0; i < wagons.length; i++) {
        let peopleInWagon = wagons[i];

        let freeSeats = maxCapacity - peopleInWagon;
        if (people > freeSeats) {
          continue;
        } else {
          wagons[i] = peopleInWagon + people;
          people = 0;
        }
      }
    }
  }
  console.log(wagons.join(" "));
}

//02. Distinct Array
function solveE02(input) {
  for (let i = 0; i < input.length - 1; i++) {
    const firstElement = input[i];
    for (let j = i + 1; j < input.length; j++) {
      const secondElement = input[j];
      if (firstElement === secondElement) {
        input.splice(j, 1);
        j--;
      }
    }
  }
  console.log(input.join(" "));
}

//03. House Party
function solveE03(input) {
  let people = [];
  for (const item of input) {
    let invitation = item.split(" ");
    let name = invitation[0];
    if (invitation.includes("not")) {
      if (people.includes(name)) {
        people.splice(people.indexOf(name), 1);
      } else {
        console.log(`${name} is not in the list!`);
      }
    } else {
      if (people.includes(name)) {
        console.log(`${name} is already in the list!`);
      } else {
        people.push(name);
      }
    }
  }
  console.log(people.join("\n"));
}

//04. Sorting
function solveE04(input) {
  let newArray = [];
  input.sort((a, b) => b - a);

  while (input.length !== 0) {
    newArray.push(input.shift());
    if (input.length > 0) {
      newArray.push(input.pop());
    }
  }

  console.log(newArray.join(" "));
}

//05. Sort an Array by 2 Criteria
function solveE05(arr) {
  let result = arr.sort((a, b) => {
    if (a.length - b.length === 0) {
      return a.localeCompare(b);
    } else {
      return a.length - b.length;
    }
  });
  console.log(result.join("\n"));
}

//06. Bomb Numbers
function solveE06(input, detonate) {
  let bomb = detonate[0];
  let power = detonate[1];
  for (let i = 0; i < input.length; i++) {
    const element = input[i];
    if (element === bomb) {
      let fullPower = 1 + 2 * power;

      input.splice(Math.max(i - power, 0), fullPower);
      i = i - power - 1;
    }
  }
  let sum = 0;
  for (const item of input) {
    sum += item;
  }
  console.log(sum);
}

//07. Search for a Number
function solveE07(arr, details) {
  let numberOfElements = details[0];
  let deleteElement = details[1];
  let searchingElement = details[2];
  let occurs = 0;
  let newArray = arr.slice(0, numberOfElements);
  newArray.splice(0, deleteElement);
  for (let item of newArray) {
    if (item === searchingElement) {
      occurs++;
    }
  }
  console.log(`Number ${searchingElement} occurs ${occurs} times.`);
}

//8	. *Array Manipulator
function solveE08(arr, manipulations) {
  for (const item of manipulations) {
    let command = item.split(" ");
    let currentValues = command.shift();
    let sumPair = 0;
    command = command.map(Number);

    switch (currentValues) {
      case "add":
        let currentIndexToAdd = command[0];
        let currentElementToAdd = command[1];
        arr.splice(currentIndexToAdd, 0, currentElementToAdd);
        break;
      case "addMany":
        let indexToAddMany = command.shift();
        arr.splice(indexToAddMany, 0, ...command);
        break;
      case "remove":
        let indexToRemove = command[0];
        arr.splice(indexToRemove, 1);
        break;
      case "shift":
        let positon = command[0];
        for (let i = 0; i < positon; i++) {
          let firstElement = arr.shift();
          arr.push(firstElement);
        }
        break;
      case "sumPairs":
        if (arr.length % 2 !== 0) {
          arr.push(0);
        }
        let newArr = [];
        for (let i = 0; i < arr.length - 1; i += 2) {
          sumPair += arr[i] + arr[i + 1];
          newArr.push(sumPair);
          sumPair = 0;
        }
        arr = [...newArr];
        break;
      case "contains":
        console.log(arr.indexOf(command[0]));
        break;
      case "print":
        console.log(`[ ${arr.join(", ")} ]`);
        break;
    }
  }
}

//09*. Gladiator Inventory

function solveE09(input) {
  let inventory = input.shift().split(" ");
  for (let i = 0; i < input.length; i++) {
    let currentInput = input[i].split(" ");
    let command = currentInput.shift();

    switch (command) {
      case "Buy":
        let buyEquipment = currentInput[0];
        if (!inventory.includes(buyEquipment)) {
          inventory.push(buyEquipment);
        }
        break;
      case "Trash":
        let trashEquipment = currentInput[0];
        if (inventory.includes(trashEquipment)) {
          let deleteIndex = inventory.indexOf(trashEquipment);
          inventory.splice(deleteIndex, 1);
        }
        break;
      case "Repair":
        let repairEquipment = currentInput[0];
        if (inventory.includes(repairEquipment)) {
          let repairIndex = inventory.indexOf(repairEquipment);
          inventory.splice(repairIndex, 1);
          inventory.push(repairEquipment);
        }
        break;
      case "Upgrade":
        let firstEquipment = currentInput[0].split("-")[0];
        let secondEquipment = currentInput[0].split("-")[1];

        if (inventory.includes(firstEquipment)) {
          let updateIndex = inventory.indexOf(firstEquipment) + 1;
          let newEquipment = firstEquipment + ":" + secondEquipment;
          inventory.splice(updateIndex, 0, newEquipment);
        }
        break;
    }
  }
  console.log(inventory.join(" "));
}

//10. Build a Wall
function solveE10(input) {
  let isFinish = false;
  let workinCrewInDays = [];
  let totalYard = 0;

  while (!isFinish) {
    let total = 0;
    for (let day = 0; day < input.length; day++) {
      if (input[day] < 30) {
        input[day]++;
        total += 195;
      }
    }
    if (total === 0) {
      isFinish = true;
      break;
    }
    workinCrewInDays.push(total);
    totalYard += total;
  }
  console.log(workinCrewInDays.join(", "));
  console.log(totalYard * 1900 + " pesos");
}

solveE10([17]);
