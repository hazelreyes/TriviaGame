var intervalID;
var clockRunning = false;
var time = 30;
var correct = 0;
var incorrect = 0;
var unanswered = 0;

$(".q-and-a").hide();
$("#done-button").hide();
$("#done").hide();
$("#correct-answers").hide();
$("#incorrect-answers").hide();
$("#unanswered").hide();
$("#clickBelowToBegin").hide();


function startScreen() {
    clockRunning = false;

    $("#time-remaining").hide();
    $("#countdown-time").hide();
    $(".q-and-a").hide();
    $("#done-button").hide();

    $("#clickBelowToBegin").text("Click 'START' to begin...").fadeIn("100000").fadeOut("100000")
    .fadeIn("100000").fadeOut("100000").fadeIn("100000");

    $("#start-button").on("click", function (event) {
        event.preventDefault();
        gameOn();
    });
}


startScreen();


var theQuestions = [
    {
        question: "Which celebrity was not in the Mickey Mouse Club?",
        answers: {
            a: "Britney Spears",
            b: "Christina Aguilera",
            c: "Beyonce",
            d: "Justin Timberlake"
        },
        correctAnswer: "c"
    },
    {
        question: "Which band member is not in the group Backstreet Boys?",
        answers: {
            a: "Brian Littrell",
            b: "Chris Kirkpatrick",
            c: "Howie Dorough",
            d: "Nick Carter"
        },
        correctAnswer: "b"
    },
    {
        question: "Which Spice Girl wore her long, blonde hair in pigtails?",
        answers: {
            a: "Ginger Spice",
            b: "Scary Spice",
            c: "Sporty Spice",
            d: "Baby Spice"
        },
        correctAnswer: "d"
    },
    {
        question: "Which baby was the scaredy-cat in Rugrats?",
        answers: {
            a: "Chuckie",
            b: "Tommy",
            c: "Phil",
            d: "Lil"
        },
        correctAnswer: "a"
    },
    {
        question: "Which team was not in the Legends of the Hidden Temple?",
        answers: {
            a: "Silver Snakes",
            b: "Blue Parrots",
            c: "Orange Iguanas",
            d: "Red Jaguars"
        },
        correctAnswer: "b"
    },
    {
        question: "Which teenager was the annoying one on Saved by the Bell?",
        answers: {
            a: "Slater",
            b: "Jessie",
            c: "Zack",
            d: "Screech"
        },
        correctAnswer: "d"
    },
    {
        question: "Which actor played Fez in That '70s Show?",
        answers: {
            a: "Wilmer Valderrama",
            b: "Topher Grace",
            c: "Ashton Kutcher",
            d: "Danny Masterson"
        },
        correctAnswer: "a"
    },
    {
        question: "Who shot Mr. Burns in The Simpsons?",
        answers: {
            a: "Krusty the Clown",
            b: "Homer Simpson",
            c: "Maggie Simpson",
            d: "Waylon Smithers"
        },
        correctAnswer: "c"
    },
];


function buildGame() {
    for (let i = 0; i < theQuestions.length; i++) {
        var p = $("<p>").text(theQuestions[i].question);
        var firstOption = $('<input type="radio" name="radio-' + i + '" value="a">'
            + theQuestions[i].answers.a + '  </input>"');
        var secondOption = $('<input type="radio" name="radio-' + i + '" value="b">'
            + theQuestions[i].answers.b + '  </input>"');
        var thirdOption = $('<input type="radio" name="radio-' + i + '" value="c">'
            + theQuestions[i].answers.c + '  </input>"');
        var fourthOption = $('<input type="radio" name="radio-' + i + '" value="d">'
            + theQuestions[i].answers.d + '  </input>"');

        $(".q-and-a").append(p, firstOption, secondOption, thirdOption, fourthOption);
    }
}


function count() {
    time--;
    $("#countdown-time").text(time + " seconds");
}


function gameOn() {
    $("h1").hide();
    $("#clickBelowToBegin").hide();
    $("#clickBelowToBegin").text("");
    $("#start-button").hide();
    $("#time-remaining").show();
    $("#countdown-time").show();
    $("#countdown-time").text("30 seconds");
    $(".q-and-a").show();
    $("#done-button").show();

    if (!clockRunning) {
        intervalId = setInterval(count, 1000);
        clockRunning = true;
    }

    buildGame();

    setTimeout(showResults, 30000);

    $("#done-button").on("click", function (event) {
        event.preventDefault();
        showResults();
    });
}


function results() {
    for (let i = 0; i < theQuestions.length; i++) {
        if (!$("input[name='radio-" + [i] + "']:checked").val()) {
            unanswered++;
        } else if ($("input[name='radio-" + [i] + "']:checked").val() === theQuestions[i].correctAnswer) {
            correct++;
        } else if ($("input[name='radio-" + [i] + "']:checked").val() !== theQuestions[i].correctAnswer) {
            incorrect++;
        }
    }
};


function showResults() {
    results();
    clearInterval(intervalId);
    clockRunning = false;

    $("#time-remaining").hide();
    $("#countdown-time").hide();
    $(".q-and-a").hide();
    $("#done-button").hide();
    $("#done").show();
    $("#correct-answers").show();
    $("#incorrect-answers").show();
    $("#unanswered").show();

    $("#correct-answers").append(correct);
    $("#incorrect-answers").append(incorrect);
    $("#unanswered").append(unanswered);
}