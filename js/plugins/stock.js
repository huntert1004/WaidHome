function getticker(question) {
    // speak(buffer);
    copy = question
    if (question.startsWith("what is ")) {
        question = question.split(" ")[2];
    }
    if (question.startsWith("was ")) {
        question = question.split(" ")[2];
    }
    if (question.startsWith("what's up")) {
        question = question.split(" ")[2];
    }
    if (question.startsWith("how is ")) {
        question = question.split(" ")[2];
    }
    if (question.startsWith("how is ")) {
        question = question.split(" ")[2];
    }
    if (question.startsWith("what's ")) {
        question = question.split(" ")[1];
    }
    if (question.startsWith("what ")) {
        question = question.split(" ")[1];
    }
    if (question.endsWith("s")) {
        question = question.replace("s", "")
    }


    fetch('https://finnhub.io/api/v1/search?q=' + question + '&token=c03pb3v48v6sogn2v71g', {
        method: 'get',
        mode: 'cors',
        redirect: 'follow'
    }).then(function(response) {
        return response.json();
    }).then(function(jsonData) {
        ticker = jsonData.result[0].symbol;
        getstock(ticker, copy)
    });
}

function getstock(ticker, copy) {

    fetch('https://finnhub.io/api/v1/quote?symbol=' + ticker + '&token=c03pb3v48v6sogn2v71g', {
        method: 'get',
        mode: 'cors',
        redirect: 'follow'
    }).then(function(response) {
        return response.json();
    }).then(function(jsonData) {
        open_price = jsonData.o;
        high_price = jsonData.h;
        low_price = jsonData.l;
        current_price = jsonData.c;
        previous_close_price = jsonData.pc;
        stock_percent = (high_price - low_price) / high_price;

        sessionStorage.setItem("question", question);
        sessionStorage.setItem("open_price", open_price);
        sessionStorage.setItem("high_price", high_price);
        sessionStorage.setItem("low_price", low_price);
        sessionStorage.setItem("current_price", current_price);
        buffer = question + " stock price is currently " + current_price
        starttextanimation(buffer, question = copy)
        speak(buffer)
        // starttextanimation(buffer)
        // var win = window.open("stock.html", );
        // speak(buffer);

        // if (stock_percent <= .05) {
        //         buffer = question + " has had a " + stock_percent + "% fall today. " + question + " current price today is " + current_price + " usd" + ". " + question + " high price today is " + high_price + " usd" + " and there low price today is " + low_price + " usd" + ".";
        //         document.getElementById("response").innerHTML = buffer;
        //         speak(buffer);
        //     }
    });


}

function gettickerdefault(question) {
    if (question.startsWith("what is ")) {
        question = question.split(" ")[2];
    }
    if (question.startsWith("what's up")) {
        question = question.split(" ")[2];
    }
    if (question.startsWith("how is ")) {
        question = question.split(" ")[2];
    }
    if (question.startsWith("how is ")) {
        question = question.split(" ")[2];
    }
    if (question.startsWith("what's ")) {
        question = question.split(" ")[1];
    }
    if (question.startsWith("what ")) {
        question = question.split(" ")[1];
    }
    if (question.endsWith("s")) {
        question = question.replace("s", "")
    }
    fetch('https://finnhub.io/api/v1/search?q=' + question + '&token=c03pb3v48v6sogn2v71g', {
        method: 'get',
        mode: 'cors',
        redirect: 'follow'
    }).then(function(response) {
        return response.json();
    }).then(function(jsonData) {
        ticker = jsonData.result[0].symbol;

        getstockdefault(ticker, question);

    });
}

function getstockdefault(ticker, question) {
    if (question == "dogecoin") {
        ticker = "DOGE-USD"
    }
    fetch('https://finnhub.io/api/v1/quote?symbol=' + ticker + '&token=c03pb3v48v6sogn2v71g', {
        method: 'get',
        mode: 'cors',
        redirect: 'follow'
    }).then(function(response) {
        return response.json();
    }).then(function(jsonData) {
        open_price = jsonData.o;
        high_price = jsonData.h;
        low_price = jsonData.l;
        current_price = jsonData.c;
        previous_close_price = jsonData.pc;
        stock_percent = (high_price - low_price) / high_price;

        sessionStorage.setItem("question", question);
        sessionStorage.setItem("open_price", open_price);
        sessionStorage.setItem("high_price", high_price);
        sessionStorage.setItem("low_price", low_price);
        sessionStorage.setItem("current_price", current_price);
        buffer = question + " stock price is currently " + current_price
        setvalues(question)
        // starttextanimation(buffer)
        // var win = window.open("stock.html", );
        // speak(buffer);

        // if (stock_percent <= .05) {
        //         buffer = question + " has had a " + stock_percent + "% fall today. " + question + " current price today is " + current_price + " usd" + ". " + question + " high price today is " + high_price + " usd" + " and there low price today is " + low_price + " usd" + ".";
        //         document.getElementById("response").innerHTML = buffer;
        //         speak(buffer);
        //     }
    });

}