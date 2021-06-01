function topgun(question) {

    videolink = "https://jarvisai.netlify.app/topgun.mp4"
    buffer = "Easter Egg"
    sessionStorage.setItem("videolink", videolink);
    sessionStorage.setItem("buffer", buffer);
    parent.document.getElementById("yt").src = videolink
    starttextanimation(buffer, question)
    speak(buffer)
    timeout = setTimeout(function() {
        parent.document.getElementById("yt").src = "https://naughty-hermann-189d94.netlify.app/"

    }, 2600);
}

function pulpfiction(question) {
    videolink = "https://jarvisai.netlify.app/pulpfiction.mp4"
    buffer = "Easter Egg"
    sessionStorage.setItem("videolink", videolink);
    sessionStorage.setItem("buffer", buffer);
    parent.document.getElementById("yt").src = videolink
    starttextanimation(buffer, question)
    speak(buffer)
    timeout = setTimeout(function() {
        parent.document.getElementById("yt").src = "https://naughty-hermann-189d94.netlify.app/"

    }, 135000);


}

function ferrisbueller(question) {
    videolink = "https://jarvisai.netlify.app/ferrisbueller.mp4"
    buffer = "Easter Egg"
    sessionStorage.setItem("videolink", videolink);
    sessionStorage.setItem("buffer", buffer);
    parent.document.getElementById("yt").src = videolink
    starttextanimation(buffer, question)
    speak(buffer)
    timeout = setTimeout(function() {
        parent.document.getElementById("yt").src = "https://naughty-hermann-189d94.netlify.app/"

    }, 25000);


}