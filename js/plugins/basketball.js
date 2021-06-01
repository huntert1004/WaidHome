function getteambasketball(question) {
    if (question.startsWith("what is the score of the ")) {
        question = question.replace("what is the score of the ", "")
        question = question.replace(" game", "")
    }
    // if (question.indexOf(" ")) {
    //    question = question.replace(" ", "_")
    //}
    fetch('whatever/nba', {
        method: 'get',
        mode: 'cors',
        redirect: 'follow',
        headers: {
            'Accept': 'application/json'
            // 'x-rapidap   i-host': 'v1.basketball.api-sports.io',
            // 'x-apisports-key': 'faebff96cf2481265885adb0bd40545c'

        }
    }).then(function(response) {
        return response.json();
    }).then(function(jsonData) {

        year = jsonData.season.year;
        name_event = [];
        start_time = [];
        season = [];
        ticket_price = [];
        network = []
        court = [];
        hometeamname = []
        awayteamname = []
        hometeamlogo = []
        awayteamlogo = []
        hometeamcolor = []
        awayteamcolor = []
        hometeamscore = []
        awayteamscore = []
        gameodds = [];
        for (i = 0; i < jsonData.events.length; i++) {
            name_event += jsonData.events[i].name + "/";
            start_time += jsonData.events[i].status.detail + "/";
            season += jsonData.events[i].season.slug + "/";
            ticket_price += jsonData.events[i].competitions[0].tickets[0].summary + "/";
            network += jsonData.events[i].geoBroadcasts[0].media.shortName + "/";
            court += jsonData.events[i].competitions[0].venue.fullName + ',' + jsonData.events[i].competitions[0].venue.address.city + ',' + jsonData.events[i].competitions[0].venue.address.state + "/";
            hometeamname += jsonData.events[i].competitions[0].competitors[0].team.name + "/";
            awayteamname += jsonData.events[i].competitions[0].competitors[1].team.name + "/";
            hometeamlogo += jsonData.events[i].competitions[0].competitors[0].team.logo + "/";
            awayteamlogo += jsonData.events[i].competitions[0].competitors[1].team.logo + "/";
            awayteamcolor += jsonData.events[i].competitions[0].competitors[1].team.color + "/";
            hometeamcolor += jsonData.events[i].competitions[0].competitors[0].team.color + "/";
            hometeamscore += jsonData.events[i].competitions[0].competitors[0].score + "/";
            awayteamscore += jsonData.events[i].competitions[0].competitors[1].score + "/";
            gameodds += jsonData.events[i].odds.detail + "/";
        }
        name_event = name_event.split("/");
        start_time = start_time.split("/");
        season = season.split("/");
        ticket_price = season.split("/");
        network = network.split("/");
        court = court.split("/");
        hometeamname = hometeamname.split("/")
        awayteamname = awayteamname.split("/")
        hometeamlogo = hometeamlogo.split("/")
        awayteamlogo = awayteamlogo.split("/")
        awayteamcolor = awayteamcolor.split("/")
        hometeamcolor = hometeamcolor.split("/")
        hometeamscore = hometeamscore.split("/")
        awayteamscore = awayteamscore.split("/")
        gameodds = gameodds.split("/")
        if (copy.startsWith("what is the score of the ")) {
            var founditem = jsonData.events.find(x => x.name.indexOf(question) >= 0);
            gametitle = founditem.name;
            start_time = founditem.status.detail;
            season = founditem.season.slug;
            ticket_price = founditem.competitions[0].tickets[0].summary;
            network = founditem.geoBroadcasts[0].media.shortName;
            hometeamname = founditem.competitions[0].competitors[0].team.name
            awayteamname = founditem.competitions[0].competitors[1].team.name
            hometeamcolor = founditem.competitions[0].competitors[0].team.color;
            awayteamcolor = founditem.competitions[0].competitors[1].team.color
            hometeamscore = founditem.competitions[0].competitors[0].score
            awayteamscore = founditem.competitions[0].competitors[1].score
            gameodds = founditem.odds.detail
            buffer = "The score of the " + question + " game is " + hometeamscore + " to " + awayteamscore
            starttextanimation(buffer)
            speak(buffer)





        }
    });
}

function getgameinfo(team_id) {
    var home_team;
    var d = new Date;
    year = d.getFullYear();
    fetch('https://v1.basketball.api-sports.io/games?team=' + team_id + '&season=' + year, {
        method: 'get',
        mode: 'cors',
        redirect: 'follow',
        headers: {
            'Accept': 'application/json',
            'x-rapidapi-host': 'v1.basketball.api-sports.io',
            'x-apisports-key': 'faebff96cf2481265885adb0bd40545c'

        }
    }).then(function(response) {
        return response.json();
    }).then(function(jsonData) {

        if (jsonData.response.length <= 0) {
            year = Number(year)
            lastyear = year - 1
            fetch('https://v1.basketball.api-sports.io/games?team=' + team_id + '&season=' + year, {
                method: 'get',
                mode: 'cors',
                redirect: 'follow',
                headers: {
                    'Accept': 'application/json',
                    'x-rapidapi-host': 'v1.basketball.api-sports.io',
                    'x-apisports-key': 'faebff96cf2481265885adb0bd40545c'

                }
            }).then(function(response) {
                return response.json();
            }).then(function(jsonData) {
                if (jsonData.response.length <= 0) {
                    year = lastyear + "-" + year
                    fetch('https://v1.basketball.api-sports.io/games?team=' + team_id + '&season=' + year, {
                        method: 'get',
                        mode: 'cors',
                        redirect: 'follow',
                        headers: {
                            'Accept': 'application/json',
                            'x-rapidapi-host': 'v1.basketball.api-sports.io',
                            'x-apisports-key': 'faebff96cf2481265885adb0bd40545c'

                        }
                    }).then(function(response) {
                        return response.json();
                    }).then(function(jsonData) {
                        var d = new Date();
                        currentdate = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDay() + "T" + d.getHours() + ":00:00+00:00"
                        most_recent = jsonData.response.length - 1
                        find = jsonData.response.find(element => element.date <= currentdate);

                        home_team = find.teams.home.name;
                        away_team = find.teams.away.name;
                        status_of_game = find.status.long;
                        country = find.country.name;
                        home_score_quarter_1 = find.scores.home.quarter_1;
                        home_score_quarter_2 = find.scores.home.quarter_2;
                        home_score_quarter_3 = find.scores.home.quarter_3;
                        home_score_quarter_4 = find.scores.home.quarter_4;
                        home_score_total = find.scores.home.total;
                        over_time = find.scores.home.overtime;
                        away_score_quarter_1 = find.scores.home.quarter_1;
                        away_score_quarter_2 = find.scores.home.quarter_2;
                        away_score_quarter_3 = find.scores.home.quarter_3;
                        away_score_quarter_4 = find.scores.home.quarter_4;
                        away_score_total = find.scores.home.total;
                        date = find.date;

                    });
                }
                if (home_team == "") {
                    most_recent = jsonData.response.length
                    home_team = find.teams.home.name;
                    away_team = find.teams.away.name;
                    status_of_game = find.status.long;
                    country = find.country.name;
                    home_score_quarter_1 = find.home.scores.quarter_1;
                    home_score_quarter_2 = find.home.scores.quarter_2;
                    home_score_quarter_3 = find.home.scores.quarter_3;
                    home_score_quarter_4 = find.home.scores.quarter_4;
                    home_score_total = find.home.scores.total;
                    over_time = find.home.scores.overtime;
                    away_score_quarter_1 = find.home.scores.quarter_1;
                    away_score_quarter_2 = find.home.scores.quarter_2;
                    away_score_quarter_3 = find.home.scores.quarter_3;
                    away_score_quarter_4 = find.home.scores.quarter_4;
                    away_score_total = find.home.scores.total;
                    date = find.date;
                }
            });
        }
        if (home_team == "") {
            most_recent = jsonData.response.length
            home_team = find.teams.home.name;
            away_team = find.teams.away.name;
            status_of_game = find.status.long;
            country = find.country.name;
            home_score_quarter_1 = find.home.scores.quarter_1;
            home_score_quarter_2 = find.home.scores.quarter_2;
            home_score_quarter_3 = find.home.scores.quarter_3;
            home_score_quarter_4 = find.home.scores.quarter_4;
            home_score_total = find.home.scores.total;
            over_time = find.home.scores.overtime;
            away_score_quarter_1 = find.home.scores.quarter_1;
            away_score_quarter_2 = find.home.scores.quarter_2;
            away_score_quarter_3 = find.home.scores.quarter_3;
            away_score_quarter_4 = find.home.scores.quarter_4;
            away_score_total = find.home.scores.total;
            date = find.date;
        }
        if (home_score_total > away_score_total) {
            who_won = home_team + " won " + home_score_total + " to " + away_score_total
        }
        if (home_score_total < away_score_total) {
            who_won = away_team + " won " + away_team + " to " + home_team
        }
        if (home_score_total == away_score_total) {
            who_won = " they tied " + home_team + " to " + away_team
        }
        buffer = away_team + " played " + home_team + " and " + who_won + " which started at " + date
        starttextanimation(buffer)
        speak(buffer)
    });


}