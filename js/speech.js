parent.window.waid = parent.window.waid || {};

function speak(buffer) {
    var audio = parent.document.getElementById('myAudio');
    setTimeout(function() {
        buffer = "http://api.voicerss.org/?key=eb162b60623b425f84fdcc147778f353&hl=en-au&v=Jack&src=" + buffer;

        audio.src = buffer
        audio.load();

        audio.play();
    }, 2000);


    result = buffer.split(/\s+/).map(({
        length
    }) => length);
    // i = 0
    // while (i < result.length) {

    //parent.window.waid.setsphere(parent.window.waid.speed, parent.window.waid.density, parent.window.waid.strength)
    setTimeout(function() {
        parent.window.waid.speed = 0.6
        parent.window.waid.density = 3.12
        parent.window.waid.strength = 1.49

        parent.window.waid.sphere.animate();

        //     parent.window.waid.setsphere(parent.window.waid.speed, parent.window.waid.density, parent.window.waid.strength)
    }, 400 * result.length);
    audio.onended = function() {
        parent.window.waid.speed = 0.46
        parent.window.waid.density = 2.04
        parent.window.waid.strength = 0.1
        parent.window.waid.sphere.animate();

    };
    //     i++;
    // }
    // for (i = 0; i < result.length; i++) {

    //     // var childiFrame = document.getElementById("sphere");
    //     // var innerDoc = childiFrame.contentDocument ||
    //     //     childiFrame.contentWindow.setsphere();


    // }
    // setTimeout(function(){ lol() }, 300);

}