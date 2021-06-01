function getjoke(question) {
    fetch('https://icanhazdadjoke.com/slack', {
        method: 'get',
        mode: 'cors',
        redirect: 'follow'

    }).then(function(response) {
        return response.json();
    }).then(function(jsonData) {
        // joke_setup = jsonData.setup;
        joke_delivery = jsonData.attachments[0].fallback;
        //     if (joke_setup == undefined && joke_delivery == undefined) {
        //         fetch('https://v2.jokeapi.dev/joke/Any', {
        //             method: 'get',
        //             mode: 'cors',
        //             redirect: 'follow'

        //         }).then(function(response) {
        //             return response.json();
        //         }).then(function(jsonData) {
        //             joke_setup = jsonData.setup;
        //             joke_delivery = jsonData.delivery;
        //         });

        //     }

        starttextanimation(buffer = joke_delivery, question)
        //     document.getElementById("response").innerHTML = buffer;
        speak(buffer = joke_delivery);
        //     history.push(['Command/Question is ' + question, "Answer is " + buffer]);
    });
}