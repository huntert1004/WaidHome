function getwiki(question) {
    if (question.startsWith("Jarvis ")) {
        question = question.replace("Jarvis ", "")[1];
    }
    if (question.startsWith("search Wikipedia for ")) {
        question = question.split("search Wikipedia for ")[1];
    }
    if (question.startsWith("search wikipedia for ")) {
        question = question.split("search Wikipedia for ")[1];
    }
    if (question.startsWith("search wiki for ")) {
        question = question.split("search Wikipedia for ")[1];
    }
    window.open("https://en.wikipedia.org/w/index.php?search=" + question);
    buffer = "Searched Wikipedia"
    starttextanimation(buffer)
    speak(buffer);
}