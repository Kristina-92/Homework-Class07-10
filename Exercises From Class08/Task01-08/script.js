// Task 1
//Declare a variable a.
//Assign the variable with the value of 7.
//Declare and asign a variable b with the value of 8.
//Declare a variable c and asign it the value of a + b.
//Print the value in the console.

// Task1 Solution
let a;
a = 7;
let b = 8;
let c = a + b;
console.log(c);

// Task 2
// Declare and asign an integer variable.
// Declare and asign a boolean variable.
// Declare and asign a string variable.
// Use the typeof operator to check the types of all assigned variables.

// Task2 Solution
let num = 10;
let value = true;
let string = "string";
console.log(typeof num);
console.log(typeof value);
console.log(typeof string);


// Task 3
// Declare 2 variables x and y and set them to 10 and 3.
// /Declare and asign a variable that would be the result of division of 10 and 3.
// Declare and asign a variable that would be the whole part of the division of 10 and 3.
// Declare and asign a variable that would be the remainder of the division of 10 and 3.

// Task3 Solution
let x = 10;
let y = 3;
let division = x / y;
console.log(division);

let wholePartDivision = Math.floor(x/y);
console.log(wholePartDivision);

let remainder = x % y;
console.log(remainder);


// Task 4
//Declare a variable name.
//Assign the variable to your name.
//Declare and assign a variable lastName with the value of your last name.
//Print Hello, and your name and last name in the console from the previous variables.

// Task4 Solution
let name = "Kristina";
let lastName = "Kokolanska";
console.log(`Hello ${name} ${lastName}`);

// Task 5
//Declare two number variables and assign them any number
//Write an if statement that prints the larger one in console

// Task5 Solution
let num1 = 10;
let num2 = 25;

if (num1 > num2) {
    console.log(`Largest number between ${num1} and ${num2} is ${num1}`)
} else {
    console.log(`Largest number between ${num1} and ${num2} is ${num2}`)
}

// Task 6
//Declare a variable and assign any number to it
//Write an if statement that finds out if a number is even OR larger than 100
//If it is print in the console: The number is cool!

// Task6 Solution
let number = 22;

if (number % 2 === 0 || number > 100) {
    console.log("The number is cool");
}else {
    console.log("Enter new number")
} 

// Task 7
//Write a JavaScript program that will convert denars to euros.
//One euro is 61.5 denars.

// Task7 Solution
let denars = (prompt("Please enter amount of Denars you want to convert to Euros"));
let eur = denars / 61.5;

console.log(eur);


// Task 8
//Declare a variable named day
//Initialize it with some day of the week as string
//Write a switch that prints "I am in SEDC" in console on the days you have classes in sedc
//Print "I am free" in console on all other days

//Task8 Solution
let day;
day = "Tuesday";

switch(day){
    case "Monday":
        console.log("I am in SEDC");
        break;

    case "Tuesday":
        console.log("I am free");
        break;

    case "Wednesday":
        console.log("I am in SEDC");
        break;    
    
    case "Thursday":
        console.log("I am free");
        break;
    
    case "Friday":
        console.log("I am free");
        break;
    
    case "Saturday":
        console.log("I am freee");
        break;
        
    case "Sunday":
        console.log("I am free");
        break;    

    default:
        console.log("Enter a day of the week");
}