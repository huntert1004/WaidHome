function getadvice(question) {

    fetch('https://api.adviceslip.com/advice', {
        method: 'get',
        mode: 'cors',
        redirect: 'follow'

    }).then(function(response) {
        return response.json();
    }).then(function(jsonData) {
        advice = jsonData.slip.advice;
        buffer = "My advice today is " + advice + " sir."
        starttextanimation(buffer, question)
        speak(buffer);
    });

}