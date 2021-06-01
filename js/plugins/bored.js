function getactivities(question) {
    fetch('https://www.boredapi.com/api/activity/', {
        method: 'get',
        mode: 'cors',
        redirect: 'follow'

    }).then(function(response) {
        return response.json();
    }).then(function(jsonData) {
        activity = jsonData.activity;
        buffer = "You should " + activity
        starttextanimation(buffer, question)
        speak(buffer);
    });
}