

$(document).ready(function () {
    // Global Variables
    // Score Counter
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;
    var intervalId;

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

    // Stop Function
    function stop() {
        clearInterval(intervalId);
    };

    //  ------------------Start Button/Call firstQuestion------------------
    $("#start").on("click", function () {
        firstQuestion();
    });

    // ------------------firstQuestion------------------
    function firstQuestion() {

        // Timer
        var number = 7;

        // Remove image ~ useful when game starts over
        $(".img").remove();
        // Update image div with new image
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
            firstAnswer();
        });
        $("#answer2").on("click", function () {
            correctAnswers++;
            console.log("Correct Answers: " + correctAnswers);
            stop();
            firstAnswer();
        });
        $("#answer3").on("click", function () {
            wrongAnswers++;
            console.log("Wrong Answers: " + wrongAnswers);
            stop();
            firstAnswer();
        });
        $("#answer4").on("click", function () {
            wrongAnswers++;
            console.log("Wrong Answers: " + wrongAnswers);
            stop();
            firstAnswer();
        });
        // startTimer for Question 1
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
                    firstAnswer();
                };
            };
        };
        startTimer();
    };
    // firstAnswer------------------
    function firstAnswer() {
        $("h2").html("The correct answer was:");
        $("#answer1").text("");
        $("#answer2").text(answer[1]);
        $("#answer3").text("");
        $("#answer4").text("");

        // Timer
        var number = 3;

        function startTimer() {
            intervalId = setInterval(decrement, 1000);
            function decrement() {
                number--;
                if (number === 0) {
                    stop();
                    secondQuestion();
                };
            };
        };
        startTimer();

    };
    // ------------------secondQuestion------------------
    function secondQuestion() {
        $("#answer1").unbind();
        $("#answer2").unbind();
        $("#answer3").unbind();
        $("#answer4").unbind();
        // Timer
        var number = 7;

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
            secondAnswer();
        });

        $("#answer2").on("click", function () {
            wrongAnswers++;
            console.log("Wrong Answers: " + wrongAnswers);
            stop();
            secondAnswer();
        });

        $("#answer3").on("click", function () {
            wrongAnswers++;
            console.log("Wrong Answers: " + wrongAnswers);
            stop();
            secondAnswer();
        });

        $("#answer4").on("click", function () {
            wrongAnswers++;
            console.log("Wrong Answers: " + wrongAnswers);
            stop();
            secondAnswer();
        });

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
                    secondAnswer();
                };
            };
        };
        startTimer();

    };
    // secondAnswer------------------
    function secondAnswer() {
        $("h2").html("The correct answer was:");
        $("#answer1").text(answer2[0]);
        $("#answer2").text("");
        $("#answer3").text("");
        $("#answer4").text("");

        // Timer
        var number = 3;

        function startTimer() {
            intervalId = setInterval(decrement, 1000);
            function decrement() {
                number--;
                if (number === 0) {
                    stop();
                    thirdQuestion();
                };
            };
        };
        startTimer();

    }
    // ------------------thirdQuestion------------------
    function thirdQuestion() {
        $("#answer1").unbind();
        $("#answer2").unbind();
        $("#answer3").unbind();
        $("#answer4").unbind();

        // Timer
        var number = 7;

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
            thirdAnswer();
        });

        $("#answer2").on("click", function () {
            wrongAnswers++;
            console.log("Wrong Answers: " + wrongAnswers);
            stop();
            thirdAnswer();
        });

        $("#answer3").on("click", function () {
            wrongAnswers++;
            console.log("Wrong Answers: " + wrongAnswers);
            stop();
            thirdAnswer();
        });

        $("#answer4").on("click", function () {
            wrongAnswers++;
            console.log("Wrong Answers: " + wrongAnswers);
            stop();
            thirdAnswer();
        });

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
                    thirdAnswer();
                };
            };
        };
        startTimer();

    };
    // thirdAnswer------------------
    function thirdAnswer() {
        $("h2").html("The correct answer was:");
        $("#answer1").text(answer3[0]);
        $("#answer2").text("");
        $("#answer3").text("");
        $("#answer4").text("");

        // Timer
        var number = 3;

        function startTimer() {
            intervalId = setInterval(decrement, 1000);
            function decrement() {
                number--;
                if (number === 0) {
                    stop();
                    fourthQuestion();
                };
            };
        };
        startTimer();

    }
    // ------------------fourthQuestion------------------
    function fourthQuestion() {
        $("#answer1").unbind();
        $("#answer2").unbind();
        $("#answer3").unbind();
        $("#answer4").unbind();

        // Timer
        var number = 7;

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
            fourthAnswer();
        });

        $("#answer2").on("click", function () {
            wrongAnswers++;
            console.log("Wrong Answers: " + wrongAnswers);
            stop();
            fourthAnswer();
        });

        $("#answer3").on("click", function () {
            correctAnswers++;
            console.log("Correct Answers: " + correctAnswers);
            stop();
            fourthAnswer();
        });

        $("#answer4").on("click", function () {
            wrongAnswers++;
            console.log("Wrong Answers: " + wrongAnswers);
            stop();
            fourthAnswer();
        });

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
                    fourthAnswer();
                };
            };
        };
        startTimer();
    };
    // fourthAnswer------------------
    function fourthAnswer() {
        $("h2").html("The correct answer was:");
        $("#answer1").text("");
        $("#answer2").text("");
        $("#answer3").text(answer4[2]);
        $("#answer4").text("");

        // Timer
        var number = 3;

        function startTimer() {
            intervalId = setInterval(decrement, 1000);
            function decrement() {
                number--;
                if (number === 0) {
                    stop();
                    result();
                };
            };
        };
        startTimer();

    }
    // ------------------Results------------------
    function result() {
        $("#answer1").unbind();
        $("#answer2").unbind();
        $("#answer3").unbind();
        $("#answer4").unbind();

        // Timer
        var number = 3;
        // Changes h2 and updates button text with usersResults
        $("h2").html("Results");
        $("#answer1").html("Correct: " + correctAnswers);
        $("#answer2").html("Wrong: " + wrongAnswers);
        $("#answer3").html("UnAnswered: " + unAnswered);
        $("#answer4").html("");

        function startTimer() {
            intervalId = setInterval(decrement, 1000);
            function decrement() {
                number--;
                if (number === 0) {
                    stop();
                    if (unAnswered === 4) {
                        alert("Were you planning on answering those?");
                    }
                    else if (correctAnswers < wrongAnswers) {
                        alert("What year were you born? \n \n Better luck next time");
                    }
                    else if (correctAnswers === 4) {
                        alert("Great job... nerd.");
                    };
                };
            };
        };
        startTimer();

    };

});




