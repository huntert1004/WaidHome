function getcapital(question) {
    copy = question
    if (question.startsWith("what is the capital of ")) {
        question = question.split("what is the capital of ")[1]
    }
    fetch("json/country.json", {
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
        var founditem = jsonData.find(x => name === question)
        capital = founditem.name;
        buffer = "The capital of " + question + " is " + capital;
        starttextanimation(buffer, question = copy)
        speak(buffer);
    });
}