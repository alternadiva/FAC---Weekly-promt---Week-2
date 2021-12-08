// Sum of positive

function sumPositive(arr) {
    console.log("Sum of positive numbers")
    let positive = [0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positive.push(arr[i]);
        }
    }
    return positive.reduce((num1, num2) => num1 + num2);
}

console.log(sumPositive([44, -2, 8, 19, -52, 110]))
