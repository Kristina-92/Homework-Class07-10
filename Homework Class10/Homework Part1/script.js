// Homework Part 1

$(document).ready(function () {
    console.log("READY");
})

let input = $("#inputText");

let button = $("#btn").first();

button.click(function (){
    button.after($("<h1></h1>").text(input.val()).css("color", "blue"));
})
