

$(document).ready(function () {

// Score Counter
var correctAnswers = 0;
var wrongAnswers = 0;
var answer = [
    "banshee",
    "llama",
    "burrito"
]

// 
var button1 = document.getElementById("button1");
var button2 = "";
// Button Function
    $(".btn").on("click", function () {
        $(".btn").text(answer[0]);
        correctAnswers++;
        console.log(correctAnswers);
    })

})

