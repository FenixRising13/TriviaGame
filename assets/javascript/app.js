$(document).ready(function() {
  // Global Variables
  // Score Counter
  var correctAnswers = 0;
  var incorrectAnswers = 0;
  var unAnswered = 0;
  var intervalId;

  // Answers
  var answer = ["1983", "1985", "1987", "1989"];
  var answer2 = ["Pikachu", "Charmander", "Bulbasaur", "Squirtle"];
  var answer3 = ["Toad", "Birdo", "Mario", "Luigi"];
  var answer4 = ["Starfox", "Mario", "Captain Falcon", "Ness"];

  // Stop Function
  function stop() {
    clearInterval(intervalId);
  }

  //  ------------------Start Button/Call firstQuestion------------------
  $("#start").on("click", function() {
    correctAnswers = 0;
    incorrectAnswers = 0;
    unAnswered = 0;
    firstQuestion();
  });

  // ------------------firstQuestion------------------
  function firstQuestion() {
    // Timer
    var number = 5;

    // Remove image ~ useful when game starts over
    $(".img").remove();
    // Update image div with new image
    $("#image").append(
      "<img class='img' src='assets/images/nintendo.jpg' alt='Nintendo' height='200px'>"
    );
    $("#prompt").text(
      "What year was the Nintendo Entertainment System released?"
    );
    $("#answer1")
      .css("display", "inline")
      .text(answer[0]);
    $("#answer2")
      .css("display", "inline")
      .text(answer[1]);
    $("#answer3")
      .css("display", "inline")
      .text(answer[2]);
    $("#answer4")
      .css("display", "inline")
      .text(answer[3]);

    $("#answer1").on("click", function() {
      incorrectAnswers++;
      console.log("incorrect Answers: " + incorrectAnswers);
      stop();
      firstAnswer();
    });
    $("#answer2").on("click", function() {
      correctAnswers++;
      console.log("Correct Answers: " + correctAnswers);
      stop();
      firstAnswer();
    });
    $("#answer3").on("click", function() {
      incorrectAnswers++;
      console.log("incorrect Answers: " + incorrectAnswers);
      stop();
      firstAnswer();
    });
    $("#answer4").on("click", function() {
      incorrectAnswers++;
      console.log("incorrect Answers: " + incorrectAnswers);
      stop();
      firstAnswer();
    });
    // startTimer for Question 1
    function startTimer() {
      $(".card-text").text(number);
      intervalId = setInterval(decrement, 1000);

      function decrement() {
        number--;
        $(".card-text").text(number);
        if (number === 0) {
          unAnswered++;
          console.log("unAnswered: " + unAnswered);
          stop();
          firstAnswer();
        }
      }
    }
    startTimer();
  }
  // firstAnswer------------------
  function firstAnswer() {
    $("#prompt").text("The correct answer was:");
    $("#answer1").css("display", "none");
    $("#answer2").text(answer[1]);
    $("#answer3").css("display", "none");
    $("#answer4").css("display", "none");

    // Timer
    var number = 3;

    function startTimer() {
      intervalId = setInterval(decrement, 1000);

      function decrement() {
        number--;
        if (number === 0) {
          stop();
          secondQuestion();
        }
      }
    }
    startTimer();
  }
  // ------------------secondQuestion------------------
  function secondQuestion() {
    $("#answer1").unbind();
    $("#answer2").unbind();
    $("#answer3").unbind();
    $("#answer4").unbind();
    // Timer
    var number = 5;

    $(".img").remove();
    $("#image").append(
      "<img class='img' src='assets/images/pokemon.jpg' alt='Pokemon' height='200px'>"
    );
    $("#prompt").text(
      "Which Pokemon was not an initial choice in Pokemon Red & Blue?"
    );
    $("#answer1")
      .css("display", "inline")
      .text(answer2[0]);
    $("#answer2")
      .css("display", "inline")
      .text(answer2[1]);
    $("#answer3")
      .css("display", "inline")
      .text(answer2[2]);
    $("#answer4")
      .css("display", "inline")
      .text(answer2[3]);

    $("#answer1").on("click", function() {
      correctAnswers++;
      console.log("Correct Answers: " + correctAnswers);
      stop();
      secondAnswer();
    });

    $("#answer2").on("click", function() {
      incorrectAnswers++;
      console.log("incorrect Answers: " + incorrectAnswers);
      stop();
      secondAnswer();
    });

    $("#answer3").on("click", function() {
      incorrectAnswers++;
      console.log("incorrect Answers: " + incorrectAnswers);
      stop();
      secondAnswer();
    });

    $("#answer4").on("click", function() {
      incorrectAnswers++;
      console.log("incorrect Answers: " + incorrectAnswers);
      stop();
      secondAnswer();
    });

    function startTimer() {
      $(".card-text").text(number);
      intervalId = setInterval(decrement, 1000);

      function decrement() {
        number--;
        $(".card-text").text(number);
        if (number === 0) {
          unAnswered++;
          console.log("unAnswered: " + unAnswered);
          stop();
          secondAnswer();
        }
      }
    }
    startTimer();
  }
  // secondAnswer------------------
  function secondAnswer() {
    $("#prompt").text("The correct answer was:");
    $("#answer1").text(answer2[0]);
    $("#answer2").css("display", "none");
    $("#answer3").css("display", "none");
    $("#answer4").css("display", "none");

    // Timer
    var number = 3;

    function startTimer() {
      intervalId = setInterval(decrement, 1000);

      function decrement() {
        number--;
        if (number === 0) {
          stop();
          thirdQuestion();
        }
      }
    }
    startTimer();
  }
  // ------------------thirdQuestion------------------
  function thirdQuestion() {
    $("#answer1").unbind();
    $("#answer2").unbind();
    $("#answer3").unbind();
    $("#answer4").unbind();

    // Timer
    var number = 5;

    $(".img").remove();
    $("#image").append(
      "<img class='img' src='assets/images/smb2.png' alt='Super Mario Bros 2' height='200px'>"
    );
    $("#prompt").text("Which was not a selectable character in Mario Bros 2?");
    $("#answer1")
      .css("display", "inline")
      .text(answer3[0]);
    $("#answer2")
      .css("display", "inline")
      .text(answer3[1]);
    $("#answer3")
      .css("display", "inline")
      .text(answer3[2]);
    $("#answer4")
      .css("display", "inline")
      .text(answer3[3]);

    $("#answer1").on("click", function() {
      incorrectAnswers++;
      console.log("incorrect Answers: " + incorrectAnswers);
      stop();
      thirdAnswer();
    });

    $("#answer2").on("click", function() {
      correctAnswers++;
      console.log("Correct Answers: " + correctAnswers);
      stop();
      thirdAnswer();
    });

    $("#answer3").on("click", function() {
      incorrectAnswers++;
      console.log("incorrect Answers: " + incorrectAnswers);
      stop();
      thirdAnswer();
    });

    $("#answer4").on("click", function() {
      incorrectAnswers++;
      console.log("incorrect Answers: " + incorrectAnswers);
      stop();
      thirdAnswer();
    });

    function startTimer() {
      $(".card-text").text(number);
      intervalId = setInterval(decrement, 1000);

      function decrement() {
        number--;
        $(".card-text").text(number);
        if (number === 0) {
          unAnswered++;
          console.log("unAnswered: " + unAnswered);
          stop();
          thirdAnswer();
        }
      }
    }
    startTimer();
  }
  // thirdAnswer------------------
  function thirdAnswer() {
    $("#prompt").text("The correct answer was:");
    $("#answer1").css("display", "none");
    $("#answer2").text(answer3[1]);
    $("#answer3").css("display", "none");
    $("#answer4").css("display", "none");

    // Timer
    var number = 3;

    function startTimer() {
      intervalId = setInterval(decrement, 1000);

      function decrement() {
        number--;
        if (number === 0) {
          stop();
          fourthQuestion();
        }
      }
    }
    startTimer();
  }
  // ------------------fourthQuestion------------------
  function fourthQuestion() {
    $("#answer1").unbind();
    $("#answer2").unbind();
    $("#answer3").unbind();
    $("#answer4").unbind();

    // Timer
    var number = 5;

    $(".img").remove();
    $("#image").append(
      "<img class='img' src='assets/images/fzero.jpg' alt='F-Zero'  height='200px'>"
    );
    $("#prompt").text(
      "Who was the main pilot in the classic SNES game F-Zero?"
    );
    $("#answer1")
      .css("display", "inline")
      .text(answer4[0]);
    $("#answer2")
      .css("display", "inline")
      .text(answer4[1]);
    $("#answer3")
      .css("display", "inline")
      .text(answer4[2]);
    $("#answer4")
      .css("display", "inline")
      .text(answer4[3]);

    $("#answer1").on("click", function() {
      incorrectAnswers++;
      console.log("incorrect Answers: " + incorrectAnswers);
      stop();
      fourthAnswer();
    });

    $("#answer2").on("click", function() {
      incorrectAnswers++;
      console.log("incorrect Answers: " + incorrectAnswers);
      stop();
      fourthAnswer();
    });

    $("#answer3").on("click", function() {
      correctAnswers++;
      console.log("Correct Answers: " + correctAnswers);
      stop();
      fourthAnswer();
    });

    $("#answer4").on("click", function() {
      incorrectAnswers++;
      console.log("incorrect Answers: " + incorrectAnswers);
      stop();
      fourthAnswer();
    });

    function startTimer() {
      $(".card-text").text(number);
      intervalId = setInterval(decrement, 1000);

      function decrement() {
        number--;
        $(".card-text").text(number);
        if (number === 0) {
          unAnswered++;
          console.log("unAnswered: " + unAnswered);
          stop();
          fourthAnswer();
        }
      }
    }
    startTimer();
  }
  // fourthAnswer------------------
  function fourthAnswer() {
    $("#prompt").text("The correct answer was:");
    $("#answer1").css("display", "none");
    $("#answer2").css("display", "none");
    $("#answer3").text(answer4[2]);
    $("#answer4").css("display", "none");

    // Timer
    var number = 3;

    function startTimer() {
      intervalId = setInterval(decrement, 1000);

      function decrement() {
        number--;
        if (number === 0) {
          stop();
          result();
        }
      }
    }
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
    // Changes #prompt and updates button text with usersResults
    $(".img").remove();
    $("#prompt").text("Results");
    $("#answer1")
      .css("display", "inline")
      .html("Correct: " + correctAnswers);
    $("#answer2")
      .css("display", "inline")
      .html("Incorrect: " + incorrectAnswers);
    $("#answer3")
      .css("display", "inline")
      .html("Unanswered: " + unAnswered);
    $("#answer4").css("display", "none");

    function startTimer() {
      intervalId = setInterval(decrement, 1000);

      function decrement() {
        number--;
        if (number === 0) {
          stop();
          if (unAnswered === 4) {
            alert("Were you planning on answering those?");
          } else if (correctAnswers < incorrectAnswers) {
            alert("Better luck next time");
          } else if (correctAnswers === 4) {
            alert("Great job... nerd.");
          } else {
            ("Hmm... try again?");
          }
        }
      }
    }
    startTimer();
  }
});
