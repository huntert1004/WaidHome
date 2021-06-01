function getwordinfo(question) {
    copy = question
    if (question.startsWith("what is the definition of ")) {
        question = question.split("what is the definition of ")[1];
    }
    fetch('https://owlbot.info/api/v4/dictionary/' + question, {
        method: 'get',
        mode: 'cors',
        redirect: 'follow',
        headers: {
            'Accept': 'application/json',
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": "Token d3e909f67dd56920244188c9db38a67978a7d639"
        }
    }).then(function(response) {
        return response.json();
    }).then(function(jsonData) {
        def1 = jsonData.definitions[0].definition;
        var definition;
        var emoji;
        var example;

        for (i = 0; i < jsonData.definitions.length; i++) {
            emoji += jsonData.definitions[i].emoji + " ";
            definition += jsonData.definitions[i].definition + " ";
            example += jsonData.definitions[i].example + " ";
        }
        buffer = "The definition of " + question + " is " + def1;
        starttextanimation(buffer, question = copy)
        speak(buffer);
    });
}

function getspell(question) {
    copy = question
    if (question.startsWith("how do I spell ")) {
        question1 = question.split("how do I spell ")[1];
        question = question.split("");
        var spell;
        for (i = 0; i < question1.length; i++) {
            spell += question1[i] + "-"
        }
    }
    if (spell.startsWith("undefined")) {
        spell = spell.replace("undefined", "")
    }
    buffer = "You spell " + question1 + " like " + spell;
    starttextanimation(buffer, question)
    speak(buffer);
}

function getthesaurus(question) {
    copy = question
    if (question.startsWith("what is a synonym for ")) {
        question = question.split("what is a synonym for ")[1];
    }
    fetch('https://www.dictionaryapi.com/api/v3/references/ithesaurus/json/' + question + "?key=34ef810d-572e-4929-9117-166b087e7d74", {
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
        var definition;
        synonyms1 = jsonData[0].meta.syns[0][0];
        synonyms2 = jsonData[0].meta.syns[0][1];
        synonyms3 = jsonData[0].meta.syns[0][2];
        var antonyms;



        // if (jsonData[i].meta.syns.length != null) {
        //      for (j = 0; j < jsonData[i].meta.syns[0].length; i++) {
        //            synonyms += jsonData[i].meta.syns[0][j]
        //        }
        //     }
        //     if (jsonData[i].meta.ants.length != null) {
        //         for (x = 0; x < jsonData[i].meta.ants[0].length; i++) {
        //  antonyms += jsonData[i].meta.ants[0][x] +" "
        //     }
        //   }



        buffer = "Synonyms for " + question + " include " + synonyms1 + ", " + synonyms2 + ", " + synonyms3 + ".";
        if (buffer.indexOf("undefined") >= 0) {
            buffer = buffer.replace("undefined", "")
        }
        starttextanimation(buffer, question = copy)
        speak(buffer);
    });
}