async function createModel() {
    const URL = "https://teachablemachine.withgoogle.com/models/laM3ufJ5v/";
    const checkpointURL = URL + "model.json"; // model topology
    const metadataURL = URL + "metadata.json"; // model metadata

    const recognizer = speechCommands.create(
        "BROWSER_FFT", // fourier transform type, not useful to change
        undefined, // speech commands vocabulary feature, not useful for your models
        checkpointURL,
        metadataURL);

    // check that model and metadata are loaded via HTTPS requests.
    await recognizer.ensureModelLoaded();

    return recognizer;
}

async function init() {
    const recognizer = await createModel();
    const classLabels = recognizer.wordLabels(); // get class labels
    const labelContainer = document.getElementById("label-container");


    // listen() takes two arguments:
    // 1. A callback function that is invoked anytime a word is recognized.
    // 2. A configuration object with adjustable fields
    recognizer.listen(result => {
        const scores = result.scores; // probability of prediction for each class
        // render the probability scores per class

        classPrediction = result.scores[1]
        console.log(classPrediction)
        classPrediction = Number(classPrediction)
        lol = ["https://jarvisai.netlify.app/poh.mp3", "https://jarvisai.netlify.app/paintitblack.mp3", "https://jarvisai.netlify.app/shookmeallnight.mp3", "https://jarvisai.netlify.app/allmine.mp3", "https://jarvisai.netlify.app/bigpapa.mp3", "https://jarvisai.netlify.app/girls.mp3", "https://jarvisai.netlify.app/novemberrain.mp3", "https://jarvisai.netlify.app/stilldre.mp3", "https://jarvisai.netlify.app/backinblack.mp3"];


        if (parent.document.getElementById("logo").style.length == 0 && classPrediction > .92 && classPrediction <= 1) {
            if (parent.document.getElementById("bedtime").src == "") {
                random = Math.floor(Math.random() * 9);
                audio = parent.document.getElementById("bedtime")
                // myVideo.loop = true;
                audio.src = lol[random]
                audio.load()
                audio.play()
                vid = parent.document.getElementById("myVideo")
                vidcounter = 1
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
                    specilbot()

                }, 5000);
                setTimeout(function() {
                    recognizer.stopListening()
                    init()

                }, 60000);

                // setTimeout(function() {
                //     // starttextanimation(buffer, question)
                //     // speak(buffer);
                // }, 3000);
            }


        }



    }, {
        includeSpectrogram: true, // in case listen should return result.spectrogram
        probabilityThreshold: 0.75,
        invokeCallbackOnNoiseAndUnknown: true,
        overlapFactor: 0.50 // probably want between 0.5 and 0.75. More info in README
    });

    // Stop the recognition in 5 seconds.
    // setTimeout(() => recognizer.stopListening(), 5000);
}