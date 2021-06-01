function movienearme() {


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }


    function showPosition(position) {
        Latitude = position.coords.latitude;
        Longitude = position.coords.longitude;
        var d = new Date();
        time = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDay() + "T" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "." + d.getMilliseconds() + "Z"


        fetch('https://api-gate2.movieglu.com/cinemasNearby/?n=2', {
            method: 'get',
            mode: 'cors',
            redirect: 'follow',
            headers: {
                "api-version": "v200",
                "authorization": "Basic WUJGSzpRdEpHS2N1VzRaTlo=",
                "client": "YBFK",
                "x-api-key": "6ky6Mr5FbZ6ENusWxcNbb1QcP6xX2RMt5pPceh9x",
                "device-datetime": time,
                "territory": "US",
                "geolocation": Latitude + ";" + Longitude

            }
        }).then(function(response) {
            return response.json();
        }).then(function(jsonData) {
            cinemaname1 = jsonData.cinemas[0].cinema_name;
            cinemaaddress1 = jsonData.cinemas[0].address;
            cinemacity1 = jsonData.cinemas[0].city;
            cinemadistance1 = jsonData.cinemas[0].distance;
            cinemalogo1 = jsonData.cinemas[0].logo_url;

            cinemaname2 = jsonData.cinemas[1].cinema_name;
            cinemaaddress2 = jsonData.cinemas[1].address;
            cinemacity2 = jsonData.cinemas[1].city;
            cinemadistance2 = jsonData.cinemas[1].distance;
            cinemalogo2 = jsonData.cinemas[1].logo_url;

            cinemaname3 = jsonData.cinemas[2].cinema_name;
            cinemaaddress3 = jsonData.cinemas[2].address;
            cinemacity3 = jsonData.cinemas[2].city;
            cinemadistance3 = jsonData.cinemas[2].distance;
            cinemalogo3 = jsonData.cinemas[2].logo_url;

            cinemaname4 = jsonData.cinemas[3].cinema_name;
            cinemaaddress4 = jsonData.cinemas[3].address;
            cinemacity4 = jsonData.cinemas[3].city;
            cinemadistance4 = jsonData.cinemas[3].distance;
            cinemalogo4 = jsonData.cinemas[3].logo_url;

            cinemaname5 = jsonData.cinemas[4].cinema_name;
            cinemaaddress5 = jsonData.cinemas[4].address;
            cinemacity5 = jsonData.cinemas[4].city;
            cinemadistance5 = jsonData.cinemas[4].distance;
            cinemalogo5 = jsonData.cinemas[4].logo_url;
            buffer = cinemaname1 + " is " + cinemadistance1 + " miles away from you. Its address is " + cinemaaddress1 + ". " + "There's another cinema " + cinemadistance2 + "miles away." + "It's name is " + cinemaname2 + ". "
            document.getElementById("response").innerHTML = buffer;
            speak(buffer);
        });
    }
}

function getmovieid(question) {
    copy = question;
    if (question.startsWith("show me movie trailers for")) {
        question = question.split("show me movie trailers for")[1];
    }
    if (question.startsWith("show me movie trailers for")) {
        question = question.split("show me movie trailers for")[1];
    }
    if (question.startsWith("get a movie trailer for")) {
        question = question.split("get a movie trailer for")[1];
    }
    if (question.startsWith("show me a movie trailer for")) {
        question = question.split("show me a movie trailer for")[1];
    }
    if (question.startsWith("get me a movie trailer for")) {
        question = question.split("get me a movie trailer for")[1];
    }
    if (question.startsWith("get me a movie trailer of")) {
        question = question.split("get me a movie trailer of")[1];
    }
    if (question.startsWith("show me a movie trailer of")) {
        question = question.split("show me a movie trailer of")[1];
    }
    if (question.startsWith("get a movie trailer of")) {
        question = question.split("get a movie trailer of")[1];
    }

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }


    function showPosition(position) {
        Latitude = position.coords.latitude;
        Longitude = position.coords.longitude;
        var d = new Date();
        time = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDay() + "T" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "." + d.getMilliseconds() + "Z"
        fetch('https://api-gate2.movieglu.com/filmLiveSearch/?query=' + question + '&n=6', {
            method: 'get',
            mode: 'cors',
            redirect: 'follow',
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                "api-version": "v200",
                "authorization": "Basic WUJGSzpRdEpHS2N1VzRaTlo=",
                "client": "YBFK",
                "x-api-key": "6ky6Mr5FbZ6ENusWxcNbb1QcP6xX2RMt5pPceh9x",
                "device-datetime": time,
                "territory": "US",
                "geolocation": Latitude + ";" + Longitude,
                'Accept': 'application/json'
            }
        }).then(function(response) {
            return response.json();
        }).then(function(jsonData) {
            film_id = jsonData[0].film_id;
            if (question.indexOf("trailer") || question.indexOf("trailers")) {
                getmovieid(film_id)
            }

        });
    }
}

function getmovieidnear(film_id) {
    Latitude = position.coords.latitude;
    Longitude = position.coords.longitude;
    var d = new Date();
    time = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDay() + "T" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "." + d.getMilliseconds() + "Z"
    fetch('https://api-gate2.movieglu.com/trailers/?film_id=' + film_id, {
        method: 'get',
        mode: 'cors',
        redirect: 'follow',
        headers: {
            "Content-type": "application/json;charset=UTF-8",
            "api-version": "v200",
            "authorization": "Basic WUJGSzpRdEpHS2N1VzRaTlo=",
            "client": "YBFK",
            "x-api-key": "6ky6Mr5FbZ6ENusWxcNbb1QcP6xX2RMt5pPceh9x",
            "device-datetime": time,
            "territory": "US",
            "geolocation": Latitude + ";" + Longitude,
            'Accept': 'application/json'
        }
    }).then(function(response) {
        return response.json();
    }).then(function(jsonData) {
        trailer_link = jsonData.high.film_trailer;
        buffer = "Here is your trailer!!"
        document.getElementById("response").innerHTML = buffer;
        speak(buffer);

    });
}