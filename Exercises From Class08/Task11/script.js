//Write a for loop that counts from 1 to 20 but skips every second number.
//The numbers should be printed in the console.

let numbers = []
for (i = 0; i <= 20; i++){
    if (i % 2 == 1){
        numbers.push(i)
    }
}
console.log(numbers);
