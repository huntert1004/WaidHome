function getsuggestions(question) {
    copy = question
    if (question.startsWith("what else could I read besides")) {
        question = question.replace("what else could I read besides ", "")
    }
    if (question.startsWith("what else could I watch besides")) {
        question = question.replace("what else could I watch besides ", "")
    }
    if (question.startsWith("what else could I listen to besides")) {
        question = question.replace("what else could I listen to besides ", "")
    }
    //api does bands, movies, TV shows, podcasts, books, authors and/or games
    fetch('https://tastedive.com/api/similar?q=' + question + '&k=404747-Jarvis-CQ07WRZT', {
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
        name_info1 = jsonData.Similar.Results[0].Name;
        type_info1 = jsonData.Similar.Results[0].Type;
        name_info2 = jsonData.Similar.Results[1].Name;
        type_info2 = jsonData.Similar.Results[1].Type;
        name_info3 = jsonData.Similar.Results[2].Name;
        type_info3 = jsonData.Similar.Results[2].Type;
        buffer = "Some things similar to " + question + " are the " + type_info1 + " " + name_info1 + " the " + type_info2 + " " + name_info2 + " and the" + type_info3 + " " + name_info3 + ".";
        starttextanimation(buffer, question = copy)
        speak(buffer);
    });
}