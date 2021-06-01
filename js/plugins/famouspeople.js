function getpeopleinfo(question) {
    copy = question
    if (question.startsWith("who is ")) {
        question = question.replace("who is ", "")
    }
    fetch('https://elated-nightingale-4d9b97.netlify.app/api/peopledata?data=' + question, {
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
        birthdate = jsonData.result.birthdata
        info = jsonData.result.info
        Pname = jsonData.result.name
        zodiac = jsonData.result.zodiac

        // find = jsonData.query.pages.find(element => element.thumbnail.source == "");






        sessionStorage.setItem("birthdate", birthdate);
        sessionStorage.setItem("info", info);
        sessionStorage.setItem("Pname", Pname);
        sessionStorage.setItem("zodiac", zodiac);


        starttextanimation(buffer = Pname + " " + info + zodiac, question = copy)
        speak(buffer = Pname)
    });
}