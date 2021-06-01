function getConvo(question) {

    fetch("https://elated-nightingale-4d9b97.netlify.app/api/convo?data=" + question, {
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
        buffer = jsonData.result;

        //buffer = buffer + answer;
        starttextanimation(buffer, question)
        speak(buffer)

    });
}