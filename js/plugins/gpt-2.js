function getData(question) {
    document.getElementById("loading").classList.remove("hidden");
    data = "Q: " + question + "\n";
    fetch('http://jarvisai.gleeze.com:5000/?data=' + JSON.stringify(question), {
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
      answer = jsonData.result;
      buffer = answer;
      //buffer = buffer + answer;
  
      //clean up some bad formatting
      buffer = buffer.replace(" . ", ".");
      buffer = buffer.replace(" .", ".");
      buffer = buffer.replace(" , ", ", ");
      buffer = buffer.replace(" , ", ", ");
      buffer = buffer.replace(" '", "'");
      buffer = buffer.replace(" \" ", " \"");
  
  
      document.getElementById("response").innerHTML = buffer;
      history.push(['Command/Question is ' + question, "Answer is " + buffer]);
      // if (!answer.trim().endsWith(".")
      // && !answer.trim().endsWith("!")
      //&& !answer.trim().endsWith("?")) {
      //console.log(answer);
  
  
      //speak(buffer);
      //} else {
      //speak(buffer);
      //console.log(buffer);
      //document.getElementById("loading").classList.add("hidden");
      //}
  
  
  
    }).catch(function (err) {
      console.log("Oops, Something went wrong!", err);
    })
  }