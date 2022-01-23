// Task 9
//Declare and assign an array of 6 integers. Ex 5,6,15,42.
let arrayIntegers = [5, 6, 15, 42];

//Declare and assign an array of strings. Ex Nikola Trajan Dejan
let arrayStrings = ["Nikola", "Trajan", "Dejan"];

//Print the first value of each array.
let firstIntegersEl = arrayIntegers[0]
console.log(firstIntegersEl);

let firstStringEl = arrayStrings[0]
console.log(firstStringEl);

//Print the arrays.
function printArray(array){
    for(i = 0; i < array.length; i ++){
        console.log(array[i]);
    }
}
printArray(arrayIntegers);
printArray(arrayStrings);

//Change the values of the first element in both arrays.
arrayIntegers[0] = 25;
console.log(arrayIntegers);

arrayStrings[0] = "Andrej";
console.log(arrayStrings);

//Assign a value to the 100 th member of the first array.
arrayIntegers[99] = 100;
console.log(arrayIntegers);

//Print how many elements the array has? 
console.log(arrayIntegers.length);

//What is the value of the 99th element in the array.
console.log(arrayIntegers[98]); //undefined

//Write an example of push.
arrayIntegers.push(10,121,256);
console.log(arrayIntegers);

//Write an example of pop.
let removedItem = arrayStrings.pop();
console.log(removedItem);
console.log(arrayStrings);

//What is the value of the 1000th element in both arrays?
console.log(arrayIntegers[999]); // undefined
console.log(arrayStrings[999]); //undefined

// 9.Write an if statement that prints "It's a cool number" if
// a number is even or larger than 100

let numbers = [1, 2, 3, 1115, 77, 33, 20]
function coolNumber(array){
    for(i = 0; i < array.length; i++){
        if (array[i] % 2 === 0 || array[i] > 100){
            console.log(`Number ${array[i]} is cool number`);
        } else {
            console.log(array[i])
        }
    }
    return array[i];
}
coolNumber(numbers);
