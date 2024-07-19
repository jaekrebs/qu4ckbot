$(document).ready(function () {
    var magicDuck = {};
    magicDuck.listofanswers = [
        "Quack-quack! Try again later.",
        "I’m just a duck, but that sounds like a web issue!",
        "Did you turn it off and on again? Ducks do it all the time.",
        "Waddle you do without my help?",
        "Hmm, I need more breadcrumbs to think.",
        "Just keep swimming... oops, wrong advice!",
        "Quacktastic! You're on the right path!",
        "Have you tried quacking at it?",
        "Time for a break! Take a dip in the pond.",
        "That’s above my pay grade, but I'll give it a quack!",
        "You’re not alone; even ducks get stuck sometimes.",
        "Quackademic problem, huh? I’ll need my thinking feathers.",
        "Don’t worry, every duck has its day!",
        "If at first you don’t succeed, quack again!",
        "Let’s paddle through this together.",
    ];

    magicDuck.getAnswer = function (question) {
        var randomNumber = Math.random();
        var randomAnswer = Math.floor(randomNumber * this.listofanswers.length);
        var answer = this.listofanswers[randomAnswer];

        $("#rubberDuck").toggle("pulsate");
        $("#answer").text(answer);
        $("#answer").fadeIn(3000);
        $("#rubberDuck").attr("src", "MagicDuckAnswer.png");

        console.log(question);
        console.log(answer);
    };
    $("#answer").hide();

    var onClick = function () {
        $("#answer").hide();
        $("#rubberDuck").attr("src", "MagicDuck.png");
        var question = prompt("QuackBot is here to help! What’s on your mind?");
        magicDuck.getAnswer(question);
    };

    $("#buttonAsk").click(onClick);
});

$("#rubberDuck").on("error", function() {
    console.error("Error loading image: " + $(this).attr("src"));
});
