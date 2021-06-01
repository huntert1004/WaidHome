function rolldie(question) {
    buffer = "Rolling"
    starttextanimation(buffer, question);
    speak(buffer);
    document.getElementById("myImg").src = "https://bestanimations.com/media/dice/1722074310rolling-dice-gif-7.gif";
    var audio = new Audio('https://jarvisai.netlify.app/audiofiles/dice/rolldice.mp3');
    audio.play();
    myVar = setTimeout(alertFunc, 3000);

    function alertFunc(question) {
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        if (randomNumber1 == 1) {
            document.getElementById("myImg").src = "https://jarvisai.netlify.app/dice1.png";
        }
        if (randomNumber1 == 2) {
            document.getElementById("myImg").src = "https://jarvisai.netlify.app/dice2.png";
        }
        if (randomNumber1 == 3) {
            document.getElementById("myImg").src = "https://jarvisai.netlify.app/dice3.png";
        }
        if (randomNumber1 == 4) {
            document.getElementById("myImg").src = "https://jarvisai.netlify.app/dice4.png";
        }
        if (randomNumber1 == 5) {
            document.getElementById("myImg").src = "https://jarvisai.netlify.app/dice5.png";
        }
        if (randomNumber1 == 6) {
            document.getElementById("myImg").src = "https://jarvisai.netlify.app/dice6.png";
        }
        buffer = "Your dice number is " + randomNumber1
        starttextanimation(buffer, question);
        speak(buffer);
    }

}

function flipcoin(question) {
    buffer = "Flipping"
    starttextanimation(buffer, question);
    speak(buffer);
    document.getElementById("myImg").src = "https://bestanimations.com/media/coins/1230776664flipping-coin-animated-gif-5.gif";
    var audio = new Audio('https://jarvisai.netlify.app/audiofiles/coin/flipcoin.wav');
    audio.play();
    myVar = setTimeout(alertFunct, 3000);

    function alertFunct(question) {
        var randomNumber1 = Math.floor(Math.random() * 2) + 1;
        if (randomNumber1 == 1) {
            document.getElementById("myImg").src = "https://jarvisai.netlify.app/frontcoin.png";
            coin = "front"
        }
        if (randomNumber1 == 2) {
            document.getElementById("myImg").src = "https://jarvisai.netlify.app/backcoin.png";
            coin = "back"
        }

        buffer = "Your coin is " + coin
        starttextanimation(buffer, question);
        speak(buffer);
    }
}

function randomnumber(question) {
    copy = question
    if (question.startsWith("pick a number between")) {
        question = question.replace("pick a number between ", "")
        question = question.replace("and ", "")
        question1 = question.split(" ")[1];
        question = question.split(" ")[0];
    }
    var x = Number(question1)
    var x1 = Number(question)
    anwser = x - x1;
    if (anwser < 0) {
        var randomNumber1 = Math.floor(Math.random() * x1) + x;
    } else {
        var randomNumber1 = Math.floor(Math.random() * x) + x1;
    }
    buffer = "Your random number is " + randomNumber1.toString();
    starttextanimation(buffer, question = copy);
    speak(buffer);
}