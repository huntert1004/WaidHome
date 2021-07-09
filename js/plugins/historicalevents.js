function gethiseventinfo(question) {
    copy = question
    if (question.startsWith("who is ")) {
        question = question.replace("who is ", "")
    }
    if (question.startsWith("when was ")) {
        question = question.replace("when was ", "")
    }
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
            buffer = bio
        } else {
            buffer = "I couldn't find that in my database sir."
            eventname = "I couldn't find that in my database sir."
        }
        // find = jsonData.query.pages.find(element => element.thumbnail.source == "");










        // starttextanimation(buffer, question = copy)
        // buffer = eventname
        speak(buffer)
    });
}