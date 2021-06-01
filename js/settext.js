function starttextanimation(buffer, question) {

    // var request = new XMLHttpRequest();

    // request.addEventListener("load", function(evt) {
    //     console.log(evt);
    // }, false);

    // request.open('GET', 'http://localhost:8888/text.html', true),
    //     request.send();


    var childiFrame = parent.document.getElementById("text");
    var innerDoc = childiFrame.contentDocument ||
        childiFrame.contentWindow.document;

    if (innerDoc.getElementById("p") == null) {
        var lol = innerDoc.createElement("div");
        var element = innerDoc.getElementById("body");
        var cont = innerDoc.getElementById("container")
        element.insertBefore(lol, cont);
        lol.classList.add('container');
        lol.setAttribute("id", "container");
        var node = innerDoc.createElement("p");
        innerDoc.getElementById("container").appendChild(node);
        node.setAttribute("id", "p");
        var app = innerDoc.getElementById("p")
        var typewriter = new Typewriter(app, {
            loop: false,
            delay: 0.1
        });
        if (question == undefined) {
            question = document.getElementById("question").value;
        }

        typewriter.typeString(question).start();



    } else {
        var myobj = innerDoc.getElementById("container");
        myobj.remove();
        var lol = innerDoc.createElement("div");
        var element = innerDoc.getElementById("body");
        var cont = innerDoc.getElementById("container")
        element.insertBefore(lol, cont);
        lol.classList.add('container');
        lol.setAttribute("id", "container");
        var node = innerDoc.createElement("p");
        innerDoc.getElementById("container").appendChild(node);
        node.setAttribute("id", "p");
        var app = innerDoc.getElementById("p")
        var typewriter = new Typewriter(app, {
            loop: false,
            delay: 0.1
        });
        if (question == undefined) {
            question = document.getElementById("question").value;
        }
        typewriter.typeString(question).start();
    }
    if (innerDoc.getElementById("p2") == null) {
        setTimeout(function() {
            var lol = innerDoc.createElement("div");
            var element = innerDoc.getElementById("body");
            var cont = innerDoc.getElementById("cont")
            element.insertBefore(lol, cont);
            lol.classList.add('container');
            lol.classList.add('darker');
            lol.setAttribute("id", "cont");

            var node = innerDoc.createElement("p");
            innerDoc.getElementById("cont").appendChild(node);
            node.setAttribute("id", "p2");
            var app = innerDoc.getElementById("p2")
            var typewriter = new Typewriter(app, {
                loop: false,
                delay: 0.1

            });

            typewriter.typeString(buffer).start();
        }, 2000);

    } else {
        setTimeout(function() {
            var myobj = innerDoc.getElementById("cont");
            myobj.remove();
            var lol = innerDoc.createElement("div");
            var element = innerDoc.getElementById("body");
            var cont = innerDoc.getElementById("cont")
            element.insertBefore(lol, cont);
            lol.classList.add('container');
            lol.classList.add('darker');
            lol.setAttribute("id", "cont");

            var node = innerDoc.createElement("p");
            innerDoc.getElementById("cont").appendChild(node);
            node.setAttribute("id", "p2");
            var app = innerDoc.getElementById("p2")
            var typewriter = new Typewriter(app, {
                loop: false,
                delay: 0.1
            });

            typewriter.typeString(buffer).start();
        }, 2000);
    }
    var obj = parent.document.getElementsByClassName("bar");
    obj[0].style.background = "#fff";
    obj[1].style.background = "#fff";
    obj[2].style.background = "#fff";
    obj[3].style.background = "#fff";
    tint = parent.document.getElementById("tint")
    // tint.style.backgroundColor = "hsla(0, 0%, 0%, 0.3)"


}