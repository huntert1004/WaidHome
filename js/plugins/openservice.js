function getecs() {
    window.open("https://ecs-systems.netlify.app/");
    buffer = "ECS Initiated sir"
    document.getElementById("response").innerHTML = buffer;
    starttextanimation(buffer, question);
    speak(buffer);
}

function getnetflix() {

    window.open("https://www.netflix.com");
    buffer = "Netflix Initiated sir"
    document.getElementById("response").innerHTML = buffer;
    speak(buffer);
    history.push(['Command/Question is ' + question, "Answer is " + buffer]);
}

function getgithub() {
    window.open("https://www.github.com");
    buffer = "Github Initiated sir"
    document.getElementById("response").innerHTML = buffer;
    speak(buffer);
    history.push(['Command/Question is ' + question, "Answer is " + buffer]);
}

function getinstagram() {
    window.open("https://www.instagram.com");
    buffer = "Instagram Initiated sir"
    document.getElementById("response").innerHTML = buffer;
    speak(buffer);
    history.push(['Command/Question is ' + question, "Answer is " + buffer]);
}

function getamazon() {
    window.open("https://www.amazon.com");
    buffer = "Amazon Initiated sir"
    document.getElementById("response").innerHTML = buffer;
    speak(buffer);
    history.push(['Command/Question is ' + question, "Answer is " + buffer]);
}

function getebay() {
    window.open("https://www.ebay.com");
    buffer = "eBay Initiated sir"
    document.getElementById("response").innerHTML = buffer;
    speak(buffer);
    history.push(['Command/Question is ' + question, "Answer is " + buffer]);
}

function getfacebook() {
    window.open("https://www.facebook.com");
    buffer = "Facebook Initiated sir"
    document.getElementById("response").innerHTML = buffer;
    speak(buffer);
    history.push(['Command/Question is ' + question, "Answer is " + buffer]);
}

function gettwitter() {
    window.open("https://www.twitter.com");
    buffer = "Twitter Initiated sir"
    document.getElementById("response").innerHTML = buffer;
    speak(buffer);
    history.push(['Command/Question is ' + question, "Answer is " + buffer]);
}