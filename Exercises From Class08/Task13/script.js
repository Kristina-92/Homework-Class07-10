//Write a JavaScript program that will find the sum of all positive numbers in the array.

let array1 = [1, -2, 3, -4, 5, 6, -7, 8, 9, 10];
let array2 = [2, 4, -5, 8, -11, -13, 15, -100, 200];

function allPositive(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        if (array [i] > 0){
            sum += array[i];
        }
    }
    return sum;
}
let allPositive1 = allPositive(array1);
console.log(allPositive1);

let allPositive2 = allPositive(array2);
console.log(allPositive2);
