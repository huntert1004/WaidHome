function speak(buffer) {
    var hrllo;
    var w;
    parent.window.waid = parent.window.waid || {};
    var audio = parent.document.getElementById('myAudio');
    w = parent.window.waid.hrllo
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
        novoForm.window.waid.speed = 0.6
        novoForm.window.waid.density = 3.12
        novoForm.waid.strength = 1.49
        // window.open("SphereDisplay/index.html")
        novoForm.window.waid.sphere.animate();

        //     parent.window.waid.setsphere(parent.window.waid.speed, parent.window.waid.density, parent.window.waid.strength)
    }, 400 * result.length);
    audio.onended = function() {
        novoForm.window.waid.speed = 0.46
        novoForm.window.waid.density = 2.04
        novoForm.window.waid.strength = 0.1
        novoForm.window.waid.sphere.animate();

    };
    //     i++;
    // }
    // for (i = 0; i < result.length; i++) {

    //     // var childiFrame = document.getElementById("sphere");
    //     // var innerDoc = childiFrame.contentDocument ||
    //     //     childiFrame.contentWindow.setsphere();


    // }
    // setTimeout(function(){ lol() }, 300);

    // };
}