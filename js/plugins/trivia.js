function getrandomtrivia() {
    fetch('https://jservice.io/api/random', {
        method: 'get',
        mode: 'cors',
        redirect: 'follow'

    }).then(function(response) {
        return response.json();
    }).then(function(jsonData) {
        question = jsonData[0].question;
        answer = jsonData[0].answer;
        category = jsonData[0].category.title;
        buffer = "From Category " + category + "." + "Question: " + question
        sessionStorage.setItem("buffer", buffer);
        sessionStorage.setItem("question", question);
        sessionStorage.setItem("answer", answer);
        parent.document.getElementById("movie").src = "trivia.html"
        // var win = window.open("trivia.html", );
    });
}