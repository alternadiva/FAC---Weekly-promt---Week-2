//Sum of elements

function addNums(arr) {
  console.log("Sum of elements")
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

let total = addNums([4, 7, 12, 11]);
console.log(total);
total = addNums([4, 5, 6, 7, 8, 9]);
console.log(total);
console.log(total - total);