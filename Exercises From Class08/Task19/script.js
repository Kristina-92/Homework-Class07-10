// Task 19
//Write a function that takes a number and returns a message that tells you
//if the number is odd or even

function numMessage(number){
    if(number % 2 === 0){
        console.log(`The number ${number} is even`)
    } else{
        console.log(`The number ${number} is odd`)
    }
    return;
}

numMessage(3);
numMessage(250);