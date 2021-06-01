function gettraffic(question) {
    copy = question
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }


    function showPosition(position) {
        Latitude = position.coords.latitude;
        Longitude = position.coords.longitude;
        fetch('https://www.mapquestapi.com/traffic/v2/incidents?key=fFl1NNL9tG159IYJLG0mBTWcaX5vrhvv&boundingBox=' + Latitude + ',' + Longitude + ',26.7,-81.9&filters=construction,incidents', {
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
            random = Math.floor((Math.random() * 20) + 1);
            random1 = Math.floor((Math.random() * 20) + 1);
            if (random == random1) {
                random1 = Math.floor((Math.random() * 20) + 1);
            } else {
                description = jsonData.incidents[random].fullDesc;
                icon = jsonData.incidents[random].iconURL;
                starttime = jsonData.incidents[random].startTime;
                var d = new Date();
                year = d.getFullYear();
                onth = d.getMonth();
                day = d.getDate();
                current_day = year + "-" + onth + "-" + day;

                if (startTime == current_day) {
                    startTime = "today"
                }
                buffer = "There is " + description + " starting " + starttime;
                starttextanimation(buffer, question = copy)
                speak(buffer);
            }

        });
    }
}