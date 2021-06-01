function getholiday(question) {
    copy = question;
    copylol = question
    if (question.startsWith(" when is")) {
        question = question.split(" when is")[1];
    }
    fetch('https://holidayapi.com/v1/holidays?pretty&key=1b36df4b-7657-48ef-973a-9b17aa3720bf&country=US&year=2020', {
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
        hi = jsonData.holidays[0].name
        var h_name = [];
        var h_date = [];
        var h_country = [];
        var h_weekday = [];

        for (i = 0; i < jsonData.holidays.length; i++) {
            h_name += jsonData.holidays[i].name;
            h_date += jsonData.holidays[i].date;
            h_country += jsonData.holidays[i].country;
            h_weekday += jsonData.holidays[i].weekday.date.name;
        }
        if (copy.startsWith(" when is")) {
            var founditem = jsonData.holidays[i].find(x => x.h_name === question)
            date = founditem.date;
            weekday = founditem.weekday.date.name;
            buffer = founditem.name + " is on " + weekday
        }

        if (copy.startsWith(" give me a list")) {
            buffer = hi + " on " + jsonData.holidays[0].date + ". " + jsonData.holidays[1].name + " on " + jsonData.holidays[1].date + ". " + jsonData.holidays[2].name + " on " + jsonData.holidays[2].date
        }
        starttextanimation(buffer, question = copylol)
        speak(buffer);






    });
}