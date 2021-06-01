function revealanwser(question) {
    var childiFrame = parent.document.getElementById("movie");
    var doc = childiFrame.contentDocument ||
        childiFrame.contentWindow.document;
    var answer = sessionStorage.getItem("answer");
    answer = answer.replace(/<\/?[^>]+(>|$)/g, "");
    answer = "What is " + answer

    doc.getElementById('answer').style = "color: black";
    buffer = "https://api.voicerss.org/?key=eb162b60623b425f84fdcc147778f353&hl=en-us&src=" + answer;
    var audio = document.getElementById('myAudio');
    audio.src = buffer
    audio.load();
    audio.play();
    starttextanimation(buffer, question)
    speak(buffer);

}