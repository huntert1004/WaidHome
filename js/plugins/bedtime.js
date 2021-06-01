function getbedstory(question) {



    fetch('json/bedtime.json', {
        method: 'get',
        mode: 'cors',
        redirect: 'follow',
        headers: {
            'Accept': 'application/json',
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(function(response) {
        return response.json();
    }).then(function(jsonData) {
        random = Math.floor((Math.random() * 4) + 1)
        bedlink = jsonData.stories[random].bedtimelink;
        bedinfo = jsonData.stories[random].storyinfo;
        bedimglink = "https://jarvisai.netlify.app/bed_img.jpg"
        sessionStorage.setItem("bedlink", bedlink);
        sessionStorage.setItem("bedinfo", bedinfo);
        sessionStorage.setItem("bedimglink", bedimglink);
        buffer = "Playing a bedtime story now"
        // var win = window.open("music.html", );
        hi = parent.document.getElementById("music").src
        if (parent.document.getElementById("music").src == "") {
            parent.document.getElementById("music").src = "music.html"
        } else {
            parent.document.getElementById("player").src = "music.html"
        }

        starttextanimation(buffer, question)
        speak(buffer)


    });

}