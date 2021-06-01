function getfoodimg() {
    fetch('https://foodish-api.herokuapp.com/api/', {
        method: 'get',
        mode: 'cors',
        redirect: 'follow'

    }).then(function(response) {
        return response.json();
    }).then(function(jsonData) {
        image = jsonData.image;
        document.getElementById("data1").src = image;
        buffer = "Hungry yet?"
        starttextanimation(buffer, question);
        speak(buffer);
    });
}