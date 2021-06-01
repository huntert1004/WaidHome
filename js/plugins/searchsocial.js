function searchtwitter(question) {
    copy = question
    if (question.startsWith("search Twitter for ")) {
        question = question.split("search Twitter for ")[1];
    }
    window.open("https://twitter.com/search?q=" + question + "&src=typed_query");
    buffer = "Facebook Initiated sir"
    starttextanimation(buffer, question = copy);
    speak(buffer);
}

function searchgoogle(question) {
    copy = question
    if (question.startsWith("search the web")) {
        var txt = question.split("search the web")[1];
    }
    if (question.startsWith("search the google for")) {
        var txt = question.split("search the google for ")[1];
    }
    if (question.startsWith("search google for")) {
        var txt = question.split("search google for ")[1];
    }

    if (txt.indexOf(" ")) {
        txt = txt.replace(" ", "+")
    }
    txt += " !g"
    window.open("https://duckduckgo.com/?q=" + txt + "&atb=v245-1&ia=web");
    buffer = "Searched the web for you sir"
    starttextanimation(buffer, question = copy);
    speak(buffer);
}

function searchgithub(question) {
    copy = question
    if (question.startsWith("search the GitHub")) {
        var txt = question.split("search the GitHub")[1];
    }
    if (question.startsWith("search the GitHub for")) {
        var txt = question.split("search the GitHub for ")[1];
    }
    if (question.startsWith("search GitHub for")) {
        var txt = question.split("search GitHub for ")[1];
    }
    if (txt.indexOf(" ")) {
        txt = txt.replace(" ", "+")
    }
    txt += " !gh"
    window.open("https://duckduckgo.com/?q=" + txt + "&atb=v245-1&ia=web");
    buffer = "Searched the web for you sir"
    starttextanimation(buffer, question = copy);
    speak(buffer);
}

function ddgsearch(question) {
    copy = question
    if (question.startsWith("search the duck duck go")) {
        var txt = question.split("search the duck duck go")[1];
    }
    if (question.startsWith("search the duck duck go for")) {
        var txt = question.split("search the duck duck go for ")[1];
    }
    if (question.startsWith("search duck duck go for")) {
        var txt = question.split("search duck duck go for ")[1];
    }
    if (question.startsWith("search the ddg")) {
        var txt = question.split("search the ddg")[1];
    }
    if (question.startsWith("search the ddg for")) {
        var txt = question.split("search the ddg for ")[1];
    }
    if (question.startsWith("search ddg for")) {
        var txt = question.split("search ddg for ")[1];
    }

    if (txt == "") {
        var txt = hi.split("search the web")[1];
    }
    if (txt.indexOf(" ")) {
        txt = txt.replace(" ", "+")
    }

    window.open("https://duckduckgo.com/?q=" + txt + "&atb=v245-1&ia=web");
    buffer = "Searched the web for you sir"
    starttextanimation(buffer, question = copy);
    speak(buffer);
}