function getpoptv(question) {
    fetch("https://api.themoviedb.org/3/tv/popular?api_key=ab280a16e35ff408bdd087f8f3b49abb", {
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
        buffer = "The top tv shows include " + movietitle;
        starttextanimation(buffer, question)
        speak(buffer);
    });
}

function gettv(txt, copy) {
    fetch("http://www.omdbapi.com/?t=" + txt + "&apikey=fac2a408&", {
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
        sessionStorage.setItem("movie_title", movie_title);
        sessionStorage.setItem("movie_year", movie_year);
        sessionStorage.setItem("movie_release", movie_release);
        sessionStorage.setItem("movie_genre", movie_genre);
        sessionStorage.setItem("movie_director", movie_director);
        sessionStorage.setItem("movie_actors", movie_actors);
        sessionStorage.setItem("movie_plot", movie_plot);
        sessionStorage.setItem("movie_poster", movie_poster);
        if (copy.startsWith("tell me about the tv show")) {

            // getidtrailer(question)
            buffer = movie_title + " by " + movie_director
            starttextanimation(buffer, question = copy)
            parent.document.getElementById("movie").src = "movie.html"
            speak(buffer);
        }
        if (copy.startsWith("who is in the tv show")) {
            buffer = movie_title + " actors include " + movie_actors;
            starttextanimation(buffer, question = copy)
            parent.document.getElementById("movie").src = "movie.html"
            speak(buffer);
            document.getElementById("myImg").src = movie_poster;



        }




    });
}