function breakingbad(question) {
    fetch('https://www.breakingbadapi.com/api/quotes', {
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
        random = Math.floor((Math.random() * 69) + 1)
        quote = jsonData[random].quote;
        author = jsonData[random].author;
        buffer = quote + " by " + author;
        starttextanimation(buffer, question);
        speak(buffer);
    });
}