function getcurrenttime(question) {
    let currentDate = new Date();
    let cDay = currentDate.getDate()
    let cMonth = currentDate.getMonth() + 1
    let cYear = currentDate.getFullYear()
    let timeh = currentDate.getHours()
    let timem = currentDate.getMinutes()
    timeh = timeh - 12
    buffer = "It is " + timeh + ":" + timem + " in " + cMonth + "/" + cDay + "/" + cYear + " right now."
    starttextanimation(buffer, question)
    speak(buffer);
}

function getcurrentday(question) {
    let currentDate = new Date();

    let cDay = currentDate.getDate()
    let cMonth = currentDate.getMonth() + 1
    let cYear = currentDate.getFullYear()
    let timeh = currentDate.getHours()
    let timem = currentDate.getMinutes()
    timeh = timeh - 12
    buffer = "Today is " + cMonth + " " + cDay + " " + cYear;
    starttextanimation(buffer, question)
    speak(buffer);
}

function getcurrentsecond(question) {
    let currentDate = new Date();

    let timeS = currentDate.getSeconds()
    buffer = timeS + " seconds";
    starttextanimation(buffer, question)
    speak(buffer);
}