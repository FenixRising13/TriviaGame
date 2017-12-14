

$(document).ready(function () {
    // Global Variables
    // Score Counter
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;

    // Answers
    var answer = [
        "1983",
        "1985",
        "1987",
        "1989"
    ];
    var answer2 = [
        "pikachu",
        "charmander",
        "bulbasaur",
        "squirtle"
    ];
    var answer3 = [
        "Toad",
        "Roselin",
        "Birdo",
        "Daisy"
    ];
    var answer4 = [
        "Starfox",
        "Mario",
        "Captain Falcon",
        "Luther Vandross"
    ];


    //  ------------------Start Button/Call firstQuestion------------------
    $("#start").on("click", function () {
        firstQuestion();
    });
    // ------------------firstQuestion Function------------------
    function firstQuestion() {

        // Timer
        var number = 5;
        var intervalId;
        // $("#start").remove();
        $(".img").remove();
        $("#image").append("<img class='img' src='assets/images/nintendo.jpg' alt='Nintendo'>");
        $("h2").html("What year was the Nintendo Entertainment System released?");
        $("#answer1").text(answer[0]);
        $("#answer2").text(answer[1]);
        $("#answer3").text(answer[2]);
        $("#answer4").text(answer[3]);

        $("#answer1").on("click", function () {
            wrongAnswers++;
            console.log("Wrong Answers: " + wrongAnswers);
            stop();
        })
        $("#answer2").on("click", function () {
            correctAnswers++;
            console.log("Correct Answers: " + correctAnswers);
            stop();
        })
        $("#answer3").on("click", function () {
            wrongAnswers++;
            console.log("Wrong Answers: " + wrongAnswers);
            stop();
        })
        $("#answer4").on("click", function () {
            wrongAnswers++;
            console.log("Wrong Answers: " + wrongAnswers);
            stop();
        })

        // Stop Function
        function stop() {
            clearInterval(intervalId);
        };

        function startTimer() {
            $(".panel-body").text(number);
            intervalId = setInterval(decrement, 1000);
            function decrement() {
                number--;
                $(".panel-body").text(number);
                if (number === 0) {
                    unAnswered++;
                    console.log("unAnswered: " + unAnswered);
                    stop();
                    secondQuestion();
                };
            };
        };
        startTimer();
    };
    // ------------------secondQuestion Function------------------
    function secondQuestion() {

        // Timer
        var number = 5;
        var intervalId;

        $(".img").remove();
        $("#image").append("<img class='img' src=assets/images/pokemon.jpg alt='Pokemon'>");
        $("h2").text("Which Pokemon was not an initial choice in Pokemon Red & Blue?");
        $("#answer1").text(answer2[0]);
        $("#answer2").text(answer2[1]);
        $("#answer3").text(answer2[2]);
        $("#answer4").text(answer2[3]);

        $("#answer1").on("click", function () {
            correctAnswers++;
            console.log("Correct Answers: " + correctAnswers);
            stop();
        })

        $("#answer2").on("click", function () {
            wrongAnswers++;
            console.log("Wrong Answers: " + wrongAnswers);
            stop();
        })

        $("#answer3").on("click", function () {
            wrongAnswers++;
            console.log("Wrong Answers: " + wrongAnswers);
            stop();
        })

        $("#answer4").on("click", function () {
            wrongAnswers++;
            console.log("Wrong Answers: " + wrongAnswers);
            stop();
        })

        function stop() {
            clearInterval(intervalId);
        };

        function startTimer() {
            $(".panel-body").text(number);
            intervalId = setInterval(decrement, 1000);
            function decrement() {
                number--;
                $(".panel-body").text(number);
                if (number === 0) {
                    unAnswered++;
                    console.log("unAnswered: " + unAnswered);
                    stop();
                    thirdQuestion();
                };
            };
        };
        startTimer();

    };
    // ------------------thirdQuestion Function------------------
    function thirdQuestion() {

        // Timer
        var number = 5;
        var intervalId;

        $(".img").remove();
        $("#image").append("<img class='img' src=assets/images/smb2.png alt='SMB2'>");
        $("h2").text("Which was a selectable character in Mario Bros 2?");
        $("#answer1").text(answer3[0]);
        $("#answer2").text(answer3[1]);
        $("#answer3").text(answer3[2]);
        $("#answer4").text(answer3[3]);

        $("#answer1").on("click", function () {
            correctAnswers++;
            console.log("Correct Answers: " + correctAnswers);
            stop();
        })

        $("#answer2").on("click", function () {
            wrongAnswers++;
            console.log("Wrong Answers: " + wrongAnswers);
            stop();
        })

        $("#answer3").on("click", function () {
            wrongAnswers++;
            console.log("Wrong Answers: " + wrongAnswers);
            stop();
        })

        $("#answer4").on("click", function () {
            wrongAnswers++;
            console.log("Wrong Answers: " + wrongAnswers);
            stop();
        })

        function stop() {
            clearInterval(intervalId);
        };

        function startTimer() {
            $(".panel-body").text(number);
            intervalId = setInterval(decrement, 1000);
            function decrement() {
                number--;
                $(".panel-body").text(number);
                if (number === 0) {
                    unAnswered++;
                    console.log("unAnswered: " + unAnswered);
                    stop();
                    fourthQuestion();
                };
            };
        };
        startTimer();

    };
    // ------------------fourthQuestion Function------------------
    function fourthQuestion() {

        // Timer
        var number = 5;
        var intervalId;

        $(".img").remove();
        $("#image").append("<img class='img' src=assets/images/fzero.jpg alt='fZero'>");
        $("h2").text("Who was the main pilot in the classic SNES game F-Zero?");
        $("#answer1").text(answer4[0]);
        $("#answer2").text(answer4[1]);
        $("#answer3").text(answer4[2]);
        $("#answer4").text(answer4[3]);

        $("#answer1").on("click", function () {
            wrongAnswers++;
            console.log("Wrong Answers: " + wrongAnswers);
            stop();
        })

        $("#answer2").on("click", function () {
            wrongAnswers++;
            console.log("Wrong Answers: " + wrongAnswers);
            stop();
        })

        $("#answer3").on("click", function () {
            correctAnswers++;
            console.log("Correct Answers: " + correctAnswers);
            stop();
        })

        $("#answer4").on("click", function () {
            wrongAnswers++;
            console.log("Wrong Answers: " + wrongAnswers);
            stop();
        })

        function stop() {
            clearInterval(intervalId);
        };

        function startTimer() {
            $(".panel-body").text(number);
            intervalId = setInterval(decrement, 1000);
            function decrement() {
                number--;
                $(".panel-body").text(number);
                if (number === 0) {
                    unAnswered++;
                    console.log("unAnswered: " + unAnswered);
                    stop();
                    result();
                };
            };
        };
        startTimer();
    };
    // Results Function
    function result() {

        // Timer
        var number = 5;
        var intervalId;

        $("#answer4").remove();

        $("h2").html("Results");
        $("#answer1").html("Correct: " + correctAnswers);
        $("#answer2").html("Wrong: " + wrongAnswers);
        $("#answer3").html("UnAnswered: " + unAnswered);


        function startTimer() {
            $(".panel-body").text(number);
            intervalId = setInterval(decrement, 1000);
            function decrement() {
                number--;
                $(".panel-body").text(number);
                if (unAnswered === 4) {
                    alert("Were you planning on answering those?")
                }
                else if (correctAnswers < wrongAnswers) {
                    alert("What year were you born? \n Better luck next time");
                }
                else if (correctAnswers === 4) {
                    alert("Great job... nerd.");
                };
            };

        };

    };
});


