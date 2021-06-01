function getfoodinfo(question) {
    copy = question;
    copylol = question
    if (question.startsWith("what nutrients are in a")) {
        question = question.split("what nutrients are in a")[1];
    }
    if (question.startsWith("how much fat is in a")) {
        question = question.split("how much fat is in a")[1];
    }

    if (question.startsWith("how much fat is in an")) {
        question = copy.split("how much fat is in an")[1];
    }

    if (question.startsWith("what nutrients are in an")) {
        question = copy.split("what nutrients are in an")[1];
    }
    if (question.startsWith("how many calories are in a")) {
        question = question.split("how many calories are in a")[1];
    }

    if (question.startsWith("how many calories are in an")) {
        question = copy.split("how many calories are in an")[1];
    }
    if (question.startsWith("how much protein are in a")) {
        question = question.split("how much protein are in a")[1];
    }
    if (question.startsWith("how much protein are in an")) {
        question = copy.split("how much protein are in an")[1];
    }
    if (question.startsWith("how much protein is in an")) {
        question = copy.split("how much protein is in an")[1];
    }
    fetch('https://api.edamam.com/api/food-database/v2/parser?nutrition-type=logging&ingr=' + question + '&app_id=f5ef712c&app_key=d2686afc22c94a5e6814dcc8fed35b80', {
        method: 'get',
        mode: 'cors',
        redirect: 'follow'

    }).then(function(response) {
        return response.json();
    }).then(function(jsonData) {
        food_item = jsonData.parsed[0].food.label;
        food_protein = jsonData.parsed[0].food.nutrients.PROCNT;
        food_calories = jsonData.parsed[0].food.nutrients.ENERC_KCAL;
        food_fat = jsonData.parsed[0].food.nutrients.FAT;
        food_carbs = jsonData.parsed[0].food.nutrients.CHOCDF;
        food_fiber = jsonData.parsed[0].food.nutrients.FIBTG;
        food_fat = Math.round(food_fat);
        food_carbs = Math.round(food_carbs);
        food_fiber = Math.round(food_fiber);
        food_fat = JSON.stringify(food_fat);
        food_carbs = JSON.stringify(food_carbs);
        food_fiber = JSON.stringify(food_fiber);
        Math.round(food_protein);
        food_protein = JSON.stringify(food_protein);
        food_item = food_item.charAt(0).toUpperCase() + food_item.slice(1);
        Math.round(food_calories);
        food_calories = JSON.stringify(food_calories);
        if (copy.startsWith("how many calories are in a") || copy.startsWith("how many calories are in an")) {
            buffer = food_item + " has " + food_calories + " calories. "
        }
        if (copy.startsWith("how much protein are in a") || copy.startsWith("how much protein are in an")) {
            buffer = food_item + " has " + food_protein + "."
        }
        if (copy.startsWith("how much protein is in a") || copy.startsWith("how much protein are in an")) {
            buffer = food_item + " has " + food_protein + "."
        }
        if (copy.startsWith("what nutrients are in a") || question.startsWith("what nutrients are in an")) {
            buffer = food_item + " has " + food_calories + " calories, " + food_fat + " grams of fat, " + food_protein + " grams of protein, " + food_carbs + " grams of carbs and " + food_fiber + " grams of fiber."
        }
        if (copy.startsWith("what nutrients are in a") || copy.startsWith("what nutrients are in an")) {
            buffer = food_item + " has " + food_fat + " grams of fat."
        }

        starttextanimation(buffer, question = copylol)
        speak(buffer);

    });
}

function getrecipe(question) {
    copylol = question
    if (question.startsWith("show me a recipe for")) {
        question = question.split("show me a recipe for ")[1];
    }
    if (question.startsWith("get me a recipe for")) {
        question = question.split("get me a recipe for ")[1];
    }
    fetch('https://api.edamam.com/search?q=' + question + '&app_id=001d5dec&app_key=886361dd9b236037a3ac7ca6656c2475', {
        method: 'get',
        mode: 'cors',
        redirect: 'follow'

    }).then(function(response) {
        return response.json();
    }).then(function(jsonData) {
        question = question.split(" ");
        search = ""
        var i;
        // for (i = 0; i < question.length; i++) {
        //     capitalStr = question[i].charAt(0).toUpperCase() + question[i].slice(1);
        //     search += capitalStr + " "
        // }
        // find = jsonData.hits.find(element => element.recipe.label.startsWith(search));
        // if (find.recipe == undefined) {
        //     getrecipe(question)
        // }
        recipe = jsonData.hits[0].recipe;
        recipe_name = recipe.label;
        recipe_img = recipe.image;
        recipe_url = recipe.url;
        ingred = " It calls for "
        diet_labels = " Its diet labels include"
        haelth_label = " The recipes health label is "

        for (i = 0; i < recipe.ingredients.length; i++) {
            ingred += recipe.ingredients[i].text + " ";

        }

        for (i = 0; i < recipe.dietLabels.length; i++) {
            diet_labels += recipe.dietLabels[i] + " ";


        }
        for (i = 0; i < recipe.healthLabels.length; i++) {
            haelth_label += recipe.healthLabels[i] + " ";

        }



        buffer = "This is the " + recipe_name + " recipe"

        sessionStorage.setItem("recipe_img", recipe_img);
        sessionStorage.setItem("recipe_name", recipe_name);
        sessionStorage.setItem("recipe_url", recipe_url);
        sessionStorage.setItem("ingred", ingred);
        // var win = window.open("recipe.html");
        parent.document.getElementById("music").src = "recipe.html"
        starttextanimation(buffer, question = copylol)
        speak(buffer);


    });
}