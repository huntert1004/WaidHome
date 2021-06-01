function mutePage() {
    var x = document.getElementById("myAudio");
    x.pause();
    var y = document.getElementById("bedtime")
    y.pause()
}

function setvolume(question) {
    var x = document.getElementById("myAudio");
    var y = document.getElementById("bedtime")
    if (question.indexOf("increase") >= 0 || question.indexOf("louder") >= 0) {
        volume = document.getElementById("myAudio").volume;
        Number(volume)
        volume = volume + .2
        x.volume = volume
    }
    if (question.indexOf("decrease") >= 0 || question.indexOf("increase") >= 0) {
        volume = document.getElementById("myAudio").volume;
        Number(volume)
        volume = volume - .2
        x.volume = volume
    }
    if (question.indexOf("1") >= 0) {
        x.volume = 0.1
    }
    if (question.indexOf("2") >= 0) {
        x.volume = 0.2
    }
    if (question.indexOf("3") >= 0) {
        x.volume = 0.3
    }
    if (question.indexOf("4") >= 0) {
        x.volume = 0.4
    }
    if (question.indexOf("5") >= 0) {
        x.volume = 0.5
    }
    if (question.indexOf("6") >= 0) {
        x.volume = 0.6
    }
    if (question.indexOf("7") >= 0) {
        x.volume = 0.7
    }

    if (question.indexOf("8") >= 0) {
        x.volume = 0.8
    }
    if (question.indexOf("9") >= 0) {
        x.volume = 0.9
    }
    if (question.indexOf("10") >= 0) {
        x.volume = 1.0
    }

}