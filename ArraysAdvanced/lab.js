//---------------------LAB----------------------------

//01. Sum First and Last
function solve01(arr) {
  let sum = Number(arr[0]) + Number(arr[arr.length - 1]);
  console.log(sum);
}

//02. Negative or Positive Numbers
function solve02(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    const element = arr[i];
    if (element < 0) {
    }
  }
}

solve02(["7", "-2", "8", "9"]);
