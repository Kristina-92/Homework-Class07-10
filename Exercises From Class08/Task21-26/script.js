// Task 21
//Write an HTML h1 element and select it in javascript by id

// Task21 Solution
let headingElement = document.getElementById("headingOne");
console.log(headingElement);

// Task 22
//Write two p elements and select them by class

// Task22 Solution
let firstParagraph = document.getElementsByClassName("pFirst");
console.log(firstParagraph[0]);

let secondParagraph = document.getElementsByClassName("pSecond");
console.log(secondParagraph[0]);

// Task 23
//Write two h3 elements and select the first one by tag name

// Task23 Solution
let h3First = document.getElementsByTagName("h3");
console.log(h3First[0]);

// Task 24
//Write a div and inside it write one h1 and 2 p elements
//Select the second p element through the div element 
//Hint: You must select the div element and try to find p from there

// Task24 Solution
let divElement = document.getElementsByTagName("div");
let divToEdit = divElement[0];

divToEdit.innerHTML += `<h1>Heading created using JS</h1>`

let paragraphOne = document.createElement("p");
let textPara = document.createTextNode("This is the first div paragraph");

paragraphOne.appendChild(textPara);

divToEdit.appendChild(paragraphOne);

divToEdit.innerHTML += `<p class="secondNew">This is the second div paragraph</p>`

let selectedParagraph = divToEdit.lastElementChild;
console.log(selectedParagraph);


// Task 25
//Write a h1 element with some text inside of it
//Change the text inside the h1 with Javascript

// Task25 Solution
let lastHeading = document.getElementsByTagName("h1");
let headingToChange = lastHeading[2];
headingToChange.innerText = "This is the replacement text node";

// Task 26
//Write an ul element in HTML
//In the ul element add 5 new li elements with Javascript

// Task26 Solution
let unorderedList = document.getElementsByTagName("ul");
let ulList = unorderedList[0];
console.log(ulList);

let arrayLi = ["One", "Two", "Three", "Four", "Five"];
for(i = 0; i < arrayLi.length; i++) {
    let li = document.createElement("li");
    li.innerText = arrayLi[i];
    ulList.appendChild(li);
}