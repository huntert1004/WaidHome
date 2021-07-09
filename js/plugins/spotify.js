function getspotifyaccess(question) {
    fetch('json/access.json', {
        method: 'get',
        mode: 'cors',
        redirect: 'follow'
    }).then(function(response) {
        return response.json();
    }).then(function(jsonData) {
        access_token = jsonData.access_token;
        refresh_token = jsonData.refresh_token;
        sessionStorage.setItem("access_token", access_token);
        sessionStorage.setItem("refresh_token", refresh_token);
        if (question != "next") {
            if (question.indexOf("play") >= 0 && question.indexOf(" by ") >= 0) {

            } else if (question.indexOf("play") >= 0 && question.indexOf("rock") >= 0 && question.indexOf("playlist") >= 0) {
                playessentialrock(access_token)
            } else if (question.indexOf("play") >= 0 && question.indexOf("work") >= 0 || question.indexOf("rap") >= 0 || question.indexOf("hip hop") >= 0 && question.indexOf("playlist") >= 0) {
                playrap(access_token)
            } else if (question.indexOf("play") >= 0 && question.indexOf("country") >= 0 && question.indexOf("playlist") >= 0) {
                playcountry(access_token)
            } else if (question.indexOf("play") >= 0 && question.indexOf("pop") >= 0 && question.indexOf("playlist") >= 0) {
                playpop(access_token)
            } else {
                songsearch(access_token)
            }
        }

    });
}

function playessentialrock(access_token) {
    fetch('https://api.spotify.com/v1/me/player/devices', {
        method: 'get',
        mode: 'cors',
        redirect: 'follow',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            'Authorization': 'Bearer ' + access_token

        }
    }).then(function(response) {
        return response.json();
    }).then(function(jsondata) {

        deviceid = jsondata.devices[0].id;
        sessionStorage.setItem("deviceid", deviceid);
        random = Math.floor(Math.random() * 571);
        fetch('https://api.spotify.com/v1/me/player/play?device_id=' + deviceid, {
                method: "put",
                body: JSON.stringify({
                    "context_uri": "spotify:playlist:40wmIGkC95KpSgLG1GAyGb",
                    "offset": {
                        "position": random
                    },
                    "position_ms": 0
                }),
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    'Authorization': 'Bearer ' + access_token
                }
            })
            .then(response => response.json())
            .then(json => console.log(json))



        fetch('https://api.spotify.com/v1/me/player/shuffle?state=true&device_id=' + deviceid, {
                method: "put",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    'Authorization': 'Bearer ' + access_token
                }
            })
            .then(response => response.json())
            .then(json => console.log(json))

    })
    speak(buffer = "Now playing Essential Rock")
    intervalcontrol(access_token)
    setTimeout(function() {
        setmusicimg(access_token)
    }, 2000);
}

function intervalcontrol(access_token) {

    if (sessionStorage.intervalmusic == "") {
        musicinterval = setInterval(function() {
            setmusicimg(access_token)
        }, 1000);
        sessionStorage.intervalmusic = musicinterval
    } else {
        clearInterval(sessionStorage.intervalmusic)
        sessionStorage.intervalmusic = ""
        musicinterval = setInterval(function() {
            setmusicimg(access_token)
        }, 1000);
        sessionStorage.intervalmusic = musicinterval
    }
    // intervalcontrol(access_token)
}

function setsmallmusic() {
    fetch('json/access.json', {
        method: 'get',
        mode: 'cors',
        redirect: 'follow'
    }).then(function(response) {
        return response.json();
    }).then(function(jsonData) {
        access_token = jsonData.access_token;
        refresh_token = jsonData.refresh_token;

        sessionStorage.setItem("access_token", access_token);
        fetch('https://api.spotify.com/v1/me/player/currently-playing?market=US', {
            method: 'get',
            mode: 'cors',
            redirect: 'follow',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                'Authorization': 'Bearer ' + access_token

            }
        }).then(function(response) {
            return response.json();
        }).then(function(jsonData) {

            isplaying = jsonData.is_playing

            songname = jsonData.item.name;
            albumimg = jsonData.item.album.images[2].url;
            artistnamelength = jsonData.item.artists;
            albumname = jsonData.item.album.name

            if (artistnamelength.length > 1) {
                artistname = ""
                for (i = 0; i < artistnamelength.length; i++) {
                    if (artistnamelength.length - 1 > i) {
                        artistname += artistnamelength[i].name + " and ";
                    } else {
                        artistname += artistnamelength[i].name
                    }


                }
            } else {
                artistname = artistnamelength[0].name;
            }
            if (isplaying != "false") {
                songlink = ""
                // buffer = songname + " by " + artistname
                // starttextanimation(buffer, question = copy)
                sessionStorage.setItem("albumimd", albumimg);
                // sessionStorage.setItem("trackid", trackid);
                sessionStorage.setItem("songname", songname);
                sessionStorage.setItem("artistname", artistname);
                sessionStorage.setItem("songpreveiw", songlink);
                sessionStorage.setItem("albumimd", albumimg);
                parent.document.getElementById("minimusic").src = "musicsmall.html"
                hi = parent.document.getElementById("musicbg").src
                if (hi.endsWith("musicbackground.html")) {
                    clearInterval(sessionStorage.intervalmusic)
                    parent.document.getElementById("minimusic").src = ""
                } else {
                    parent.document.getElementById("music").src = ""
                }
                // if (sessionStorage.intervalmusic == "") {
                //     musicinterval = setInterval(function() {
                //         setsmallmusic(access_token)
                //     }, 10000);
                //     sessionStorage.intervalmusic = musicinterval
                // } else {
                //     clearInterval(sessionStorage.intervalmusic)
                //     sessionStorage.intervalmusic = ""
                //     musicinterval = setInterval(function() {
                //         setsmallmusic(access_token)
                //     }, 10000);
                //     sessionStorage.intervalmusic = musicinterval
                // }
            }
        });
    })
}

function setmusicimg(access_token) {

    fetch('https://api.spotify.com/v1/me/player/currently-playing?market=US', {
        method: 'get',
        mode: 'cors',
        redirect: 'follow',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            'Authorization': 'Bearer ' + access_token

        }
    }).then(function(response) {
        return response.json();
    }).then(function(jsonData) {

        isplaying = jsonData.is_playing

        songname = jsonData.item.name;
        albumimg = jsonData.item.album.images[1].url;
        artistnamelength = jsonData.item.artists;
        albumname = jsonData.item.album.name
        albumgif = ""
        // trackid = jsonData.item.id;
        if (albumname == "Abbey Road (Remastered)") {
            albumgif = "images/albumgif/abbyroad.gif"
        }
        if (albumname == "Astro Lounge") {
            albumgif = "images/albumgif/allstar.gif"
        }
        if (albumname == "Who's Next") {
            albumgif = "images/albumgif/baba.gif"
        }
        if (albumname == "Licensed To Ill") {
            albumgif = "images/albumgif/beastieboys.gif"
        }
        if (albumname == "Ride The Lightning (Deluxe Remaster)") {
            albumgif = "images/albumgif/bellstoll.gif"
        }
        if (albumname == "dont smile at me") {
            albumgif = "images/albumgif/billie.gif"
        }
        if (albumname == "THE E.N.D. (THE ENERGY NEVER DIES)") {
            albumgif = "images/albumgif/blackeyedpeas.gif"
        }
        if (albumname == "Exodus (Deluxe Edition)") {
            albumgif = "images/albumgif/bobmayley.gif"
        }
        if (albumname == "Night Moves") {
            albumgif = "images/albumgif/bobsegar.gif"
        }
        if (albumname == "High 'N' Dry") {
            albumgif = "images/albumgif/bohb.gif"
        }
        if (albumname == "Boston") {
            albumgif = "images/albumgif/boston.gif"
        }
        if (albumname == "A Night At The Opera (Deluxe Remastered Version)" || albumname == "A Night At The Opera") {
            lol = ["images/albumgif/br.gif", "images/albumgif/ww.gif"]
            random = Math.floor(Math.random() * 2);

            albumgif = lol[random]
        }
        if (albumname == "Breakfast In America (Deluxe Edition)") {
            albumgif = "images/albumgif/breakfast-in-america.gif"
        }
        if (albumname == "Californication (Deluxe Edition)") {
            albumgif = "images/albumgif/californiacation.gif"
        }
        if (albumname == "Celebration Day") {
            albumgif = "images/albumgif/celebrationday.gif"
        }
        if (albumname == "The Dark Side of the Moon" || albumname == "The Dark Side Of The Moon (2011 Remastered Version)") {
            albumgif = "images/albumgif/darkside.gif"
        }
        if (albumname == "Machine Head") {
            albumgif = "images/albumgif/deeppurple.gif"
        }
        if (albumname == "Random Access Memories") {
            albumgif = "images/albumgif/draftpunk.gif"
        }
        if (albumname == "Dr. Feelgood") {
            albumgif = "images/albumgif/drfeelgood.gif"
        }
        if (albumname == "How To Save A Life") {
            albumgif = "images/albumgif/fray.gif"
        }
        if (albumname == "Pronounced' Leh-'Nerd 'Skin-'Nerd") {
            albumgif = "images/albumgif/freebird.gif"
        }
        if (albumname == "Use Your Illusion I") {
            albumgif = "images/albumgif/gnr.gif"
        }
        if (albumname == "Hotel California (2013 Remaster)") {
            albumgif = "images/albumgif/hotelcalifornia.gif"
        }
        if (albumname == "Paranoid (Remaster)") {
            albumgif = "images/albumgif/ironman.gif"
        }
        if (albumname == "Jazz (Deluxe Remastered Version)") {
            albumgif = "images/albumgif/jazz.gif"
        }
        if (albumname == "Wolfmother") {
            albumgif = "images/albumgif/joker.gif"
        }
        if (albumname == "Overexposed") {
            albumgif = "images/albumgif/maroon5.gif"
        }
        if (albumname == "Nevermind" || question == "Nevermind (Remastered)") {
            albumgif = "images/albumgif/nevermind.gif"
        }
        if (albumname == "News Of The World (Deluxe Remastered Version)") {
            albumgif = "images/albumgif/newsoftheworld.gif"
        }
        if (albumname == "Open Up And Say...Ahh! (20th Anniversary Edition)") {
            albumgif = "images/albumgif/nothinbutagoodtime.gif"
        }
        if (albumname == "Views") {
            albumgif = "images/albumgif/onedance.gif"
        }
        if (albumname == "Native") {
            albumgif = "images/albumgif/onerepublic.gif"
        }
        if (albumname == "Ten") {
            albumgif = "images/albumgif/pj.gif"
        }
        if (albumname == "ROXANNE") {
            albumgif = "images/albumgif/police.gif"
        }
        if (albumname == "Ghost In The Machine (Remastered 2003)") {
            albumgif = "images/albumgif/policeblack.gif"
        }
        if (albumname == "Hysteria (Super Deluxe)") {
            albumgif = "images/albumgif/pssom.gif"
        }
        if (albumname == "Pyromania") {
            albumgif = "images/albumgif/pyromania.gif"
        }
        if (albumname == "Night Visions") {
            albumgif = "images/albumgif/radioactive.gif"
        }
        if (albumname == "Out Of Time (25th Anniversary Edition)" || albumname == "Out Of Time") {
            albumgif = "images/albumgif/rem.gif"
        }
        if (albumname == "Sheer Heart Attack (Deluxe Remastered Version)") {
            albumgif = "images/albumgif/sheerheartattack.gif"
        }
        if (albumname == "Slippery When Wet") {
            albumgif = "images/albumgif/sliperywhenwet.gif"
        }
        if (albumname == "Fly Like An Eagle") {
            albumgif = "images/albumgif/smb.gif"
        }
        if (albumname == "A Day At The Races (Deluxe Remastered Version)") {
            albumgif = "images/albumgif/somebodytolove.gif"
        }
        if (albumname == "Zenyatta Mondatta (Remastered 2003)") {
            albumgif = "images/albumgif/standsoclose.gif"
        }
        if (albumname == "The Grand Illusion") {
            albumgif = "images/albumgif/styx.gif"
        }
        if (albumname == "Synchronicity (Remastered 2003)") {
            albumgif = "images/albumgif/sycrinicity.gif"
        }
        if (albumname == "The Wall") {
            albumgif = "images/albumgif/thewall.gif"
        }
        if (albumname == "Third Eye Blind") {
            albumgif = "images/albumgif/thirdeyeblind.gif"
        }
        if (albumname == "On Through The Night") {
            albumgif = "images/albumgif/throughnight.gif"
        }
        if (albumname == "Toto IV") {
            albumgif = "images/albumgif/toto.gif"
        }

        if (albumname == "Long After Dark") {
            albumgif = "images/albumgif/tp.gif"
        }
        if (albumname == "The Joshua Tree (Super Deluxe)") {
            albumgif = "images/albumgif/u2.gif"
        }
        if (albumname == "Hot Space (Deluxe Remastered Version)") {
            albumgif = "images/albumgif/underpressure.gif"
        }
        if (albumname == "1984 (Remastered)") {
            albumgif = "images/albumgif/vanhalen.gif"
        }
        if (albumname == "My Generation") {
            albumgif = "images/albumgif/whoannoying.gif"
        }
        if (albumname == "Wish You Were Here") {
            albumgif = "images/albumgif/wywh.gif"
        }
        sessionStorage.setItem("albumgif", albumgif)
        if (artistnamelength.length > 1) {
            artistname = ""
            for (i = 0; i < artistnamelength.length; i++) {
                if (artistnamelength.length - 1 > i) {
                    artistname += artistnamelength[i].name + " and ";
                } else {
                    artistname += artistnamelength[i].name
                }


            }
        } else {
            artistname = artistnamelength[0].name;
        }

        songnamecheck = sessionStorage.getItem("songname", songname);
        if (songnamecheck != songname) {

            songlink = ""
            buffer = songname + " by " + artistname

            sessionStorage.setItem("albumimdbig", albumimg);
            // sessionStorage.setItem("trackid", trackid);
            sessionStorage.setItem("songname", songname);
            sessionStorage.setItem("artistname", artistname);
            sessionStorage.setItem("songpreveiw", songlink);
            sessionStorage.setItem("albumimd", albumimg);
            parent.document.getElementById("music").src = "audio.html"
            parent.document.getElementById("musicbg").src = "musicbackground.html"
            starttextanimation(buffer, question = copy)
            hi = parent.document.getElementById("minimusic").src
            if (hi.endsWith("musicsmall.html")) {
                hi = ""
            }
        }
        hi = parent.document.getElementById("minimusic").src
        hi2 = parent.document.getElementById("music").src
        if (hi.endsWith("musicsmall.html") && hi2.endsWith("audio.html")) {
            parent.document.getElementById("minimusic").src = ""
        }



    })
}

function playrap(access_token) {

    fetch('https://api.spotify.com/v1/me/player/devices', {
        method: 'get',
        mode: 'cors',
        redirect: 'follow',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            'Authorization': 'Bearer ' + access_token

        }
    }).then(function(response) {
        return response.json();
    }).then(function(jsondata) {

        deviceid = jsondata.devices[0].id;
        random = Math.floor(Math.random() * 28);
        sessionStorage.setItem("deviceid", deviceid);
        fetch('https://api.spotify.com/v1/me/player/play?device_id=' + deviceid, {
                method: "put",
                body: JSON.stringify({
                    "context_uri": "spotify:playlist:7fsYyjbzbJFusKyPi8kvHi",
                    "offset": {
                        "position": random
                    },
                    "position_ms": 0
                }),
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    'Authorization': 'Bearer ' + access_token
                }
            })
            .then(response => response.json())
            .then(json => console.log(json))



        fetch('https://api.spotify.com/v1/me/player/shuffle?state=true&device_id=' + deviceid, {
                method: "put",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    'Authorization': 'Bearer ' + access_token
                }
            })
            .then(response => response.json())
            .then(json => console.log(json))
    })
    speak(buffer = "Now playing Work Rap")
    intervalcontrol(access_token)
    setTimeout(function() {
        setmusicimg(access_token)
    }, 2000);


}

function playpop(access_token) {

    fetch('https://api.spotify.com/v1/me/player/devices', {
        method: 'get',
        mode: 'cors',
        redirect: 'follow',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            'Authorization': 'Bearer ' + access_token

        }
    }).then(function(response) {
        return response.json();
    }).then(function(jsondata) {

        deviceid = jsondata.devices[0].id;
        random = Math.floor(Math.random() * 83);
        sessionStorage.setItem("deviceid", deviceid);
        fetch('https://api.spotify.com/v1/me/player/play?device_id=' + deviceid, {
                method: "put",
                body: JSON.stringify({
                    "context_uri": "spotify:playlist:5eoUlWnBJteE7vkgQ6brkv",
                    "offset": {
                        "position": random
                    },
                    "position_ms": 0
                }),
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    'Authorization': 'Bearer ' + access_token
                }
            })
            .then(response => response.json())
            .then(json => console.log(json))



        fetch('https://api.spotify.com/v1/me/player/shuffle?state=true&device_id=' + deviceid, {
                method: "put",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    'Authorization': 'Bearer ' + access_token
                }
            })
            .then(response => response.json())
            .then(json => console.log(json))
    })
    speak(buffer = "Now playing Essential Pop")
    intervalcontrol(access_token)
    setTimeout(function() {
        setmusicimg(access_token)
    }, 2000);


}

function playcountry(access_token) {

    fetch('https://api.spotify.com/v1/me/player/devices', {
        method: 'get',
        mode: 'cors',
        redirect: 'follow',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            'Authorization': 'Bearer ' + access_token

        }
    }).then(function(response) {
        return response.json();
    }).then(function(jsondata) {

        deviceid = jsondata.devices[0].id;
        random = Math.floor(Math.random() * 62);
        sessionStorage.setItem("deviceid", deviceid);
        fetch('https://api.spotify.com/v1/me/player/play?device_id=' + deviceid, {
                method: "put",
                body: JSON.stringify({
                    "context_uri": "spotify:playlist:6lPhyqODv0gzXlgevWOVc0",
                    "offset": {
                        "position": random
                    },
                    "position_ms": 0
                }),
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    'Authorization': 'Bearer ' + access_token
                }
            })
            .then(response => response.json())
            .then(json => console.log(json))



        fetch('https://api.spotify.com/v1/me/player/shuffle?state=true&device_id=' + deviceid, {
                method: "put",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    'Authorization': 'Bearer ' + access_token
                }
            })
            .then(response => response.json())
            .then(json => console.log(json))
    })
    speak(buffer = "Now playing Country")
    intervalcontrol(access_token)
    setTimeout(function() {
        setmusicimg(access_token)
    }, 2000);


}

function timeoutclltime(access_token) {

}

function songsearch(access_token) {
    copy = question
    if (question.startsWith("play ")) {
        question = question.replace("play ", "");

    }
    if (question.startsWith(" Wade play ")) {
        question = question.replace(" Wade play ", "");

    }
    if (question.startsWith("Wade play ")) {
        question = question.replace("Wade play ", "");

    }
    if (question.startsWith("Wade Play ")) {
        question = question.replace("Wade Play ", "");

    }
    fetch('https://api.spotify.com/v1/search?q=' + question + '&type=track,artist&limit=2', {
        method: 'get',
        mode: 'cors',
        redirect: 'follow',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            'Authorization': 'Bearer ' + access_token

        }
    }).then(function(response) {
        return response.json();
    }).then(function(jsonData) {

        songlink = jsonData.tracks.items[0].album.uri;
        songname = jsonData.tracks.items[0].name;
        albumimg = jsonData.tracks.items[0].album.images[1].url;
        albumname = jsonData.tracks.items[0].album.name;
        artistnamelength = jsonData.tracks.items[0].artists;
        trackid = jsonData.tracks.items[0].id;

        albumgif = ""
        if (albumname == "Abbey Road (Remastered)") {
            albumgif = "images/albumgif/abbyroad.gif"
        }
        if (albumname == "Astro Lounge") {
            albumgif = "images/albumgif/allstar.gif"
        }
        if (albumname == "Who's Next") {
            albumgif = "images/albumgif/baba.gif"
        }
        if (albumname == "Licensed To Ill") {
            albumgif = "images/albumgif/beastieboys.gif"
        }
        if (albumname == "Ride The Lightning (Deluxe Remaster)") {
            albumgif = "images/albumgif/bellstoll.gif"
        }
        if (albumname == "dont smile at me") {
            albumgif = "images/albumgif/billie.gif"
        }
        if (albumname == "THE E.N.D. (THE ENERGY NEVER DIES)") {
            albumgif = "images/albumgif/blackeyedpeas.gif"
        }
        if (albumname == "Exodus (Deluxe Edition)") {
            albumgif = "images/albumgif/bobmayley.gif"
        }
        if (albumname == "Night Moves") {
            albumgif = "images/albumgif/bobsegar.gif"
        }
        if (albumname == "High 'N' Dry") {
            albumgif = "images/albumgif/bohb.gif"
        }
        if (albumname == "Boston") {
            albumgif = "images/albumgif/boston.gif"
        }
        if (albumname == "A Night At The Opera (Deluxe Remastered Version)" || albumname == "A Night At The Opera") {
            lol = ["images/albumgif/br.gif", "images/albumgif/ww.gif"]
            random = Math.floor(Math.random() * 2);

            albumgif = lol[random]
        }
        if (albumname == "Breakfast In America (Deluxe Edition)") {
            albumgif = "images/albumgif/breakfast-in-america.gif"
        }
        if (albumname == "Californication (Deluxe Edition)") {
            albumgif = "images/albumgif/californiacation.gif"
        }
        if (albumname == "Celebration Day") {
            albumgif = "images/albumgif/celebrationday.gif"
        }
        if (albumname == "The Dark Side of the Moon" || albumname == "The Dark Side Of The Moon (2011 Remastered Version)") {
            albumgif = "images/albumgif/darkside.gif"
        }
        if (albumname == "Machine Head") {
            albumgif = "images/albumgif/deeppurple.gif"
        }
        if (albumname == "Random Access Memories") {
            albumgif = "images/albumgif/draftpunk.gif"
        }
        if (albumname == "Dr. Feelgood") {
            albumgif = "images/albumgif/drfeelgood.gif"
        }
        if (albumname == "How To Save A Life") {
            albumgif = "images/albumgif/fray.gif"
        }
        if (albumname == "Pronounced' Leh-'Nerd 'Skin-'Nerd") {
            albumgif = "images/albumgif/freebird.gif"
        }
        if (albumname == "Use Your Illusion I") {
            albumgif = "images/albumgif/gnr.gif"
        }
        if (albumname == "Hotel California (2013 Remaster)") {
            albumgif = "images/albumgif/hotelcalifornia.gif"
        }
        if (albumname == "Paranoid (Remaster)") {
            albumgif = "images/albumgif/ironman.gif"
        }
        if (albumname == "Jazz (Deluxe Remastered Version)") {
            albumgif = "images/albumgif/jazz.gif"
        }
        if (albumname == "Wolfmother") {
            albumgif = "images/albumgif/joker.gif"
        }
        if (albumname == "Overexposed") {
            albumgif = "images/albumgif/maroon5.gif"
        }
        if (albumname == "Nevermind" || question == "Nevermind (Remastered)") {
            albumgif = "images/albumgif/nevermind.gif"
        }
        if (albumname == "News Of The World (Deluxe Remastered Version)") {
            albumgif = "images/albumgif/newsoftheworld.gif"
        }
        if (albumname == "Open Up And Say...Ahh! (20th Anniversary Edition)") {
            albumgif = "images/albumgif/nothinbutagoodtime.gif"
        }
        if (albumname == "Views") {
            albumgif = "images/albumgif/onedance.gif"
        }
        if (albumname == "Native") {
            albumgif = "images/albumgif/onerepublic.gif"
        }
        if (albumname == "Ten") {
            albumgif = "images/albumgif/pj.gif"
        }
        if (albumname == "ROXANNE") {
            albumgif = "images/albumgif/police.gif"
        }
        if (albumname == "Ghost In The Machine (Remastered 2003)") {
            albumgif = "images/albumgif/policeblack.gif"
        }
        if (albumname == "Hysteria (Super Deluxe)") {
            albumgif = "images/albumgif/pssom.gif"
        }
        if (albumname == "Pyromania") {
            albumgif = "images/albumgif/pyromania.gif"
        }
        if (albumname == "Night Visions") {
            albumgif = "images/albumgif/radioactive.gif"
        }
        if (albumname == "Out Of Time (25th Anniversary Edition)") {
            albumgif = "images/albumgif/rem.gif"
        }
        if (albumname == "Sheer Heart Attack (Deluxe Remastered Version)") {
            albumgif = "images/albumgif/sheerheartattack.gif"
        }
        if (albumname == "Slippery When Wet") {
            albumgif = "images/albumgif/sliperywhenwet.gif"
        }
        if (albumname == "Fly Like An Eagle") {
            albumgif = "images/albumgif/smb.gif"
        }
        if (albumname == "A Day At The Races (Deluxe Remastered Version)") {
            albumgif = "images/albumgif/somebodytolove.gif"
        }
        if (albumname == "Zenyatta Mondatta (Remastered 2003)") {
            albumgif = "images/albumgif/standsoclose.gif"
        }
        if (albumname == "The Grand Illusion") {
            albumgif = "images/albumgif/styx.gif"
        }
        if (albumname == "Synchronicity (Remastered 2003)") {
            albumgif = "images/albumgif/sycrinicity.gif"
        }
        if (albumname == "The Wall") {
            albumgif = "images/albumgif/thewall.gif"
        }
        if (albumname == "Third Eye Blind") {
            albumgif = "images/albumgif/thirdeyeblind.gif"
        }
        if (albumname == "On Through The Night") {
            albumgif = "images/albumgif/throughnight.gif"
        }
        if (albumname == "Toto IV") {
            albumgif = "images/albumgif/toto.gif"
        }

        if (albumname == "Long After Dark") {
            albumgif = "images/albumgif/tp.gif"
        }
        if (albumname == "The Joshua Tree (Super Deluxe)") {
            albumgif = "images/albumgif/u2.gif"
        }
        if (albumname == "Hot Space (Deluxe Remastered Version)") {
            albumgif = "images/albumgif/underpressure.gif"
        }
        if (albumname == "1984 (Remastered)") {
            albumgif = "images/albumgif/vanhalen.gif"
        }
        if (albumname == "My Generation") {
            albumgif = "images/albumgif/whoannoying.gif"
        }
        if (albumname == "Wish You Were Here") {
            albumgif = "images/albumgif/wywh.gif"
        }
        sessionStorage.setItem("albumgif", albumgif)
        if (artistnamelength.length > 1) {
            artistname = ""
            for (i = 0; i < artistnamelength.length; i++) {
                if (artistnamelength.length - 1 > i) {
                    artistname += artistnamelength[i].name + " and ";
                } else {
                    artistname += artistnamelength[i].name
                }


            }
        } else {
            artistname = artistnamelength[0].name;
        }
        hi = parent.document.getElementById("minimusic").src
        hi2 = parent.document.getElementById("music").src
        if (hi.endsWith("musicsmall.html") && hi2.endsWith("audio.html")) {
            parent.document.getElementById("minimusic").src = ""
        }

        buffer = songname + " by " + artistname
        starttextanimation(buffer, question = copy)
        sessionStorage.setItem("albumimdbig", albumimg);

        sessionStorage.setItem("trackid", trackid);
        sessionStorage.setItem("songname", songname);
        sessionStorage.setItem("artistname", artistname);
        sessionStorage.setItem("songpreveiw", songlink);
        sessionStorage.setItem("albumimd", albumimg);
        parent.document.getElementById("music").src = "audio.html"
        parent.document.getElementById("musicbg").src = "musicbackground.html"
        speak(buffer)
        playspotifysong()
    });
}

function playspotifysong() {
    var access_token = sessionStorage.getItem("access_token");
    fetch('https://api.spotify.com/v1/me/player/devices', {
        method: 'get',
        mode: 'cors',
        redirect: 'follow',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            'Authorization': 'Bearer ' + access_token

        }
    }).then(function(response) {
        return response.json();
    }).then(function(jsondata) {

        deviceid = jsondata.devices[0].id;
        var albumlink = sessionStorage.getItem("songpreveiw");
        trackid = sessionStorage.getItem("trackid");
        fetch('https://api.spotify.com/v1/tracks/' + trackid, {
            method: 'get',
            mode: 'cors',
            redirect: 'follow',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                'Authorization': 'Bearer ' + access_token

            }
        }).then(function(response) {
            return response.json();
        }).then(function(jsonData) {
            songlink = jsonData.uri

            fetch('https://api.spotify.com/v1/me/player/play?device_id=' + deviceid, {
                    method: "put",
                    body: JSON.stringify({
                        "context_uri": albumlink,
                        "offset": {
                            "uri": songlink
                        },
                        "position_ms": 0
                    }),
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        'Authorization': 'Bearer ' + access_token
                    }
                })
                .then(response => response.json())
                .then(json => console.log(json))
        })
    })
}