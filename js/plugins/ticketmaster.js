function geteventsnear(question) {
    copy = question
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }


    function showPosition(position) {
        Latitude = position.coords.latitude;
        Longitude = position.coords.longitude;
        var minUSD_1 = "unknown"
        var minUSD_2 = "unknown"
        var age_restriction_1 = "unknown"
        var age_restriction_2 = "unknown"
        fetch('https://app.ticketmaster.com/discovery/v2/events.json?latlong=' + Latitude + ',' + Longitude + '&apikey=yd7Qwd6rHeleGeJQywUnnyGnflr54Nug', {
            method: 'get',
            mode: 'cors',
            redirect: 'follow'
        }).then(function(response) {
            return response.json();
        }).then(function(jsonData) {
            events = jsonData._embedded
            name_1 = events.events[1].name;
            url_1 = events.events[1].url;
            distance_1 = events.events[1].distance;
            if (events.events[1].priceRanges != undefined) {
                minUSD_1 = events.events[1].priceRanges[0].min;
            }
            if (events.events[1].ageRestrictions != undefined) {
                age_restriction_1 = events.events[1].ageRestrictions.legalAgeEnforced;
            }

            starttime_1 = events.events[1].sales.public.startDateTime;
            name_2 = events.events[2].name;
            url_2 = events.events[2].url;
            distance_2 = events.events[2].distance;
            if (events.events[2].priceRanges != undefined) {
                minUSD_2 = events.events[2].priceRanges[0].min;
            }
            if (events.events[2].ageRestrictions != undefined) {
                age_restriction_2 = events.events[2].ageRestrictions.legalAgeEnforced;
            }


            starttime_2 = events.events[2].sales.public.startDateTime;
            if (age_restriction_1 == "false") {
                age_restriction_1 = "no"
            }
            if (age_restriction_2 == "false") {
                age_restriction_2 = "no"
            }
            if (age_restriction_2 == "true") {
                age_restriction_2 = "yes"
            }
            if (age_restriction_2 == "true") {
                age_restriction_2 = "yes"
            }
            buffer = name_1 + " starts at " + starttime_1 + " prices starting at " + minUSD_1 + '. ' + age_restriction_1 + " there are no age restrictions and it is " + distance_1 + " miles away from your current location." + name_2 + " starts at " + starttime_2 + " prices starting at " + minUSD_2 + '. ' + age_restriction_2 + " there are no age restrictions and it is " + distance_2 + " miles away from your current location."
            starttextanimation(buffer, question = copy)
            speak(buffer);

        });
    }
}

function geteventbyname(question) {
    copy = question
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }


    function showPosition(position) {
        if (question.startsWith("when is the ")) {
            question = question.replace("when is the ", "")
            question = question.split(" ")[0];
        }
        if (question.indexOf("undefined")) {
            question = question.replace("undefined", "")
        }
        Latitude = position.coords.latitude;
        Longitude = position.coords.longitude;
        fetch('https://app.ticketmaster.com/discovery/v2/events.json?latlong=' + Latitude + ',' + Longitude + '&keyword=' + question + '&apikey=yd7Qwd6rHeleGeJQywUnnyGnflr54Nug', {
            method: 'get',
            mode: 'cors',
            redirect: 'follow'
        }).then(function(response) {
            return response.json();
        }).then(function(jsonData) {
            events = jsonData._embedded
            name_1 = events.events[1].name;
            url_1 = events.events[1].url;
            distance_1 = events.events[1].distance;
            minUSD_1 = events.events[1].priceRanges[0].min;
            age_restriction_1 = events.events[1].ageRestrictions.legalAgeEnforced;
            starttime_1 = events.events[1].sales.public.startDateTime;
            buffer = name_1 + " starts at " + starttime_1 + " prices starting at " + minUSD_1 + '. ' + age_restriction_1 + " there are no age restrictions and it is " + distance_1 + " miles away from your current location."
            starttextanimation(buffer, question = copy)
            speak(buffer)

        });
    }
}