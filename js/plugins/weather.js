function getweather(question) {
    navigator.geolocation.getCurrentPosition(getLatLon);

    function getLatLon(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        fetch('https://api.weatherapi.com/v1/current.json?key=0baa786ff0ce48b6bbb41634212204&q=' + latitude + "," + longitude, {
            method: 'get',
            mode: 'cors',
            redirect: 'follow'

        }).then(function(response) {
            return response.json();
        }).then(function(jsonData) {
            temp = jsonData.current.temp_f;
            conditionimg = jsonData.current.condition.icon
            city = jsonData.location.name
            desc = jsonData.current.condition.text

            if (question.indexOf("weather") >= 0 && question.indexOf("today") >= 0) {
                sessionStorage.setItem("temp", temp);
                sessionStorage.setItem("conditionimg", conditionimg);
                sessionStorage.setItem("city", city);
                parent.document.getElementById("data2").src = "weather.html"
                buffer = "Temperature is " + temp + " degrees and is " + desc + " in " + city + "."
                starttextanimation(buffer, question)
                speak(buffer);
            }
            if (question.indexOf("weather") >= 0 && question.indexOf("tomorrow") >= 0) {
                fetch('https://api.weatherapi.com/v1/forecast.json?key=0baa786ff0ce48b6bbb41634212204&q=' + latitude + "," + longitude, {
                    method: 'get',
                    mode: 'cors',
                    redirect: 'follow'

                }).then(function(response) {
                    return response.json();
                }).then(function(jsondata) {
                    city = jsondata.location.name
                    temp = jsondata.forecast.forecastday[0].day.avgtemp_f;
                    conditionimg = jsondata.forecast.forecastday[0].day.condition.icon
                    desc = jsondata.forecast.forecastday[0].day.condition.text
                    Number(temp)
                    temp = Math.round(temp)
                    sessionStorage.setItem("temp", temp);
                    sessionStorage.setItem("conditionimg", conditionimg);
                    sessionStorage.setItem("city", city);
                    parent.document.getElementById("data2").src = "weather.html"
                    buffer = "Temperature tomorrow is" + temp + " degrees and is " + desc + " in " + city + "."
                    starttextanimation(buffer, question)
                    speak(buffer);
                });
            }
        });
    }
}