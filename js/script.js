function bot() {
    // const video = document.getElementById("myVideo")

    // video.pause();
    // let featuredTitle = document.querySelector("canvas");
    // featuredTitle.id = "logo";
    parent.document.getElementById("data3").src = "stock.html"
    parent.document.getElementById("bg").style = "background-color: black"
    parent.document.getElementById("logo").style = "background-image: url('images/waidbgt.png'); background-repeat: no-repeat; background-size: cover;"
    h = parent.document.getElementById("logo").style
    screensaver()
}

function specilbot() {

    var audio = parent.document.getElementById('myAudio');
    buffer = "http://api.voicerss.org/?key=eb162b60623b425f84fdcc147778f353&hl=en-au&v=Jack&src=" + "Allow me to introduce myself, I am Wade, your personal worldwide artificial intelligent device";

    audio.src = buffer
    audio.load();
    buffer = "Allow me to introduce myself, I am Waid a personal worldwide artificial intelligent device"
    question = "Waid"
    audio.play();
    parent.document.getElementById("logo").style = "background-image: url('images/waidbgt.png'); background-repeat: no-repeat; background-size: cover;"



    var div = parent.document.getElementById("logo");
    div.className = "elementToFadeInAndOut"
    // div.style = "background-image: url('images/waidbgt.png'); background-repeat: no-repeat; background-size: cover;"
    div.style = "background-image: url('images/waidbgt.png'); background-repeat: no-repeat; background-size: cover;"
    parent.document.getElementById("bg").style = "background-color: black"
    setTimeout(function() {
        bot()
        var element = parent.document.getElementById("logo");
        element.classList.remove("elementToFadeInAndOut");
        parent.document.getElementById("logo").style = "background-image: url(''); background-repeat: no-repeat; background-size: cover;"
        parent.document.getElementById("logo").style = "background-image: url('images/waidbgt.png'); background-repeat: no-repeat; background-size: cover;"
        starttextanimation(buffer, question)


    }, 7000);
    // parent.document.getElementById("logo").style = "background-image: url('images/waidbgt.png'); background-repeat: no-repeat; background-size: cover;"
}

function hunterintro(transcript) {
    var audio = parent.document.getElementById('myAudio');
    buffer = "http://api.voicerss.org/?key=eb162b60623b425f84fdcc147778f353&hl=en-au&v=Jack&src=" + "How we doing today Sir.";

    audio.src = buffer
    audio.load();

    audio.play();
    parent.document.getElementById("logo").style = "background-image: url('images/waidbgt.png'); background-repeat: no-repeat; background-size: cover;"



    var div = parent.document.getElementById("logo");
    div.className = "elementToFadeInAndOut"
    // div.style = "background-image: url('images/waidbgt.png'); background-repeat: no-repeat; background-size: cover;"
    div.style = "background-image: url('images/waidbgt.png'); background-repeat: no-repeat; background-size: cover;"
    parent.document.getElementById("bg").style = "background-color: black"
    setTimeout(function() {
        bot()
        var element = parent.document.getElementById("logo");
        element.classList.remove("elementToFadeInAndOut");
        parent.document.getElementById("logo").style = "background-image: url(''); background-repeat: no-repeat; background-size: cover;"
        parent.document.getElementById("logo").style = "background-image: url('images/waidbgt.png'); background-repeat: no-repeat; background-size: cover;"
        callData(question = transcript)


    }, 4000);
}
try {
    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
} catch (e) {
    console.error(e);
    $('.no-browser-support').show();
    $('.app').hide();
}
i = 1

// var noteTextarea = $('#note-textarea');
// var instructions = $('#recording-instructions');
// var notesList = $('ul#notes');

var noteContent = '';

// Get all notes from previous sessions and display them.
// var notes = getAllNotes();
// renderNotes(notes);



/*-----------------------------
      Voice Recognition 
------------------------------*/

// If false, the recording will stop after a few seconds of silence.
// When true, the silence period is longer (about 15 seconds),
// allowing us to keep recording even when the user pauses. 
recognition.continuous = true;

// This block is called every time the Speech APi captures a line. 
recognition.onresult = function(event) {

    // event is a SpeechRecognitionEvent object.
    // It holds all the lines we have captured so far. 
    // We only need the current one.
    var current = event.resultIndex;

    // Get a transcript of what was said.
    var transcript = event.results[current][0].transcript;
    if (transcript.indexOf("Waid") >= 0 || transcript.indexOf("wade") >= 0 || transcript.indexOf("Wade") >= 0 || transcript.indexOf("waid") >= 0 || transcript.indexOf("wait") >= 0 || transcript.indexOf("Wait") >= 0) {
        console.log(transcript)
        if (parent.document.getElementById("logo").style.length == 0) {
            vidcounter = 1
            vid = parent.document.getElementById("myVideo")

            isSupp = vid.canPlayType("video/mp4");
            vid.src = "https://jarvisai.netlify.app/coolintro.mp4"
            vid.load()
            vid.play()
            question = ""
            buffer = "Waid Activated"

            setTimeout(function() {
                vid = parent.document.getElementById("myVideo")

                isSupp = vid.canPlayType("video/mp4");
                vid.src = ""
                hunterintro(transcript)

            }, 5000);

        } else {


            bot()
            callData(question = transcript)
        }




    }
    // Add the current transcript to the contents of our Note.
    // There is a weird bug on mobile, where everything is repeated twice.
    // There is no official solution so far so we have to handle an edge case.
    var mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript);

    // if(!mobileRepeatBug) {
    //   noteContent += transcript;
    //   noteTextarea.val(noteContent);
    // }
};

recognition.onstart = function() {
    console.log('Voice recognition activated. Try speaking into the microphone.');
}

recognition.onspeechend = function() {
    console.log('You were quiet for a while so voice recognition turned itself off.');
    num = Math.floor(Math.random() * 11);
    if (num == 5) {
        window.location.reload();
    }

}

recognition.onerror = function(event) {
    if (event.error == 'no-speech') {
        console.log('No speech was detected. Try again.');

    };
}
recognition.addEventListener('end', recognition.start);


/*-----------------------------
      App buttons and input 
------------------------------*/

function startlistening() {
    if (noteContent.length) {
        noteContent += ' ';
    }
    recognition.start();
}

function reload() {
    if (vidcounter == 0) {
        lol = ["https://jarvisai.netlify.app/naturebg2.mp4", "https://jarvisai.netlify.app/naturebg2.mp4"];
        random = Math.floor(Math.random() * 2);
        vid = document.getElementById("myVideo")
        // myVideo.loop = true;
        isSupp = vid.canPlayType("video/mp4");
        if (vid.src != "https://jarvisai.netlify.app/coolintro.mp4") {
            vid.src = lol[random]
            vid.load()

            vid.play()
        }



        setTimeout(function() {

            reload()


        }, 20000);
    } else {

    }
}


function screensaver() {
    if (vidtimeout == undefined) {
        timeout1 = setTimeout(function() {
            vidcounter = 0
            parent.document.getElementById("logo").style = "background-image: url(''); background-repeat: no-repeat; background-size: cover;"
            parent.document.getElementById("movie").src = "https://naughty-hermann-189d94.netlify.app/";
            parent.document.getElementById("music").src = "https://naughty-hermann-189d94.netlify.app/";
            parent.document.getElementById("player").src = "https://naughty-hermann-189d94.netlify.app/";
            parent.document.getElementById("data1").src = "https://naughty-hermann-189d94.netlify.app/";
            parent.document.getElementById("data2").src = "https://naughty-hermann-189d94.netlify.app/";
            parent.document.getElementById("data3").src = "https://naughty-hermann-189d94.netlify.app/";
            parent.document.getElementById("yt").src = "https://naughty-hermann-189d94.netlify.app/";
            parent.document.getElementById("text").src = "https://naughty-hermann-189d94.netlify.app/";
            parent.document.getElementById("bg").style = "background-color: transparent"
            var obj = parent.document.getElementsByClassName("bar");
            obj[0].style.background = "transparent";
            obj[1].style.background = "transparent";
            obj[2].style.background = "transparent";
            obj[3].style.background = "transparent";


        }, 3600000);
        vidtimeout = timeout1
    } else {
        clearTimeout(vidtimeout)
        timeout2 = setTimeout(function() {
            parent.document.getElementById("logo").style = "background-image: url(''); background-repeat: no-repeat; background-size: cover;"
            parent.document.getElementById("movie").src = "https://naughty-hermann-189d94.netlify.app/";
            parent.document.getElementById("music").src = "https://naughty-hermann-189d94.netlify.app/";
            parent.document.getElementById("player").src = "https://naughty-hermann-189d94.netlify.app/";
            parent.document.getElementById("data1").src = "https://naughty-hermann-189d94.netlify.app/";
            parent.document.getElementById("data2").src = "https://naughty-hermann-189d94.netlify.app/";
            parent.document.getElementById("data3").src = "https://naughty-hermann-189d94.netlify.app/";
            parent.document.getElementById("yt").src = "https://naughty-hermann-189d94.netlify.app/";
            parent.document.getElementById("text").src = "https://naughty-hermann-189d94.netlify.app/";
            // parent.document.getElementById("myVideo1").src = "https://naughty-hermann-189d94.netlify.app/";
            parent.document.getElementById("bg").style = "background-color: transparent background: transparent"
            var obj = parent.document.getElementsByClassName("bar");
            obj[0].style.background = "transparent";
            obj[1].style.background = "transparent";
            obj[2].style.background = "transparent";
            obj[3].style.background = "transparent";
            vidcounter = 0
            reload()
        }, 3600000);
        vidtimeout = timeout2
    }

}