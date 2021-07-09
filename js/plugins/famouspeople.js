function getpeopleinfo(question) {
    copy = question
    if (question.startsWith("when was ")) {
        question = question.replace("when was ", "")
    }
    if (question.startsWith("who is ")) {
        question = question.replace("who is ", "")
    }
    var question = question.toLowerCase();
    fetch('https://waidapi.com/api/people?data=' + question, {
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
        if (jsonData.Search.error == undefined) {
            fullbio = jsonData.Search.bio
            image = jsonData.Search.image
            Pname = jsonData.Search.name
            // zodiac = jsonData.result.zodiac
            bio = fullbio.split(".")[0]
            if (bio.indexOf("0") >= 0) {
                bio = bio.split("0").join("");

            }
            if (bio.indexOf("(") >= 0) {
                bio = bio.split("(").join("");
            }
            if (bio.indexOf(")") >= 0) {
                bio = bio.split(")").join("");
            }

            if (bio.indexOf("1") >= 0) {
                bio = bio.split("1").join("");
            }
            if (bio.indexOf("2") >= 0) {
                bio = bio.split("2").join("");
            }
            if (bio.indexOf("3") >= 0) {
                bio = bio.split("3").join("");
            }
            if (bio.indexOf("4") >= 0) {
                bio = bio.split("4").join("");
            }
            if (bio.indexOf("5") >= 0) {
                bio = bio.split("5").join("");
            }
            if (bio.indexOf("6") >= 0) {
                bio = bio.split("6").join("");
            }
            if (bio.indexOf("7") >= 0) {
                bio = bio.split("7").join("");
            }
            if (bio.indexOf("8") >= 0) {
                bio = bio.split("7").join("");
            }
            if (bio.indexOf("9") >= 0) {
                bio = bio.split("9").join("");
            }
            if (bio.indexOf("January") >= 0) {
                bio = bio.split("January").join("");

            }
            if (bio.indexOf("February") >= 0) {
                bio = bio.split("February").join("");
            }
            if (bio.indexOf("March") >= 0) {
                bio = bio.split("March").join("");
            }
            if (bio.indexOf("April") >= 0) {
                bio = bio.split("April").join("");
            }
            if (bio.indexOf("May") >= 0) {
                bio = bio.split("May").join("");
            }
            if (bio.indexOf("June") >= 0) {
                bio = bio.split("June").join("");
            }
            if (bio.indexOf("July") >= 0) {
                bio = bio.split("July").join("");
            }
            if (bio.indexOf("August") >= 0) {
                bio = bio.split("August").join("");
            }
            if (bio.indexOf("September") >= 0) {
                bio = bio.split("September").join("");
            }
            if (bio.indexOf("October") >= 0) {
                bio = bio.split("October").join("");
            }
            if (bio.indexOf("November") >= 0) {
                bio = bio.split("November").join("");
            }
            if (bio.indexOf("December") >= 0) {
                bio = bio.split("December").join("");
            }
            if (bio.indexOf("born") >= 0) {
                bio = bio.split("born").join("");
            }
            if (bio.indexOf("died") >= 0) {
                bio = bio.split("died").join("");
            }
            if (bio.indexOf(",") >= 0) {
                bio = bio.split(",").join("");
            }

            buffer = bio
            sessionStorage.setItem("fullbio", fullbio);
            sessionStorage.setItem("image", image);
            sessionStorage.setItem("Pname", Pname);

            starttextanimation(buffer, question = copy)
            speak(buffer)
        }
        //     fetch('https://elated-nightingale-4d9b97.netlify.app/api/wikidata?data=' + question, {
        //         method: 'get',
        //         mode: 'cors',
        //         redirect: 'follow',
        //         headers: {
        //             'Accept': 'application/json',
        //             "Content-type": "application/json; charset=UTF-8"

        //         }
        //     }).then(function(response) {
        //         return response.json();
        //     }).then(function(jsondata) {
        //         if (jsondata.result != null) {
        //             birth = jsondata.result.birthdate
        //             if (jsondata.result.death != undefined) {
        //                 death = jsondata.result.death
        //             }
        //             info = jsondata.result.info;
        //             starttextanimation(buffer = birth, question = copy)
        //             buffer = birth
        //         } else {
        //             starttextanimation(buffer = "Couldn't find that in my data base sir", question = copy)
        //         }

        //         speak(buffer)
        //     });
        // }

        // find = jsonData.query.pages.find(element => element.thumbnail.source == "");










    });

}