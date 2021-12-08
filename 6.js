// Odd or Even

function oddOrEven(num) {
    if (num % 2 === 0) {
        return num + " is an even number";
    }
    else {
        return num + " is an odd number"
    }
}

console.log(oddOrEven(6));
console.log(oddOrEven(13));