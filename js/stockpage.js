function whatever() {
    question = "what is dogecoin stock"
    gettickerdefault(question)
    setvalues(question)
}









function setvalues(question) {

    if (question.indexOf("dogecoin") >= 0) {


        var open_price = sessionStorage.getItem("open_price");
        var high_price = sessionStorage.getItem("high_price");
        var low_price = sessionStorage.getItem("low_price");
        var current_price = sessionStorage.getItem("current_price");
        var question = sessionStorage.getItem("question");
        document.getElementById("currentprice").innerHTML = current_price
        document.getElementById("question").innerHTML = question
        document.getElementById("high").innerHTML = "hp " + high_price
        document.getElementById("low").innerHTML = "lp " + low_price

        change = current_price - open_price
        if (change > 0) {
            change = Math.round(change * 100) / 100
            change = "+" + change
            document.getElementById("question").style = "color: #5fb8ff;"
            document.getElementById("currentprice").style = "color: #5fb8ff;"
            document.getElementById("change").style = "color: #5fb8ff;"
            document.getElementById("high").style = "color: #5fb8ff;"
            document.getElementById("low").style = "color: #5fb8ff;"
            document.body.children[0].style = "color: #5fb8ff;"
            backcolor = "#5fb8ff"
        }
        if (change == 0) {
            change = Math.round(change * 100) / 100
            document.getElementById("question").style = "color: #fff;"
            document.getElementById("high").style = "color: #ffff;"
            document.getElementById("low").style = "color: #fff;"
            document.getElementById("currentprice").style = "color: #fff;"
            document.getElementById("change").style = "color: #fff;"
            document.body.children[0].style = "color: #ffff;"
            backcolor = "#fff"
        }
        if (change < 0) {
            change = Math.round(change * 100) / 100
            document.getElementById("question").style = "color: #5fb8ff;"
            document.getElementById("high").style = "color: #5fb8ff;"
            document.getElementById("low").style = "color: #5fb8ff;"
            document.getElementById("currentprice").style = "color: #5fb8ff;"
            document.getElementById("change").style = "color: #5fb8ff;"
            document.body.children[0].style = "color: #5fb8ff;"
            backcolor = "#5fb8ff"

        }
        document.getElementById("change").innerHTML = change

        var data = [open_price, low_price, high_price, current_price]
        var labels = ["Open", "Low", "Hign", "Current"]
        var ctx = document.getElementById('myChart1');

        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: question,
                    data: data,
                    backgroundColor: backcolor,
                    borderColor: backcolor,
                    color: backcolor,
                }]
            },
            options: {
                color: {
                    color: backcolor,
                },
                legend: {
                    labels: {
                        fontColor: backcolor,
                        fontSize: 18
                    }
                },
                scales: {
                    yAxes: [{
                        title: {
                            display: true,
                            fontColor: backcolor,
                        },
                        min: low_price - .10,
                        max: high_price + .10,
                        ticks: {
                            // forces step size to be 50 units
                            stepSize: 50
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            fontColor: backcolor,
                            fontSize: 14,
                            stepSize: 1,
                            beginAtZero: true
                        }
                    }],



                }

            }
        });

    } else {
        changelol(question)
    }


}

function changelol(question) {
    //  


    getticker(question)
    myVar = setInterval(lol, 3000);

    function lol() {

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
                sessionStorage.clear()
                sessionStorage.setItem("question", question);
                sessionStorage.setItem("open_price", open_price);
                sessionStorage.setItem("high_price", high_price);
                sessionStorage.setItem("low_price", low_price);
                sessionStorage.setItem("current_price", current_price);
                buffer = question + " stock price is currently " + current_price

                // starttextanimation(buffer)
                // var win = window.open("stock.html", );


                // if (stock_percent <= .05) {
                //         buffer = question + " has had a " + stock_percent + "% fall today. " + question + " current price today is " + current_price + " usd" + ". " + question + " high price today is " + high_price + " usd" + " and there low price today is " + low_price + " usd" + ".";
                //         document.getElementById("response").innerHTML = buffer;
                //         speak(buffer);
                //     }


                getticker(buffer)
                setvaluesnew(buffer)
            });


        });

    }

}

function setvaluesnew(buffer) {
    var childiFrame = parent.document.getElementById("data3");
    var doc = childiFrame.contentDocument ||
        childiFrame.contentWindow.document;

    var open_price = sessionStorage.getItem("open_price");
    var high_price = sessionStorage.getItem("high_price");
    var low_price = sessionStorage.getItem("low_price");
    var current_price = sessionStorage.getItem("current_price");
    var question = sessionStorage.getItem("question");
    doc.getElementById("currentprice").innerHTML = current_price
    doc.getElementById("question").innerHTML = question
    doc.getElementById("high").innerHTML = "hp " + high_price
    doc.getElementById("low").innerHTML = "lp " + low_price

    change = current_price - open_price
    if (change > 0) {
        change = Math.round(change * 100) / 100
        change = "+" + change
        doc.getElementById("question").style = "color: #5fb8ff;"
        doc.getElementById("currentprice").style = "color: #5fb8ff;"
        doc.getElementById("change").style = "color: #5fb8ff;"
        doc.getElementById("high").style = "color: #5fb8ff;"
        doc.getElementById("low").style = "color: #5fb8ff;"
        doc.body.children[0].style = "color: #5fb8ff;"
        backcolor = "#5fb8ff"
    }
    if (change < 0) {
        change = Math.round(change * 100) / 100
        doc.getElementById("question").style = "color: #5fb8ff;"
        doc.getElementById("high").style = "color: #5fb8ff;"
        doc.getElementById("low").style = "color: #5fb8ff;"
        doc.getElementById("currentprice").style = "color: #5fb8ff;"
        doc.getElementById("change").style = "color: #5fb8ff;"
        doc.body.children[0].style = "color: #5fb8ff;"
        backcolor = "#5fb8ff"

    }
    doc.getElementById("change").innerHTML = change

    var data = [open_price, low_price, high_price, current_price]
    var labels = ["Open", "Low", "Hign", "Current"]
    var ctx = doc.getElementById('myChart1');

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: question,
                data: data,
                backgroundColor: backcolor,
                borderColor: backcolor,
                color: backcolor,
            }]
        },
        options: {
            color: {
                color: backcolor,
            },
            legend: {
                labels: {
                    fontColor: backcolor,
                    fontSize: 18
                }
            },
            scales: {
                yAxes: [{
                    title: {
                        display: true,
                        fontColor: backcolor,
                    },
                    min: low_price - .10,
                    max: high_price + .10,
                    ticks: {
                        // forces step size to be 50 units
                        stepSize: 50
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontColor: backcolor,
                        fontSize: 14,
                        stepSize: 1,
                        beginAtZero: true
                    }
                }],



            }

        }
    });
}



// function closewindow() {
//     localStorage.clear();
//     window.open("https://waidai.netlify.app")
// }