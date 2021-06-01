function callData(question) {
    var counter = 0;
    if (question == undefined) {
        question = document.getElementById("question").value;
    }

    // if (document.getElementById("myImg").src != null || document.getElementById("myImg").src != undefined || document.getElementById("myImg").src != "") {
    //     document.getElementById("myImg").src = "https://jarvisai.netlify.app/clear.png";
    // }

    if (question.startsWith(" ")) {
        question = question.replace(" ", "")
    }
    // let history = [];
    copy = question
    question = question.toLowerCase()
    if (question.indexOf("fuck") >= 0 && question.indexOf("you") >= 0) {
        buffer = "Now sending your coordinates to isis"
        starttextanimation(buffer, question)

        speak(buffer)

        counter++
    }
    if (question == "Jarvis" || question == "jarvis") {
        buffer = "Hello! What can I help you with today?"
        // sessionStorage.setItem("buffer", buffer);
        // var win = window.open("general.html");
        starttextanimation(buffer, question)
        speak(buffer)
        counter++
    }
    if (question == "Waid" || question == "waid" || question == "Wade" || question == "wade" || question == "wait" || question == "Wait") {
        buffer = "Hello! What can I help you with today?"
        starttextanimation(buffer, question)
        // setTimeout(function() {
        //typewriter.pauseFor(1500);
        // }, 4000);

        speak(buffer)
        counter++
    }
    if (question.startsWith("Jarvis")) {
        question = question.replace("Jarvis ", "");
    }
    if (question.startsWith("Waid")) {
        question = question.replace("Waid ", "");
    }
    if (question.startsWith("waid")) {
        question = question.replace("waid ", "");
    }
    if (question.startsWith("Wait")) {
        question = question.replace("Wait ", "");
    }
    if (question.startsWith("wait")) {
        question = question.replace("wait ", "");
    }
    if (question.startsWith("Wade")) {
        question = question.replace("Wade ", "");
    }
    if (question.startsWith("wade")) {
        question = question.replace("wade ", "");
    }
    if (question.indexOf("wake") >= 0 || question.indexOf("up") >= 0) {
        novoForm = window.open("SphereDisplay/index.html")
        buffer = "How we doing today sir."
        starttextanimation(buffer, question = copy)
        speak(buffer)
        counter++
    }
    if (question.indexOf("pause") >= 0) {
        var childiFrame = parent.document.getElementById("music");
        var doc = childiFrame.contentDocument ||
            childiFrame.contentWindow.document;
        var myAudio = doc.getElementById('myAudio');
        if (myAudio != null) {
            if (myAudio.duration > 0 && !myAudio.paused) {

                myAudio.pause();
                buffer = "Paused it"
                starttextanimation(buffer, question = copy)
                speak(buffer)
            } else {

                buffer = "Nothings playing"
                starttextanimation(buffer, question = copy)
                speak(buffer)

            }
        }
        if (parent.document.getElementById("yt").src != "") {
            var ysrc = parent.document.getElementById("yt").src;
            var newsrc = ysrc.replace("?autoplay=1", "");
            var newsrc = newsrc.replace("&", "?");
            parent.document.getElementById("yt").src = newsrc;

        }
        if (parent.document.getElementById("bedtime").src != "") {
            var ysrc = parent.document.getElementById("bedtime");
            ysrc.pause();
        }
        counter++
    }
    hi = parent.document.getElementById("movie").src
    if (hi.endsWith("trivia.html")) {
        if (question.indexOf("reveal") >= 0 || question.indexOf("anwser") >= 0 || question.indexOf("what") >= 0)
            revealanwser(question)
        if (question.indexOf("close") >= 0 && question.indexOf("trivia") >= 0) {
            counter++
            parent.document.getElementById("movie").src = "https://naughty-hermann-189d94.netlify.app/";
        }
    }
    if (question.indexOf("close") >= 0 && question.indexOf("movie") >= 0) {
        counter++
        parent.document.getElementById("movie").src = "https://naughty-hermann-189d94.netlify.app/";
    }
    if (question.indexOf("close") >= 0 && question.indexOf("tv") >= 0) {
        counter++
        parent.document.getElementById("movie").src = "https://naughty-hermann-189d94.netlify.app/";
    }
    if (question.indexOf("close") >= 0 && question.indexOf("all") >= 0) {
        counter++
        parent.document.getElementById("movie").src = "https://naughty-hermann-189d94.netlify.app/";
        parent.document.getElementById("music").src = "https://naughty-hermann-189d94.netlify.app/";
        parent.document.getElementById("player").src = "https://naughty-hermann-189d94.netlify.app/";
        parent.document.getElementById("data1").src = "https://naughty-hermann-189d94.netlify.app/";
        parent.document.getElementById("data2").src = "https://naughty-hermann-189d94.netlify.app/";
        parent.document.getElementById("data3").src = "https://naughty-hermann-189d94.netlify.app/";
        parent.document.getElementById("yt").src = "https://naughty-hermann-189d94.netlify.app/";
    }
    if (question == "play") {
        var childiFrame = parent.document.getElementById("music");
        var doc = childiFrame.contentDocument ||
            childiFrame.contentWindow.document;
        var myAudio = doc.getElementById('myAudio');
        if (myAudio != null) {
            if (myAudio.duration > 0 && !myAudio.paused) {

                myAudio.play();
                buffer = "Playing it"
                starttextanimation(buffer, question = copy)
                speak(buffer)
                counter++
            } else {

                buffer = "Nothings playing"

                starttextanimation(buffer, question = copy)
                speak(buffer)
                counter++
            }
        }
        if (parent.document.getElementById("yt").src != "") {

            var ysrc = parent.document.getElementById("yt").src;
            var newsrc = ysrc.replace("?controls=0", "");
            newsrc += "?autoplay=1&controls=0"
            parent.document.getElementById("yt").src = newsrc;
            counter++
        }
        if (parent.document.getElementById("bedtime").src != "") {
            var ysrc = parent.document.getElementById("bedtime");
            ysrc.play();
        }


        counter++
    }
    if (question == "close" || question == "stop") {
        if (parent.document.getElementById("yt").src != "") {

            counter++
            parent.document.getElementById("yt").src = "https://naughty-hermann-189d94.netlify.app/";
        }

        if (parent.document.getElementById("bedtime").src != "") {
            var ysrc = parent.document.getElementById("bedtime");
            parent.document.getElementById("player").src = "https://naughty-hermann-189d94.netlify.app/";
            ysrc.pause();
            counter++
        }
    }
    if (question.indexOf("close") >= 0 && question.indexOf("recipe") >= 0 || question.indexOf("clothes") >= 0 && question.indexOf("recipe") >= 0) {
        counter++
        parent.document.getElementById("music").src = "https://naughty-hermann-189d94.netlify.app/";
    }
    if (question.startsWith("help") || question.startsWith("Help")) {

        help(question);
        counter++
    }
    if (question == "test") {
        counter++
    }
    if (question.indexOf("when") >= 0 && question.indexOf("concert") >= 0) {
        geteventbyname(question)
        counter++
    }
    if (question.indexOf("events") >= 0 && question.indexOf("near") >= 0) {
        geteventsnear(question)
        counter++
    }


    if (question.indexOf("set") >= 0 && question.indexOf("alarm") >= 0) {
        counter++
        alarm(question);
    }
    if (question.indexOf("set") >= 0 && question.indexOf("timer") >= 0) {
        counter++
        gettimer(question);
    }
    if (question.indexOf("mute") >= 0) {
        mutePage(question);
        counter++
    }
    if (question.indexOf("milliliter") >= 0 || question.indexOf("liter") >= 0 || question.indexOf("centiliter") >= 0 || question.indexOf("deciliter") >= 0 || question.indexOf("decaliter") >= 0 || question.indexOf("hecoliter") >= 0 && question.indexOf("cubic meter") >= 0 || question.indexOf("cubic inch") >= 0 || question.indexOf("gallon") >= 0 || question.indexOf("cubic foot") >= 0 || question.indexOf("pint") >= 0 || question.indexOf("quart") >= 0 || question.indexOf("barrel") >= 0 || question.indexOf("centimeter") >= 0 || question.indexOf("millimeter") >= 0 || question.indexOf("meter") >= 0 || question.indexOf("kilometer") >= 0 || question.indexOf("inch") >= 0 || question.indexOf("foot") >= 0 || question.indexOf("feet") >= 0 || question.indexOf("yard") >= 0 || question.indexOf("yards") >= 0 || question.indexOf("mile") >= 0 || question.indexOf("nautrical mile") >= 0 || question.indexOf("kilogram") >= 0 || question.indexOf("gram") >= 0 || question.indexOf("pound") >= 0 || question.indexOf("grain") >= 0 || question.indexOf("ounce") >= 0 || question.indexOf("carrat") >= 0 && question.indexOf("yard") >= 0 || question.indexOf("ton") >= 0 || question.indexOf("long ton") >= 0 || question.indexOf("tonne") >= 0) {
        convert(question)
        counter++
    }
    if (question.indexOf("search") >= 0 && question.indexOf("Wikipedia") >= 0 || question.indexOf("search") >= 0 && question.indexOf("wikipedia") >= 0 || question.indexOf("search") >= 0 && question.indexOf("Wiki") >= 0 || question.indexOf("search") >= 0 && question.indexOf("wiki") >= 0) {
        getwiki(question);
        counter++
    }
    // if (question.indexOf("movie") >= 0 && question.indexOf("trailer") >= 0 && question.indexOf("search") >= 0 || question.indexOf("youtube") >= 0 && question.indexOf("movie") >= 0 || question.indexOf("movie") >= 0 && question.indexOf("trailer") >= 0 || question.indexOf("movie") >= 0 && question.indexOf("trailers") >= 0) {
    //     getmovieid(question)
    //     counter++
    // }
    if (question.indexOf("youtube") >= 0 && question.indexOf("search") >= 0 || question.indexOf("youtube") >= 0 && question.indexOf("video")) {
        getyoutube(question);
        counter++
    }
    if (question.indexOf("top") >= 0 && question.indexOf("movies") >= 0 || question.indexOf("popular") >= 0 && question.indexOf("movies")) {
        getpopmovie(question);
        counter++
    }
    if (question.indexOf("traffic") >= 0) {
        gettraffic(question);
        counter++
    }
    // if (question.indexOf("cinemas") >= 0 && question.indexOf("near") >= 0 || question.indexOf("movie") >= 0 && question.indexOf("theaters") >= 0 && question.indexOf("near") >= 0) {
    //     movienearme()
    //     counter++

    // }



    if (question.indexOf("heisenberg") >= 0 || question.indexOf("Breaking Bad") >= 0 || question.indexOf("Heisenberg") >= 0 || question.indexOf("breaking bad") >= 0) {
        fetch('https://www.breakingbadapi.com/api/quotes', {
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
            random = Math.floor((Math.random() * 69) + 1)
            quote = jsonData[random].quote;
            author = jsonData[random].author;
            buffer = quote + " by " + author;
            starttextanimation(buffer, question)
            speak(buffer);
            counter++
        });
    }


    //Start of custome tingzzz

    if (question.indexOf("grandma") >= 0 || question.indexOf("Jarvis") >= 0 && question.indexOf("Grandma") >= 0) {

        buffer = "Ms.Stout the Alphabet is A  B  C  D  E  F  G  H  I  J  K  L  M  N  O  P  Q  R  S  T  U  V  W  X  Y  Z."
        starttextanimation(buffer, question)
        speak(buffer);
        counter++
    }
    //start of opening websites
    // if (question.indexOf("ecs") >= 0 && question.indexOf("open")) {
    //     getecs(question)
    //     counter++
    // }
    // if (question.indexOf("netflix") >= 0 && question.indexOf("open") >= 0) {
    //     getnetflix(question)
    //     counter++
    // }
    // if (question.indexOf("GitHub") >= 0 && question.indexOf("open") >= 0) {

    //     getgithub(question)
    //     counter++
    // }
    // if (question.indexOf("Instagram") >= 0 && question.indexOf("open") >= 0) {

    //     getinstagram(question)
    //     counter++
    // }
    // if (question.indexOf("Amazon") >= 0 && question.indexOf("open") >= 0) {

    //     getamazon(question);
    //     counter++
    // }
    // if (question.indexOf("eBay") >= 0 && question.indexOf("open") >= 0) {

    //     getebay(question);
    //     counter++
    // }
    // if (question.indexOf("Facebook") >= 0 && question.indexOf("open") >= 0) {

    //     getfacebook(question)
    //     counter++
    // }
    // if (question.indexOf("Twitter") >= 0 && question.indexOf("open") >= 0) {

    //     gettwitter(question);
    //     counter++
    // }
    // if (question.indexOf("Twitter") >= 0 && question.indexOf("search") >= 0) {
    //     searchtwitter(question)
    //     counter++
    // }
    if (question.indexOf("donate") >= 0 && question.indexOf("charity") >= 0) {
        donate(question)
        counter++
    }
    //end of opening websites
    if (question.indexOf("trailer") >= 0 && question.indexOf("show") >= 0) {
        getidtrailer(question)
        counter++
    }
    //start of random activity
    if (question.indexOf("what") >= 0 && question.indexOf("should") >= 0 || question.indexOf("im") >= 0 && question.indexOf("bored") >= 0) {
        getactivities(question)
        counter++
    }

    //end of random activity
    //start of random food img
    if (question.indexOf("show") >= 0 && question.indexOf("me") >= 0 && question.indexOf("food") >= 0) {

        getfoodimg(question)
        counter++
    }
    //end of random food img
    //start of google web search
    if (question.indexOf("google") >= 0 && question.indexOf("search") >= 0 || question.indexOf("google") >= 0) {
        searchgoogle(question)
        counter++
    }
    if (question.indexOf("GitHub") >= 0 && question.indexOf("search") >= 0) {
        searchgithub(question)
        counter++
    }
    if (question.indexOf("web") >= 0 && question.indexOf("search") >= 0) {
        ddgsearch(question)
        counter++
    }
    //end of google web search
    //start of random advice
    if (question.indexOf("advice") >= 0 && question.indexOf("some") >= 0 || question.indexOf("advice") >= 0) {
        getadvice(question)
        counter++
    }
    //end of random advice
    //start of random joke 
    if (question.indexOf("joke") >= 0 && question.indexOf("tell") >= 0 || question.indexOf("joke") >= 0 && question.indexOf("need") >= 0) {
        counter++
        getjoke(question)
    }
    if (question.indexOf("score") >= 0 && question.indexOf("game") >= 0) {
        counter++
        getteambasketball(question)
    }
    if (question.indexOf("songs") >= 0 && question.indexOf("top") >= 0) {
        counter++
        gettoptracks(question)
    }
    if (question.indexOf("who") >= 0 && question.indexOf("sings") >= 0) {
        getsongsearch(question)
        counter++
    }
    //end of random joke
    //if (question.indexOf("who") >= 0 && question.indexOf("is") >= 0) {
    //    if (question.indexOf("Jarvis") >= 0) {
    //     question = question.replace("Jarvis ", "")
    //   }
    //  getartistbio(question)

    // }
    //start of random Jeoperdy trivia

    if (question.indexOf("trivia") >= 0 && question.indexOf("some") >= 0) {
        getrandomtrivia(question)
        counter++
    }
    //end of trivia
    //start of spotify music
    // if (question.indexOf("shuffle") >= 0 && question.indexOf("rock") >= 0 || question.indexOf("Shuffle") >= 0 && question.indexOf("rock") >= 0) {

    //   fetch("/spotifylogin", {
    //        method: 'get',
    //        mode: 'cors',
    //        redirect: 'follow',
    //       headers: {

    //       }

    //     }).then(function(response) {
    //         if (response.redirected) {
    //             window.location.href = response.url;
    //             token = response.url.split("#");
    //              getrock(token);

    //        }
    //     });
    // }

    //end of spotify music
    if (question.indexOf("who") >= 0 && question.indexOf("tv") >= 0) {
        var txt = question.split("who is in the tv show")[1];
        txt = txt.replace(" ", "")
        gettv(txt, copy = question);
        counter++
    }
    if (question.indexOf("tell") >= 0 && question.indexOf("tv") >= 0) {
        var txt = question.split("tell me about the tv show")[1];
        txt = txt.replace(" ", "")
        gettv(txt, copy = question);
        counter++
    }

    //start of movie anwsers
    if (question.indexOf("who") >= 0 && question.indexOf("movie") >= 0) {
        var txt = question.split("who is in the movie")[1];
        txt = txt.replace(" ", "")
        getmovie(txt, copy = question);
        counter++
    }
    if (question.indexOf("what") >= 0 && question.indexOf("known") >= 0 && question.indexOf("movie") >= 0) {
        getactorinfo(question)
        counter++
    }





    if (question.indexOf("tell") >= 0 && question.indexOf("movie") >= 0) {
        var txt = question.split("tell me about the movie")[1];
        txt = txt.replace(" ", "")
        getmovie(txt, copy = question);
        counter++

    }
    //end of movie anwsers
    //start of goodmorning
    if (question.indexOf("Goodmorning") >= 0 || question.indexOf("Good morning") >= 0 || question.indexOf("good morning") >= 0 || question.indexOf("goodmorning") >= 0) {
        getnews(question)
        counter++
    }
    //end of goodmorning
    if (question.indexOf("bedtime") >= 0 && question.indexOf("read") >= 0 || question.indexOf("play") >= 0 && question.indexOf("bedtime") >= 0) {
        getbedstory(question)
        counter++
    }
    if (question.indexOf("holidays") >= 0 && question.indexOf("list") >= 0 || question.indexOf("year") >= 0 && question.indexOf("when") >= 0) {
        getholiday(question);
        counter++
    }
    if (question.indexOf("else") >= 0 && question.indexOf("could") >= 0 || question.indexOf("what") >= 0 && question.indexOf("else") >= 0) {
        getsuggestions(question);
        counter++
    }
    if (question.indexOf("what") >= 0 && question.indexOf("is") >= 0 && question.indexOf("spanish") >= 0 || question.indexOf("what") >= 0 && question.indexOf("is") >= 0 && question.indexOf("arabic") >= 0 || question.indexOf("what") >= 0 && question.indexOf("is") >= 0 && question.indexOf("chinese") >= 0 || question.indexOf("what") >= 0 && question.indexOf("is") >= 0 && question.indexOf("french") >= 0 || question.indexOf("what") >= 0 && question.indexOf("is") >= 0 && question.indexOf("german") >= 0 || question.indexOf("what") >= 0 && question.indexOf("is") >= 0 && question.indexOf("hindi") >= 0 || question.indexOf("what") >= 0 && question.indexOf("is") >= 0 && question.indexOf("irish") >= 0 || question.indexOf("what") >= 0 && question.indexOf("is") >= 0 && question.indexOf("italian") >= 0 || question.indexOf("what") >= 0 && question.indexOf("is") >= 0 && question.indexOf("japenese") >= 0 || question.indexOf("what") >= 0 && question.indexOf("is") >= 0 && question.indexOf("poteguese") >= 0 || question.indexOf("what") >= 0 && question.indexOf("is") >= 0 && question.indexOf("korean") >= 0 || question.indexOf("what") >= 0 && question.indexOf("is") >= 0 && question.indexOf("russian") >= 0) {
        translate(question)
        counter++
    }
    //start of easter eggs
    if (question.indexOf("for speed") >= 0) {
        counter++
        topgun(question)
    }
    if (question.indexOf("volume") >= 0) {
        setvolume(question)
        counter++
    }
    if (question.indexOf("what again") >= 0) {
        counter++
        pulpfiction(question)
    }

    if (question.indexOf("wise words") >= 0) {
        ferrisbueller(question)
        counter++
    }
    //end of easter eggs
    if (question.indexOf("roll") >= 0 && question.indexOf("dice") >= 0) {
        rolldie(question);
        counter++
    }
    if (question.indexOf("what") >= 0 && question.indexOf("definition") >= 0) {
        getwordinfo(question)
        counter++
    }
    if (question.indexOf("what") >= 0 && question.indexOf("synonym") >= 0) {
        counter++
        getthesaurus(question)
    }
    if (question.indexOf("pick") >= 0 && question.indexOf("number") >= 0) {
        counter++
        randomnumber(question)
    }
    if (question.indexOf("spell") >= 0 && question.indexOf("how") >= 0) {
        counter++
        getspell(question)
    }
    //start of math
    if (question.indexOf("calculate") >= 0 || parseInt(question)) {
        domath(question)
        counter++
    }
    //end of math
    //start of create/delete/add projects

    //end of create/delete/add projects
    //start time/date
    if (question.indexOf("What") >= 0 && question.indexOf("time") >= 0 || question.indexOf("what") >= 0 && question.indexOf("time") >= 0 || question.indexOf("what") >= 0 && question.indexOf("minute") >= 0) {
        getcurrenttime(question)
        counter++
    }
    if (question.indexOf("what") >= 0 && question.indexOf("weather") >= 0 && question.indexOf("tomorrow") >= 0) {
        getweather(question)
    }

    if (question.indexOf("what") >= 0 && question.indexOf("month") >= 0 || question.indexOf("what") >= 0 && question.indexOf("year") >= 0) {
        getcurrentday(question)
        counter++
    }
    if (question.indexOf("What") >= 0 && question.indexOf("second") >= 0 || question.indexOf("what") >= 0 && question.indexOf("second") >= 0) {
        counter++
        getcurrentsecond(question)
    }
    //end time/date


    //start create project templetes

    //end of add to notes 

    //start News api
    if (question.indexOf("news") >= 0 && question.indexOf("today") >= 0) {
        counter++
        getnews(question);
        speak(buffer);

    }

    //end News api
    if (question.indexOf("capital") >= 0 && question.indexOf("what") >= 0 && question.indexOf("of") >= 0) {
        getcapital(question)
    }
    //start of Stock APi
    if (question.indexOf("stock") >= 0 && question.indexOf("today") >= 0 || question.indexOf("Stock") >= 0 && question.indexOf("today") >= 0 || question.indexOf("Stock") >= 0 || question.indexOf("stock") >= 0) {
        setvalues(question)

        counter++
    }
    //end of Stock APi
    if (question.indexOf("rank") >= 0 && question.indexOf("what") >= 0) {
        counter++
        getteaminfo(question)
    }
    if (question.indexOf("who") >= 0 && question.indexOf("is") >= 0) {

        if (counter == 0) {
            getpeopleinfo(question)
        }

        counter++
    }
    // if (question.indexOf("when") >= 0 && question.indexOf("was") >= 0) {
    //     counter++
    //     getpeopleinfo(question)
    // }

    //start of food info
    if (question.indexOf("recipe") >= 0 && question.indexOf("show") >= 0 || question.indexOf("get") >= 0 && question.indexOf("recipe") >= 0) {
        counter++
        getrecipe(question);
    }
    if (question.indexOf("how") >= 0 && question.indexOf("proteins") >= 0 || question.indexOf("how") >= 0 && question.indexOf("protein") >= 0) {
        getfoodinfo(question);
        counter++
    }
    if (question.indexOf("how") >= 0 && question.indexOf("calories") >= 0 || question.indexOf("how") >= 0 && question.indexOf("calorie") >= 0) {
        getfoodinfo(question)
        counter++
    }


    if (question.indexOf("nutrients") >= 0 || question.indexOf("Nutrients") >= 0) {
        getfoodinfo(question)
        counter++
    }
    if (question.indexOf("how") >= 0 && question.indexOf("fat") >= 0 || question.indexOf("how") >= 0 && question.indexOf("fats") >= 0) {
        getfoodinfo(question)
        counter++
    }
    //end of food info
    if (question.indexOf("set") >= 0 && question.indexOf("reminder") >= 0) {
        getreminder(question)
        counter++

    }
    //start of Weather api
    if (question.indexOf("weather") >= 0 && question.indexOf("today") >= 0) {
        getweather(question)
        counter++

    }
    if (question.indexOf("play") >= 0 && question.indexOf("by") >= 0) {
        counter++

        playsample(question);
    }
    if (question.indexOf("play") >= 0 || question.indexOf("Play") >= 0) {
        if (counter == 0) {
            playsampletrack(question);
        }
        counter++

    }


    //end of Weather api
    //start git

    //end git
    //start of gpt-2


    //end of gpt-2
    //start of convo
    if (question.indexOf("you") >= 0 || question.indexOf("your") >= 0 || question.indexOf("Your") >= 0 || question.indexOf("You") >= 0) {
        if (counter == 0) {
            getConvo(question);
        }
        counter++
    }
    // //end of convo
    // fetch('https://api.textgears.com/grammar?text=' + question + '&language=en-GB&key=LAHujsnpAbWYH6Tv', {
    //     method: 'get',
    //     mode: 'cors',
    //     redirect: 'follow'

    // }).then(function(response) {
    //     return response.json();
    // }).then(function(jsonData) {
    //     errors = jsonData.response.errors;
    if (question != "") {
        if (counter == 0) {
            getdefault(question);
        }

    }
    // });

    // onload();
}