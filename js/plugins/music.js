function getartistbio(question) {
    if (question.startsWith("who are the")) {
        question = question.split("who are the ")[1];
    }
    if (question.startsWith("who is the")) {
        question = question.split("who is the ")[1];
    }
    fetch('https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + question + '&api_key=385e932bf299a93cbb2c84e2996e533b&format=json', {
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
        bio = jsonData.artist.bio.summary;
        a_name = jsonData.artist.name;
        buffer = a_name + " is " + bio
        starttextanimation(buffer)
        speak(buffer);
    });
}

function gettoptracks(question) {
    if (question.startsWith("what are the top songs by")) {
        question = question.split("what are the top songs by ")[1];
    }
    fetch('https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=' + question + '&api_key=385e932bf299a93cbb2c84e2996e533b&format=json', {
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
        s_name1 = jsonData.toptracks.track[0].name;
        a_name1 = jsonData.toptracks.track[0].artist.name;
        s_name2 = jsonData.toptracks.track[1].name;
        a_name2 = jsonData.toptracks.track[1].artist.name;
        s_name3 = jsonData.toptracks.track[2].name;
        a_name3 = jsonData.toptracks.track[2].artist.name;
        buffer = a_name1 + " top hits are " + s_name1 + " " + s_name2 + " and " + s_name3 + "."
        starttextanimation(buffer)
        speak(buffer);
    });
}

function getsongsearch(question) {
    if (question.startsWith("who sings")) {
        question = question.split("who sings ")[1];
    }
    fetch('https://ws.audioscrobbler.com/2.0/?method=track.search&track=' + question + '&api_key=385e932bf299a93cbb2c84e2996e533b&format=json', {
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
        s_artist = jsonData.results.trackmatches.track[0].artist;
        s_name = jsonData.results.trackmatches.track[0].name;
        s_url = jsonData.results.trackmatches.track[0].url;
        buffer = s_name + " is sang by " + s_artist
        starttextanimation(buffer)
        speak(buffer);

    });
}

function playsample(question) {
    copy = question
    if (question.startsWith("play ")) {
        question = question.replace("play ", "");
        question = question.replace(" by ", "/")
        question = question.split("/");
        trackname = question[0]
        artistname = question[1];
    }

    fetch('https://api.napster.com/v2.2/search?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4&query=' + trackname + '&type=tracks', {
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
        fetch('https://api.napster.com/v2.2/search?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4&query=' + artistname + '&type=artist', {
            method: 'get',
            mode: 'cors',
            redirect: 'follow',
            headers: {
                'Accept': 'application/json',
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(function(response) {
            return response.json();
        }).then(function(jsondata) {
            if (jsondata.search.data.artists.length != 0) {
                artistid = jsondata.search.data.artists[0].id
                artistname = jsondata.search.data.artists[0].name
                toptracks = jsondata.search.data.artists[0].links.topTracks;

                find = jsonData.search.data.tracks.find(element => element.artistId == artistid);
                songpreveiw = find.previewURL;
                songname = find.name;
                albumid = find.albumId;
                albumsall = find.links.albums.href
            } else {
                playsampletrack(question = trackname)
            }

            fetch(albumsall + '/images?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4', {
                method: 'get',
                mode: 'cors',
                redirect: 'follow',
                headers: {
                    'Accept': 'application/json',
                    "Content-type": "application/json; charset=UTF-8"
                }
            }).then(function(response) {
                return response.json();
            }).then(function(imgdata) {

                find = imgdata.images.find(element => element.width == Math.max(element.width));
                albumimd = find.url;
                length = imgdata.images.length
                albumimdbig = imgdata.images[length - 1].url
                if (songpreveiw == "https://listen.hs.llnwd.net/g1/9/7/4/5/7/355875479.mp3") {
                    songpreveiw = "https://listen.hs.llnwd.net/g3/prvw/1/1/9/7/1/1432517911.mp3"

                }

                buffer = songname + " by " + artistname
                starttextanimation(buffer, question = copy)
                sessionStorage.setItem("albumimdbig", albumimdbig);
                sessionStorage.setItem("songname", songname);
                sessionStorage.setItem("artistname", artistname);
                sessionStorage.setItem("songpreveiw", songpreveiw);
                sessionStorage.setItem("albumimd", albumimd);
                parent.document.getElementById("music").src = "audio.html"

                speak(buffer)

            });
        });
    });

}

function playsampletrack(question) {
    copy = question
    if (question.startsWith("play")) {
        question = question.split("play ")[1]
    }
    fetch('https://api.napster.com/v2.2/search?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4&query=' + question + '&type=tracks', {
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
        songpreveiw = jsonData.search.data.tracks[0].previewURL;
        artistname = jsonData.search.data.tracks[0].artistName;
        songname = jsonData.search.data.tracks[0].name;
        albumsall = jsonData.search.data.tracks[0].links.albums.href
        fetch(albumsall + '/images?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4', {
            method: 'get',
            mode: 'cors',
            redirect: 'follow',
            headers: {
                'Accept': 'application/json',
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(function(response) {
            return response.json();
        }).then(function(imgdata) {
            find = imgdata.images.find(element => element.width == Math.max(element.width));
            albumimd = find.url;
            length = imgdata.images.length
            albumimdbig = imgdata.images[length - 1].url
            buffer = songname + " by " + artistname
            starttextanimation(buffer, question = copy)
            sessionStorage.setItem("albumimdbig", albumimdbig);
            sessionStorage.setItem("songname", songname);
            sessionStorage.setItem("artistname", artistname);
            sessionStorage.setItem("songpreveiw", songpreveiw);
            sessionStorage.setItem("albumimd", albumimd);
            parent.document.getElementById("music").src = "audio.html"

            speak(buffer)

        });
    });
    // var childiFrame = parent.document.getElementById("music");
    // var doc = childiFrame.contentDocument ||
    //     childiFrame.contentWindow.document;
    // var myAudio = doc.getElementById('myAudio');
    // myAudio.onended = function() {
    //     parent.document.getElementById("music").src = ""
    // };
}