function pause_play() {
    var audio = document.getElementById('myAudio');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function goback() {
    localStorage.clear();
    window.close()

}

function onload() {
    var songname = sessionStorage.getItem("songname");
    var artistname = sessionStorage.getItem("artistname");
    var songpreveiw = sessionStorage.getItem("songpreveiw");
    var albumimd = sessionStorage.getItem("albumimd");
    var albumimdbig = sessionStorage.getItem("albumimdbig");
    document.getElementById('info').innerHTML = songname + " by " + artistname
    document.body.children[3].children[0].style.background = "url('" + albumimd + "')";
    document.body.children[0].style.background = "url('" + albumimdbig + "')";

    var audio = document.getElementById('myAudio');
    audio.src = songpreveiw
    audio.load();
    setTimeout(function() {
        audio.play()
    }, 5000);
    audio.onended = function() {
        parent.document.getElementById("music").src = ""
    };

}

function onclick() {
    window.close()
    sessionStorage.clear()
}
// var childiFrame = parent.document.getElementById("music");
// var doc = childiFrame.contentDocument ||
//     childiFrame.contentWindow.document;
// var lol = doc.getElementById('myAudio');