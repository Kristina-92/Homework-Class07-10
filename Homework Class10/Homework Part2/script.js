
// Homework Part 2

$(document).ready(function(){
    console.log("READY");
})


let textInput = $("#inputText");
let color = $("#inputColor");

let button = $("#btn1").first();

button.click(function(){

    if(textInput.val() == "" || !isValidColor(color.val())){
        textInput.before($("<h3></h3>").text("Error! You've entered an invalid color or an empty text. Try again!"));
    } else {
        button.after($("<h1></h1>").text(textInput.val()).css("color", color.val()));
    }

})

function isValidColor(inputColor){

let element = new Option().style;
  element.color = inputColor;
  return element.color == inputColor.toLowerCase();
}

