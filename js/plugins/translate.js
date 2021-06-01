async function translate(question) {
    copylol = question
    copy = question
    if (question.startsWith("what is ") >= 0) {
        question = question.replace("what is ", "");
        question = question.replace("in ", "");
        question = question.split(" ");
        question = question[0]
    }
    if (question.indexOf("undefined") >= 0) {
        question = question.replace("undefined", "")
    }
    if (copy.indexOf("spanish") >= 0) {
        target = "es"
    }
    if (copy.indexOf("arabic") >= 0) {
        target = "ar"
    }
    if (copy.indexOf("chinese") >= 0) {
        target = "zh"
    }
    if (copy.indexOf("french") >= 0) {
        target = "fr"
    }
    if (copy.indexOf("german") >= 0) {
        target = "de"
    }
    if (copy.indexOf("hindi") >= 0) {
        target = "hi"
    }
    if (copy.indexOf("irish") >= 0) {
        target = "ga"
    }
    if (copy.indexOf("italian") >= 0) {
        target = "it"
    }
    if (copy.indexOf("japenese") >= 0) {
        target = "ja"
    }
    if (copy.indexOf("korean") >= 0) {
        target = "ko"
    }
    if (copy.indexOf("portuguese") >= 0) {
        target = "pt"
    }
    if (copy.indexOf("russian") >= 0) {
        target = "ru"
    }
    const res = await fetch("https://libretranslate.com/translate", {
        method: "POST",
        body: JSON.stringify({
            q: question,
            source: "en",
            target: target
        }),
        headers: {
            "Content-Type": "application/json"
        }

    });
    translation = await res.json();
    translation = translation.translatedText;
    if (translation.indexOf(".") >= 0) {
        translation = translation.replace(".", "")
    }
    starttextanimation(buffer, question = copylol)
    speak(buffer);
}