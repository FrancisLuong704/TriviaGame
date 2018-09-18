var questionArray = [
    "How many members were in the American rock band The White Stripes?",
    //Two
    "Come as You Are, a song by the grunge band Nirvana was released on which album?",
    //Nevermind
    "When referring to a type of music, what does R&B stand for?",
    //Rhythm and blues
    "Who interrupted Taylor Swift’s acceptance speech at the 2009 Video Music Awards?",
    //Kanye West
    "Award winning Latina pop artist Shakira was born in raised in what Country?"
    //Colombia
]
//all the answers
var answers = {
    0: [
        "A: 1",
        "B: 2",
        "C: 3",
        "D: 4"
    ],
    1: [
        "Nevermind",
        "Bleach",
        "In Utero",
        "Smells Like Punk Spirit"
    ],
    2: [
        "Rock and Blocks",
        "Red and Blue",
        "Rock and Blues",
        "Rhythm and Blues"
    ],
    3: [
        "Logic",
        "Eminem",
        "Kanye West",
        "Jay-Z"
    ],
    4: [
        "Colombia",
        "Mexico",
        "United States",
        "Venezuela"
    ]
}

var correctAnswerArray = [1, 0, 3, 2, 0]
var userGuessArray = [];
//arrays that pushes all right/wrong/unanswered answers into
var correctAnswer = 0;
var wrongAnswer = 0;
var unanswered = 0;

//countdown timer
var time = 10;
var intervalId;
var ques = 0
//this resets timer between questions
function reset() {
    time = 10;
    $(".timeLeft").text("10");
}
//this starts a count downwards
function timeDown() {
    intervalId = setInterval(count, 1000);
}
//stops the timer
function stop() {
    clearInterval(intervalId);
}
//countdown function that shows it and if the counter hits 0 
//than it also moves to next question and bumps up 1 number in unanswered array.
function count() {
    time--;
    if (time === 0) {
        stop();
        reset();
        timeDown();
        ques++;
        unanswered++;
        (userGuessArray).push("_");
        runQuestion();
    }
    $(".timeLeft").text(time);
}
//initialize game
function initializeGame() {
    reset();
    timeDown();
}
//this makes sure the screen is blank
$(".btn-light").hide();
$(".questions").hide();
$(".timeLeft").hide();
$(".timeText").hide();
//This will loop through all the questions and answers
function runQuestion() {
    console.log(answers.answers + ques[0])
    $(".questions").text(questionArray[ques]);
    $("#answer0").text(answers[ques][0]);
    $("#answer1").text(answers[ques][1]);
    $("#answer2").text(answers[ques][2]);
    $("#answer3").text(answers[ques][3]);
}
//clicking start will start it uuuuuuuuppppppppppppppp
$("#start").on('click', function () {
    $(".btn-light").show();
    $(".questions").show();
    $(".timeLeft").show();
    $(".timeText").show();
    $("#start").hide();
    correctAnswer = 0;
    wrongAnswer = 0;
    unanswered = 0;
    ques = 0;
    initializeGame();
    runQuestion()
})

//this is to check if the answer is right or wronfg
for (var i = 0; i < correctAnswerArray.length; i++) {
    if (userGuessArray[i] === correctAnswerArray[i]) {
        correctAnswer++;
    } else {
        wrongAnswer++;
    }
}

//end game function 
function endGame() {
    $(".btn").hide();
    $(".questions").hide();
    $(".timeLeft").hide();
    $(".timeText").hide();
    $(".correctAnswer").text("Right answer: " + correctAnswer);
    $(".wrongAnswer").text("Wrong answer: " + wrongAnswer);
    $(".unanswered").text("Unanswered: " + unanswered);
}
//this inputs whatever answer you put into an array if it equals a value(which is one of the answers)
$(".btn-light").on('click', function () {
    stop();
    ques++;
    var userGuess = parseInt($(this).attr('value'));
    if (userGuess >= '0' && userGuess <= '3') {
        (userGuessArray).push(userGuess);
        console.log(userGuessArray);
    }
    if (ques === questionArray.length) {
        //this is to check if the answer is right or wrong
        for (var i = 0; i < correctAnswerArray.length; i++) {
            if (userGuessArray[i] === correctAnswerArray[i]) {
                correctAnswer++;
            } else {
                wrongAnswer++;
            }
        }
    endGame();
    } else {
        initializeGame();
        runQuestion();
    }
})