function getmovie(question = txt, copy) {
    copylol = question
    fetch("https://www.omdbapi.com/?t=" + question + "&apikey=fac2a408&", {
        method: 'get',
        mode: 'cors',
        redirect: 'follow'


    }).then(function(response) {
        return response.json();
    }).then(function(jsonData) {
        movie_title = jsonData.Title;
        movie_year = jsonData.Year;
        movie_rated = jsonData.Rated;
        movie_release = jsonData.Released;
        movie_genre = jsonData.Genre;
        movie_director = jsonData.Director;
        movie_actors = jsonData.Actors;
        movie_plot = jsonData.Plot;
        movie_poster = jsonData.Poster;
        movie_awards = jsonData.Awards;
        if (copy.startsWith("tell me about the movie")) {
            sessionStorage.setItem("movie_title", movie_title);
            sessionStorage.setItem("movie_year", movie_year);
            sessionStorage.setItem("movie_release", movie_release);
            sessionStorage.setItem("movie_genre", movie_genre);
            sessionStorage.setItem("movie_director", movie_director);
            sessionStorage.setItem("movie_actors", movie_actors);
            sessionStorage.setItem("movie_plot", movie_plot);
            sessionStorage.setItem("movie_poster", movie_poster);
            var movie_title = sessionStorage.getItem("movie_title");
            var movie_director = sessionStorage.getItem("movie_director")
            buffer = movie_title + " by " + movie_director

            // var win = window.open("movie.html", );
            parent.document.getElementById("movie").src = "movie.html"
            starttextanimation(buffer, question = copylol)
            speak(buffer);





        }
        if (copy.startsWith("who is in the movie")) {


            sessionStorage.setItem("movie_title", movie_title);
            sessionStorage.setItem("movie_year", movie_year);
            sessionStorage.setItem("movie_release", movie_release);
            sessionStorage.setItem("movie_genre", movie_genre);
            sessionStorage.setItem("movie_director", movie_director);

            sessionStorage.setItem("movie_plot", movie_plot);
            sessionStorage.setItem("movie_poster", movie_poster);
            sessionStorage.setItem("movie_actors", movie_actors);
            buffer = movie_title + " actors include " + movie_actors;
            parent.document.getElementById("movie").src = "movie.html"
            starttextanimation(buffer, question = copylol)
            speak(buffer);




            // buffer = movie_title + " actors include " + movie_actors;
            // starttextanimation(buffer)
            // var win = window.open("actor.html", );
            // speak(buffer);
        }








    });
}

function getidtrailer(question) {
    if (question.startsWith("show me a trailer of ")) {
        question = question.replace("show me a trailer of ", "")
    }
    if (question.startsWith("show me trailer of ")) {
        question = question.replace("show me trailer of ", "")
    }
    if (question.startsWith("show me trailer for ")) {
        question = question.replace("show me trailer for ", "")
    }
    if (question.startsWith("show me a trailer for ")) {
        question = question.replace("show me a trailer for ", "")
    }
    fetch("https://imdb-api.com/en/API/SearchMovie/k_8381g713/" + question, {
        method: 'get',
        mode: 'cors',
        redirect: 'follow'


    }).then(function(response) {
        return response.json();
    }).then(function(jsonData) {
        id = jsonData.results[0].id;
        imgurl = jsonData.results[0].image;
        title = jsonData.results[0].title;
        description = jsonData.results[0].description;
        gettrailer(id, imgurl, title, description);
    });
}

function gettrailer(id, imgurl, title, description) {
    fetch("https://imdb-api.com/en/API/YouTubeTrailer/k_8381g713/" + id, {
        method: 'get',
        mode: 'cors',
        redirect: 'follow'


    }).then(function(response) {
        return response.json();
    }).then(function(jsonData) {
        year = jsonData.year;
        vidurl = jsonData.videoUrl;


        sessionStorage.setItem("vidurl", vidurl);
        var movie_title = sessionStorage.getItem("movie_title");
        var movie_director = sessionStorage.getItem("movie_director")
        buffer = movie_title + " by " + movie_director
        starttextanimation(buffer)
        speak(buffer);
        // var win = window.open("movie.html", );
        parent.document.getElementById("movie").src = "movie.html"

    });

}

function getactorinfo(question) {
    copy = question
    if (question.startsWith("what movie is")) {
        question = question.replace("what movie is", "")
        question = question.replace("known for", "")
    }
    if (question.startsWith("what tv show is")) {
        question = question.replace("what tv show is", "")
        question = question.replace("known for", "")
    }
    fetch("https://api.themoviedb.org/3/search/person?api_key=ab280a16e35ff408bdd087f8f3b49abb&language=en-US&query=" + question + "&page=1&include_adult=false", {
        method: 'get',
        mode: 'cors',
        redirect: 'follow'


    }).then(function(response) {
        return response.json();
    }).then(function(jsonData) {
        a_name = jsonData.results[0].name;
        a_movie_title = jsonData.results[0].known_for[0].title;
        a_movie_plot = jsonData.results[0].known_for[0].overview;
        buffer = a_name + " is known for " + a_movie_title + " which is " + a_movie_plot;
        starttextanimation(buffer, question = copy)
        speak(buffer);

    });
}

function getpopmovie() {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=ab280a16e35ff408bdd087f8f3b49abb", {
        method: 'get',
        mode: 'cors',
        redirect: 'follow'


    }).then(function(response) {
        return response.json();
    }).then(function(jsonData) {
        var movietitle;

        for (i = 0; i < jsonData.results.length; i++) {
            movietitle += jsonData.results[i].title + " ";

        }
        if (movietitle.indexOf("undefined")) {
            movietitle.replace("undefined")
        }
        buffer = "The top movies include " + movietitle;
        starttextanimation(buffer, question = copy)
        speak(buffer);
    });
}