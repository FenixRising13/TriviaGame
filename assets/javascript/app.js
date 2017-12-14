

$(document).ready(function () {
    // Global Variables
    // Score Counter
    var correctAnswers = 0;
    var wrongAnswers = 0;
    // Timer
    var number = 5;
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







    // ------------------Button Function------------------
    // $(".btn").on("click", function () {
    //     correctAnswers++;
    //     console.log(correctAnswers);
    // })
    // $(".panel-body").text(number);
    // ------------------Stop Function/Clear Interval------------------



    $("#start").on("click", function () {
        // ------------------Call firstQuestion------------------
        firstQuestion();
    });
    // ------------------firstQuestion Function------------------
    function firstQuestion() {
        $("h2").text("What year was the Nintendo Entertainment System released?");
        $("#answer1").text(answer[0]);
        $("#answer2").text(answer[1]);
        $("#answer3").text(answer[2]);
        $("#answer4").text(answer[3]);
        
         $(".btn").on("click", function () {
        correctAnswers++;
        console.log(correctAnswers);
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
                    stop();
                    changeQuestion();
                };
            };
        };
        startTimer()
    };

    // Start Button Calls startTimer/Calls firstQuestion

    // ------------------changeQuestion Function------------------
    function changeQuestion() {

        $("img").text("src=assets/images/pokemon.jpg alt='Pokemon'");
        $("h2").text("Which Pokemon was not an initial choice in Pokemon Red & Blue?");
        $("#answer1").text(answer2[0]);
        $("#answer2").text(answer2[1]);
        $("#answer3").text(answer2[2]);
        $("#answer4").text(answer2[3]);

        console.log(intervalId);

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
                    stop();
                    changeQuestion2();
                };
            };
        };
        startTimer()

    };
    // ------------------changeQuestion2 Function------------------
    function changeQuestion2() {
        $("h2").text("Which was a selectable character in Mario Bros 2?");
        $("#answer1").text(answer3[0]);
        $("#answer2").text(answer3[1]);
        $("#answer3").text(answer3[2]);
        $("#answer4").text(answer3[3]);

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
                    stop();
                    changeQuestion3();
                };
            };
        };
        startTimer()

    };

})



