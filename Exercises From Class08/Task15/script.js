// Task 15
//Write javascript program that will find the average value 
//from the all the item values in the given array.

let arrayOrder = [1, 5, 10, 56, 85, 52, 6, 12]

function average(array){
    let result;
    let sum = 0;
    let i = 0;
    while(i < array.length){
        sum += array[i];
        i++;
        result = sum / array.length;
    }
    return Math.round(result);
}

let calculateAverage = average(arrayOrder);

console.log(calculateAverage);