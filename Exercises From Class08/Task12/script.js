//Write a JavaScript program that will find the sum of all items in the given array,  
//make it dynamic, so the result will change if the array is changed. 

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array2 = [2, 4, 6, 8, 10, 12, 14, 100, 200];

function sum(array){
    let sum = 0;
    for(i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}

let result1 = sum(array1);
console.log(result1);

let result2 = sum(array2)
console.log(result2);