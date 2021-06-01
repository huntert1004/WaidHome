function work() {
    question = document.getElementById("question").value;
  
    let history = [];
    if (question.indexOf("Jarvis") >= 0 || question.indexOf("Travis") >= 0) {
  
  
      if (question == "Jarvis") {
        buffer = "What can I do for you today sir";
        document.getElementById("response").innerHTML = buffer;
        speak(buffer);
      }
      //Start of custome tingzzz
      if (document.getElementById("myImg").src != null) {
        document.getElementById("myImg").src = "https://jarvisai.netlify.app/jarvis.gif"
      }
      //start of opening websites
      if (question.indexOf("ecs") >= 0 && question.indexOf("open")) {
  
        window.open("https://ecs-systems.netlify.app/");
        buffer = "ECS Initiated sir"
        document.getElementById("response").innerHTML = buffer;
        speak(buffer);
        history.push(['Command/Question is ' + question, "Answer is " + buffer]);
      }
      if (question.indexOf("netflix") >= 0 && question.indexOf("open") >= 0) {
  
        window.open("https://www.netflix.com");
        buffer = "Netflix Initiated sir"
        document.getElementById("response").innerHTML = buffer;
        speak(buffer);
        history.push(['Command/Question is ' + question, "Answer is " + buffer]);
      }
      if (question.indexOf("GitHub") >= 0 && question.indexOf("open") >= 0) {
  
        window.open("https://www.github.com");
        buffer = "Github Initiated sir"
        document.getElementById("response").innerHTML = buffer;
        speak(buffer);
        history.push(['Command/Question is ' + question, "Answer is " + buffer]);
      }
      if (question.indexOf("Instagram") >= 0 && question.indexOf("open") >= 0) {
  
        window.open("https://www.instagram.com");
        buffer = "Instagram Initiated sir"
        document.getElementById("response").innerHTML = buffer;
        speak(buffer);
        history.push(['Command/Question is ' + question, "Answer is " + buffer]);
      }
      if (question.indexOf("Amazon") >= 0 && question.indexOf("open") >= 0) {
  
        window.open("https://www.amazon.com");
        buffer = "Amazon Initiated sir"
        document.getElementById("response").innerHTML = buffer;
        speak(buffer);
        history.push(['Command/Question is ' + question, "Answer is " + buffer]);
      }
      if (question.indexOf("eBay") >= 0 && question.indexOf("open") >= 0) {
  
        window.open("https://www.ebay.com");
        buffer = "eBay Initiated sir"
        document.getElementById("response").innerHTML = buffer;
        speak(buffer);
        history.push(['Command/Question is ' + question, "Answer is " + buffer]);
      }
      if (question.indexOf("web") >= 0 && question.indexOf("search") >= 0) {
        hi = question
        var txt = question.split("search the web")[0];
  
        if (txt == "") {
          var txt = hi.split("search the web")[1];
        }
        if (txt.indexOf(" ")) {
          txt = txt.replace(" ", "+")
        }
  
        window.open("https://duckduckgo.com/?q=" + txt + "&atb=v245-1&ia=web");
        buffer = "Searched the web for you sir"
        document.getElementById("response").innerHTML = buffer;
        speak(buffer);
        history.push(['Command/Question is ' + txt, "Answer is " + buffer]);
      }
      if (question.indexOf("calculate") >= 0) {
  
        var precalc = question.split("calculate"[0]);
        if (precalc == "calculate") {
          var precalc = question.split("calculate"[1]);
        }
        calc = precalc[0];
        buffer = (eval(calc));
        document.getElementById("response").innerHTML = buffer;
        speak(buffer);
        history.push(['Command/Question is ' + question, "Answer is " + buffer]);
      }
      if (question.indexOf("Open") >= 0 && question.indexOf("project") >= 0 || question.indexOf("open") >= 0 && question.indexOf("project") >= 0) {
        question = question.split(" ")[1];
  
        fetch('http://jarvisai.gleeze.com:5000/openproject?data=' + question, {
          method: 'get',
          mode: 'cors',
          redirect: 'follow',
          headers: {
            'Accept': 'application/json',
            "Content-type": "application/json; charset=UTF-8"
          }
        }).then(function (response) {
          return response.json();
        }).then(function (jsonData) {
          buffer = jsonData.result;
  
  
          //buffer = buffer + answer;
          document.getElementById("response").innerHTML = buffer;
          speak(buffer);
          history.push(['Command/Question is ' + question, "Answer is " + buffer]);
  
        });
  
      }
      if (question.indexOf("Create") >= 0 && question.indexOf("project") >= 0 && question.indexOf("new") >= 0 || question.indexOf("create") >= 0 && question.indexOf("project") >= 0 && question.indexOf("new") >= 0) {
        question = question.split(" ")[4];
  
        fetch('http://jarvisai.gleeze.com:5000/createproject?data=' + question, {
          method: 'get',
          mode: 'cors',
          redirect: 'follow',
          headers: {
            'Accept': 'application/json',
            "Content-type": "application/json; charset=UTF-8"
          }
        }).then(function (response) {
          return response.json();
        }).then(function (jsonData) {
          buffer = jsonData.result;
  
  
          //buffer = buffer + answer;
          document.getElementById("response").innerHTML = buffer;
          speak(buffer);
          history.push(['Command/Question is ' + question, "Answer is " + buffer]);
        });
  
      }
      if (question.indexOf("Delete") >= 0 && question.indexOf("project") >= 0 || question.indexOf("delete") >= 0 && question.indexOf("project") >= 0) {
        question = question.split(" ")[3];
  
        fetch('http://jarvisai.gleeze.com:5000/deleteproject?data=' + question, {
          method: 'get',
          mode: 'cors',
          redirect: 'follow',
          headers: {
            'Accept': 'application/json',
            "Content-type": "application/json; charset=UTF-8"
          }
        }).then(function (response) {
          return response.json();
        }).then(function (jsonData) {
          buffer = jsonData.result;
  
  
          //buffer = buffer + answer;
          document.getElementById("response").innerHTML = buffer;
          speak(buffer);
          history.push(['Command/Question is ' + question, "Answer is " + buffer]);
        });
  
      }
      if (question.indexOf("Create") >= 0 && question.indexOf("template") >= 0 || question.indexOf("create") >= 0 && question.indexOf("template") >= 0) {
        question = question.split(" ")[4];
  
        fetch('http://jarvisai.gleeze.com:5000/maketemplete?data=' + question, {
          method: 'get',
          mode: 'cors',
          redirect: 'follow',
          headers: {
            'Accept': 'application/json',
            "Content-type": "application/json; charset=UTF-8"
          }
        }).then(function (response) {
          return response.json();
        }).then(function (jsonData) {
          buffer = jsonData.result;
  
  
          //buffer = buffer + answer;
          document.getElementById("response").innerHTML = buffer;
          speak(buffer);
          history.push(['Command/Question is ' + question, "Answer is " + buffer]);
        });
      }
  
      if (question.indexOf("Create") >= 0 && question.indexOf("file") >= 0 || question.indexOf("create") >= 0 && question.indexOf("file") >= 0) {
        hi = question
  
        hi2 = question
        question = question.split(" ")[2];
        hi3 = hi.split(" ")[5];
        hi4 = hi2.split(" ")[7];
        if (question == "javascript") {
          question = hi4 + "/" + hi3 + ".js"
        }
        if (question == "python") {
          question = hi4 + "/" + hi3 + ".py"
        }
        if (question == "html") {
          question = hi4 + "/" + hi3 + ".html"
        }
        if (question == "css") {
          question = hi4 + "/" + hi3 + ".css"
        }
        if (question == "text") {
          question = hi4 + "/" + hi3 + ".txt"
        }
        fetch('http://jarvisai.gleeze.com:5000/createfile?data=' + question, {
          method: 'get',
          mode: 'cors',
          redirect: 'follow',
          headers: {
            'Accept': 'application/json',
            "Content-type": "application/json; charset=UTF-8"
          }
        }).then(function (response) {
          return response.json();
        }).then(function (jsonData) {
          buffer = jsonData.result;
  
  
          //buffer = buffer + answer;
          document.getElementById("response").innerHTML = buffer;
          speak(buffer);
          history.push(['Command/Question is ' + question, "Answer is " + buffer]);
        });
  
      }
      //end create project templetes
      //start of add to notes 
      if (question.indexOf("notes") >= 0 && question.indexOf("add") >= 0 || question.indexOf("notes") >= 0 && question.indexOf("Add") >= 0) {
        res = question.split("add to my notes")[1];
  
        if (question.indexOf("Add") >= 0 && question.indexOf("notes") >= 0) {
          res = question.split("Add")[1];
        }
        document.getElementById("loading").classList.remove("hidden");
        fetch('http://jarvisai.gleeze.com:5000/notesopen?data=' + res, {
          method: 'get',
          mode: 'cors',
          redirect: 'follow'
        }).then(function (response) {
          return response.json();
        }).then(function (jsonData) {
          buffer = jsonData.result;
          document.getElementById("response").innerHTML = buffer;
          speak(buffer);
          history.push(['Command/Question is ' + question, "Answer is " + buffer]);
        });
  
      }
      //start git
      if (question.indexOf("commit") >= 0) {
        question = question.split("Jarvis commit")[1];
        var question = question.replace(" ", "");
        if (question == "yourself") {
          question = "JarvisWeb"
        }
        if (question == "model" || question == "flask app" || question == "yourself python" || question == "models") {
          question = "gpt-2"
        }
  
        fetch('http://jarvisai.gleeze.com:5000/commit?data=' + question, {
          method: 'get',
          mode: 'cors',
          redirect: 'follow',
          headers: {
            'Accept': 'application/json',
            "Content-type": "application/json; charset=UTF-8"
          }
        }).then(function (response) {
          return response.json();
        }).then(function (jsonData) {
          buffer = jsonData.result;
          document.getElementById("response").innerHTML = buffer;
          speak(buffer);
        });
      }
      //end git
      //start of gpt-2
      if (question.indexOf("What") == true || question.indexOf("what") == true || question.indexOf("When") == true || question.indexOf("when") == true|| question.indexOf("Why") == true || question.indexOf("why") == true || question.indexOf("Which") == true || question.indexOf("which") == true || question.indexOf("Who") == true || question.indexOf("who") == true || question.indexOf("How") == true || question.indexOf("how") == true || question.indexOf("Whose") == true || question.indexOf("whose") == true || question.indexOf("Whom") == true || question.indexOf("whom") == true) {
  
        if (question.indexOf("Jarvis") >= 0) {
          question = question.replace("Jarvis", "");
        }
        buffer = "One moment sir";
        document.getElementById("response").innerHTML = buffer;
        speak(buffer);
        getData(question);
  
      }
  
      //end of gpt-2
      //start of convo
      if (question.indexOf("you") >= 0 || question.indexOf("your") >= 0 || question.indexOf("Your") >= 0 || question.indexOf("You") >= 0) {
  
        if (!question.endsWith("?")) {
          question += "?"
        }
  
        if (question.indexOf("Jarvis") >= 0) {
          question = question.replace("Jarvis", "");
        }
  
        getConvo(question);
        return false;
  
  
  
  
  
      }
      //end of convo
  
      else {
        var copy;
        if (copy == undefined) {
          var buffer = ["", "What did you say sir?", "Didn't hear you sir.", "Say it again sir!"];
          random = Math.floor((Math.random() * 3) + 1)
          document.getElementById("response").innerHTML = buffer[random];
          speak(buffer);
        }
  
      }
    }
    else {
  
      buffer = "Respect the Name!!!!!";
      document.getElementById("response").innerHTML = buffer;
      speak(buffer);
  
    }
    if (document.getElementById('debug').checked) {
  
    }
    else {
        onload();
    }
  
  
  
  }