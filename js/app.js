//object.onload = function(){myScript};


// function onload() {
//     var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
//     var recognition = new SpeechRecognition();
//     var transcript = "";
//     recognition.start();
//     // This runs when the speech recognition service starts
//     recognition.onstart = function() {
//         console.log("<small>listening, please speak...</small>");
//     };

//     // document.getElementsByClassName("si-mic")[0].click();
//     let lastChanged = 0;
//     lastChanged = Date.now();
//     // document.querySelector(".pure-form").addEventListener("change", function() {
//     //     //     //should be called after inital change to input 





//     // });



//     var speechTimer = setInterval(function() {
//         // This runs when the speech recognition service returns result
//         hi = Date.now()
//         if (hi - lastChanged > 4000) {
//             recognition.onspeechend = function() {
//                 console.log("<small>stopped listening, hope you are done...</small>");
//                 recognition.stop();
//                 clearInterval(speechTimer);

//             }
//         }
//         // start recognition


//     }, 100000);
//     recognition.onresult = function(event) {
//         var transcript = event.results[0][0].transcript;
//         var confidence = event.results[0][0].confidence;
//         console.log("<b>Text:</b> " + transcript + "<br/> <b>Confidence:</b> " + confidence * 100 + "%");

//         if (transcript != "" && confidence >= .75) {


//             parent.callData(question = transcript);
//             //document.querySelector("form").submit();


//             starttextanimation(question = transcript)

//         } else {
//             window.location.reload();
//         }
//     };



// }
// document.getElementById("form").addEventListener('reset', function(event) {
//     document.getElementById("response").textContent = "";
// });

// function setdefault() {}

// function debug() {
//     if (document.getElementById('debug').checked) {
//         buffer = "Debug mode Initiated";
//         document.getElementById("response").innerHTML = buffer;
//         speak(buffer);
//     }
// }
// let question, buffer = "";
// document.getElementById("form").addEventListener('submit', function(event) {
//     event.preventDefault();

//     callData();


// });
// document.getElementById("form").addEventListener('reset', function(event) {
//     document.getElementById("response").textContent = "";
// });