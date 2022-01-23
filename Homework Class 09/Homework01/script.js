
// Homework Part 1

let animal = {
    name: "Snoopy",
    kind: "Dog",
    msg: "Hello there!",
    speak: function(){
        let message = `"The ${this.kind} named ${this.name} says: ${this.msg}"`;
        return message;
    }
}
console.log(animal.speak());


// HTML Inputs

let button = document.getElementById("btn");

button.addEventListener('click', function(){
    let animal = {
    kind: document.getElementById("property-one").value,
    name: document.getElementById("name").value,
    message: document.getElementById("msg").value,
    }

let fullMessage = `"The ${animal.kind} named ${animal.name} says: ${animal.message}"`;

console.log(fullMessage);

let headingMessage = document.createElement('h3');
headingMessage.textContent = (`${fullMessage}`);
document.body.appendChild(headingMessage);

return fullMessage;
});





