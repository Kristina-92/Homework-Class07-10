// Task 20
//Write a function that takes an array of numbers and returns the number of numbers in the array that are even

let arrayOrder = [1, 5, 10, 56, 85, 52, 6, 12];

function arrayNums(array){
    let arrayEven = [];
    let numsEven;
    for(i = 0; i < array.length; i++){
        if (array[i] % 2 === 0){
            arrayEven.push(array[i]);
        }
        numsEven = arrayEven.length;
    }
    console.log(arrayEven);
    return numsEven;
}
resultEven = (arrayNums(arrayOrder));

console.log(resultEven);