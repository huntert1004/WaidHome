function alarm(question) {
    copy = question
    copylol = question
    var ms = Date.now()
    var d = new Date();

    sec = d.getSeconds()
    min = d.getMinutes()
    hours = d.getHours()
    question = question.replace("set a ", "");
    question = question.replace(" alarm", "");

    if (question.indexOf("pm") >= 0) {
        question = question.replace(" pm ", "");
        question = Number(question)
        question = question + 12
        if (hours > question) {
            question = hours - question;
        } else {
            question = question - hours;
        }
        x = question * 3600
    } else {
        question = question.replace(" am", "");
        question = Number(question)
        if (hours > question) {
            question = hours - question;
        } else {
            question = question - hours;
        }
        x = question * 3600
        if (60 > question) {
            minleft = 60 - min;
            minleft = minleft * 60
        } else {
            minleft = min - 60;
            minleft = minleft * 60
        }
        minleft = minleft - 3600
        x = x + minleft;
    }


    var eventTime = ms + x;
    // Timestamp - Sun, 21 Apr 2013 13:00:00 GMT
    var currentTime = ms; // Timestamp - Sun, 21 Apr 2013 12:30:00 GMT
    var diffTime = eventTime - currentTime;
    var duration = moment.duration(diffTime * 1000, 'milliseconds');
    var interval = 1000;
    copy = copy.replace("set a ", "");
    copy = copy.replace(" alarm", "");
    buffer = "Set your alarm for " + copy
    starttextanimation(buffer, question = copylol)
    timer = setInterval(function() {
        duration = moment.duration(duration - interval, 'milliseconds');
        buffer = duration.hours() + ":" + duration.minutes() + ":" + duration.seconds()
        // document.getElementById("response").innerHTML = buffer
        if (duration.hours() + ":" + duration.minutes() + ":" + duration.seconds() == "0:0:0") {
            buffer = "done"
            speak(buffer)
            var audio = document.getElementById('myAudio');
            audio.src = "https://jarvisai.netlify.app/audiofiles/alarm/as.mp3"
            audio.load();
            audio.play();
            clearInterval(timer);
        }
    }, interval);

}

function getreminder(question) {
    copy = question
    var ms = Date.now()
    var d = new Date();

    sec = d.getSeconds()
    min = d.getMinutes()
    hours = d.getHours()

    if (question.indexOf("second") >= 0 || question.indexOf("seconds") >= 0) {
        copy = question
        hi = question.replace("set a reminder for ", "")
        hi = hi.replace("labeled", "")
        hi = hi.split(" ");
        copy = hi;
        hi = hi[0];
        label = copy[3];
        if (hi.indexOf("seconds") >= 0) {
            question = hi.replace(" seconds", "")
        } else {
            question = hi.replace(" second", "")
        }
        var x = Number(question)
        buffer = "Timer set for " + hi

    }
    if (question.indexOf("minute") >= 0 || question.indexOf("minutes") >= 0) {
        copy = question
        hi = question.replace("set a reminder for ", "")
        hi = hi.replace("labeled", "")
        hi = hi.split(" ");
        copy = hi;
        hi = hi[0];
        label = copy[3];
        if (hi.indexOf("minutes") >= 0) {
            question = hi.replace(" minutes", "")
        } else {
            question = hi.replace(" minute", "")
        }
        var x = Number(question)
        x = x * 60;
        buffer = "Timer set for " + hi
    }
    if (question.indexOf("hour") >= 0 || question.indexOf("hours") >= 0) {
        hi = question.replace("set a reminder for ", "")
        hi = hi.replace("labeled", "")
        hi = hi.split(" ");
        copy = hi;
        hi = hi[0];
        label = copy[3];
        if (hi.indexOf("hours") >= 0) {
            question = hi.replace(" hours", "")
        } else {
            question = hi.replace(" hour", "")
        }
        var x = Number(question)
        x = x * 3600;
    }
    buffer = "Timer set for " + hi


    speak(buffer);


    var eventTime = ms + x;
    // Timestamp - Sun, 21 Apr 2013 13:00:00 GMT
    var currentTime = ms; // Timestamp - Sun, 21 Apr 2013 12:30:00 GMT
    var diffTime = eventTime - currentTime;
    var duration = moment.duration(diffTime * 1000, 'milliseconds');
    var interval = 1000;
    buffer = "Set your reminder for " + label
    starttextanimation(buffer, question = copy)

    timer = setInterval(function() {
        duration = moment.duration(duration - interval, 'milliseconds');
        buffer = duration.hours() + ":" + duration.minutes() + ":" + duration.seconds()

        if (duration.hours() + ":" + duration.minutes() + ":" + duration.seconds() == "0:0:0") {
            buffer = "Done " + label
            starttextanimation(buffer)
            var audio = new Audio('https://jarvisai.netlify.app/audiofiles/alarm/as.mp3');
            audio.play();
            clearInterval(timer);

        }
    }, interval);

}


function gettimer(question) {
    copy = question
    var ms = Date.now()
    var d = new Date();

    sec = d.getSeconds()
    min = d.getMinutes()
    hours = d.getHours()

    if (question.indexOf("second") >= 0 || question.indexOf("seconds") >= 0) {
        copy = question
        hi = question.replace("set a timer for ", "")
        if (hi.indexOf("seconds") >= 0) {
            question = hi.replace(" seconds", "")
        } else {
            question = hi.replace(" second", "")
        }
        var x = Number(question)
        buffer = "Timer set for " + hi

    }
    if (question.indexOf("minute") >= 0 || question.indexOf("minutes") >= 0) {
        copy = question
        hi = question.replace("set a timer for ", "")
        if (hi.indexOf("minutes") >= 0) {
            question = hi.replace(" minutes", "")
        } else {
            question = hi.replace(" minute", "")
        }
        var x = Number(question)
        x = x * 60;
        buffer = "Timer set for " + hi
    }
    if (question.indexOf("hour") >= 0 || question.indexOf("hours") >= 0) {
        copy = question
        hi = question.replace("set a timer for ", "")
        if (hi.indexOf("hours") >= 0) {
            question = hi.replace(" hours", "")
        } else {
            question = hi.replace(" hour", "")
        }
        var x = Number(question)
        x = x * 3600;
    }
    buffer = "Timer set for " + hi

    starttextanimation(buffer, question = copy)

    speak(buffer);


    var eventTime = ms + x;
    // Timestamp - Sun, 21 Apr 2013 13:00:00 GMT
    var currentTime = ms; // Timestamp - Sun, 21 Apr 2013 12:30:00 GMT
    var diffTime = eventTime - currentTime;
    var duration = moment.duration(diffTime * 1000, 'milliseconds');
    var interval = 1000;

    timer = setInterval(function() {
        duration = moment.duration(duration - interval, 'milliseconds');
        buffer = duration.hours() + ":" + duration.minutes() + ":" + duration.seconds()
        // document.getElementById("response").innerHTML = buffer
        if (duration.hours() + ":" + duration.minutes() + ":" + duration.seconds() == "0:0:0") {
            speak("Done");
            // document.getElementById("response").innerHTML = "Done"
            var audio = new Audio('https://jarvisai.netlify.app/audiofiles/alarm/as.mp3');
            audio.play();
            clearInterval(timer);
        }
    }, interval);

}