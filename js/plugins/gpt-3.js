function getdefault(question) {
    if (question.indexOf("?") >= 0) {
        question = "Q: " + question + "\n";
    }


    fetch("https://elated-nightingale-4d9b97.netlify.app/api/gpt?data=" + question, {
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
        answer = jsonData.result[0].generated_text;
        buffer = answer;
        buffer = buffer.replace(question, "")

        //buffer = buffer + answer;

        //clean up some bad formatting
        if (buffer.startsWith("?")) {
            buffer = buffer.replace("?", "")
        }
        buffer = buffer.replace('/<\/?[^>]+(>|$)/g"', "");
        // buffer = buffer.split(".")[0]


        starttextanimation(buffer, question)
        speak(buffer);
    });
}