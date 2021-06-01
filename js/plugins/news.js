function getnews(question, temp_real, feels_like_real, humidity_real, weather_desctription_real) {
    fetch("https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=NkuCzoX7GsUt1uBwb8yXnwC4DGwwHFdj", {
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
        article1_title = jsonData.results[0].title;
        article1_description = jsonData.results[0].abstract;
        article1_source = jsonData.results[0].source;
        article1_url = jsonData.results[0].url;
        article1_img = jsonData.results[0].multimedia[2].url
        article2_img = jsonData.results[1].multimedia[2].url
        article2_url = jsonData.results[1].url;


        article2_title = jsonData.results[1].title;
        article2_description = jsonData.results[1].abstract;
        article2_source = jsonData.results[1].source;
        sessionStorage.setItem("article1_url", article1_url);
        sessionStorage.setItem("article2_url", article2_url);

        sessionStorage.setItem("article1_title", article1_title);
        sessionStorage.setItem("article1_description", article1_description);
        sessionStorage.setItem("article1_source", article1_source);
        sessionStorage.setItem("article1_img", article1_img);
        sessionStorage.setItem("article2_title", article2_title);
        sessionStorage.setItem("article2_description", article2_description);
        sessionStorage.setItem("article2_source", article2_source);
        sessionStorage.setItem("article2_img", article2_img);

        fetch('https://api.openweathermap.org/data/2.5/weather?q=Naples&appid=0d055806f0b782086c827a4b2652545c', {
            method: 'get',
            mode: 'cors',
            redirect: 'follow'

        }).then(function(response) {
            return response.json();
        }).then(function(jsonData) {
            temp = jsonData.main.temp;
            temp_f = (temp - 273.15) * 9 / 5 + 32;
            var a = Math.round(temp_f);
            feels_like = jsonData.main.feels_like;
            feels_like_f = (feels_like - 273.15) * 9 / 5 + 32;
            var b = Math.round(feels_like_f);
            humidity = jsonData.main.humidity;
            weather_desctription = jsonData.weather.description;
            var temp_real = JSON.stringify(a);
            var feels_like_real = JSON.stringify(b);
            var humidity_real = JSON.stringify(humidity);
            var weather_desctription_real = JSON.stringify(weather_desctription);

            getnewsresponse(weather_desctription_real, humidity_real, feels_like_real, temp_real, article1_description, article1_source, article1_title, article2_description, article2_source, article2_title, question)
        });
    });
}

function getnewsresponse(weather_desctription_real, humidity_real, feels_like_real, temp_real, article1_description, article1_source, article1_title, article2_description, article2_source, article2_title, question) {
    if (question.indexOf("news") >= 0 && question.indexOf("today") >= 0) {
        parent.document.getElementById("music").src = "news.html"
        buffer = "The news today is " + article1_title + " " + article1_description + " by " + article1_source
        starttextanimation(buffer, question);
        speak(buffer);

    }
    if (question.indexOf("Goodmorning") >= 0 || question.indexOf("Good morning") >= 0 || question.indexOf("good morning") >= 0 || question.indexOf("goodmorning") >= 0) {
        getweather(question)
        getnews(question, temp_real, feels_like_real, humidity_real, weather_desctription_real)
        buffer = "Goodmorning sir the tempature in Fort Myers today is " + temp_real + " degrees" + " and it feels like " + feels_like_real + " degrees" + ". Humidity is " + humidity_real + "%" + "." + " It is " + weather_desctription_real + ".In the news today is " + article1_title + " " + article1_description + " by " + article1_source + " another article by " + article2_source + " " + article2_title + " " + article2_description;
        starttextanimation(buffer, question);
        speak(buffer);
    }

}