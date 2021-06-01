function getyoutube(question) {
    copy = question
    if (question.startsWith("show me movie trailers for")) {
        question = question.split("show me movie trailers for")[1];
    }
    if (question.startsWith("search youtube for") && question.endsWith("movie trailer") || question.startsWith("Jarvis search youtube for") && question.endsWith("movie trailers")) {
        question = question.split("search youtube for")[1];
    }
    if (question.startsWith("search youtube for")) {
        question = question.split("search youtube for")[1];
    }
    if (question.startsWith("search youtube for")) {
        question = question.split("search youtube for")[1];
    }
    if (question.startsWith("search for a youtube video called")) {
        question = question.split("search for a youtube video called")[1];
    }
    fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBqobGlGC-GbMCIpJla8nVLjgrzdMFIB9Q&type=video&q=' + question, {
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
        title = jsonData.items[0].snippet.title;
        description = jsonData.items[0].snippet.description;
        vid = jsonData.items[0].id.videoId

        // gapi.load("auth2", function() {
        //     gapi.auth2.init({
        // //         client_id: "276269005505-g584330lmn9u4o9enj0uvdnskopveu15.apps.googleusercontent.com"
        // //     });
        // // });
        // // authenticate().then(loadClient)
        // // execute(question)
        // gapi.load('client', start);

        // function start() {
        //     // 2. Initialize the JavaScript client library.
        //     gapi.client.init({
        //         'apiKey': 'AIzaSyBqobGlGC-GbMCIpJla8nVLjgrzdMFIB9Q',
        //         // clientId and scope are optional if auth is not required.
        //         'clientId': '276269005505-g584330lmn9u4o9enj0uvdnskopveu15.apps.googleusercontent.com',
        //         'scope': 'profile',
        //     }).then(function() {
        //         // 3. Initialize and make the API request.
        //         return gapi.client.request({
        //             'path': 'https://people.googleapis.com/v1/people/me?requestMask.includeField=person.names',
        //         })
        //     }).then(function(response) {
        //         console.log(response.result);
        //     }, function(reason) {
        //         console.log('Error: ' + reason.result.error.message);
        //     });
        // };
        parent.document.getElementById("yt").src = "https://www.youtube.com/embed/" + vid + "?autoplay=1&controls=0"
        // audio = parent.document.getElementById("myAudio")
        // audio.src = "https://www.youtube.com/embed/" + vid
        // audio.load();

        // audio.play();
        iframe = parent.document.getElementById("yt");
        iframe.volume = 1;
        fetch('https://www.googleapis.com/youtube/v3/videos?id=' + vid + '&key=AIzaSyBqobGlGC-GbMCIpJla8nVLjgrzdMFIB9Q&part=snippet,contentDetails', {
            method: 'get',
            mode: 'cors',
            redirect: 'follow',
            headers: {
                'Accept': 'application/json',
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(function(response) {
            return response.json();
        }).then(function(jsondata) {
            starttextanimation(buffer = "Playing " + title, question = copy)

            speak(buffer = "Playing " + title)
            duration = jsondata.items[0].contentDetails.duration;

            if (duration.indexOf("H") >= 0 && duration.indexOf("M") >= 0) {
                duration = duration.replace("PT", "")
                duration = duration.repace("H", "/")
                duration = duration.replace("M", "/")
                duration = duration.replace("S", "/")
                duration = duration.split("/")
                durationH = duration[0]
                durationM = duration[1]
                durationS = duration[2]
                durationH = Number(durationH)
                durationM = Number(durationM)
                durationS = Number(durationS)
                durationH = durationH * 3600000
                durationM = durationM * 60000
                durationS = durationS * 1000
                duration = durationS + durationH + durationM + 2000
                duration = duration.toString()

            }

            if (duration.indexOf("M") >= 0) {
                duration = duration.replace("PT", "")
                duration = duration.replace("M", "/")
                duration = duration.replace("S", "/")
                duration = duration.split("/")
                durationM = duration[0]
                durationS = duration[1]
                durationM = Number(durationM)
                durationS = Number(durationS)
                durationM = durationM * 60000
                durationS = durationS * 1000
                duration = durationS + durationM + 2000
                duration = duration.toString()

            }


            if (duration.indexOf("PT") >= 0) {
                duration = duration.replace("PT", "")
                duration = Number(duration)
                duration = duration * 10 + 2000
            }




            hello = parent.document.getElementById("yt").src
            if (hello != null || !hello.startsWith("https://www.youtube")) {
                duration = Number(duration)
                timeout = setTimeout(function() {
                    parent.document.getElementById("yt").src = "https://naughty-hermann-189d94.netlify.app/"

                }, duration);
            } else {
                clearTimeout(timeout)
                duration = Number(duration)
                timeout = setTimeout(function() {
                    parent.document.getElementById("yt").src = "https://naughty-hermann-189d94.netlify.app/"

                }, duration);

            }






        });
    });
}