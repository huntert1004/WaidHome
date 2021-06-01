function runSpeechRecognition() {
    // get output div reference
    var output = document.getElementById("output");
    // get action element reference
    // new speech recognition object

    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();

    // This runs when the speech recognition service starts
    recognition.onstart = function() {
        console.log("<small>listening, please speak...</small>");
    };


}