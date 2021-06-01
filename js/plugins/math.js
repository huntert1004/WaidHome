function domath(question) {
    copy = question
    if (question.indexOf("calculate") >= 0) {
        var calc = question.split("calculate")[0];
        var question = question.split("calculate")[1];
        question = question[0];
    } else {
        question = question.replace("qwertyuiopasdfghjklzxcvbnm", "")
    }

    buffer = (eval(question));
    starttextanimation(buffer = joke_delivery, question = copy)
    speak(buffer);
}