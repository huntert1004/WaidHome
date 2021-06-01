function convert(question) {
    let convertFind;
    copylol = question
    if (question.startsWith("what is")) {
        question = question.replace("what is ", "")
        question = question.replace("in ", "")
        question = question.split(" ");
        number = question[0]
        fromunit = question[1]
        tounit = question[2]
        copy = tounit
    }
    fetch('json/convert.json', {
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
        if (fromunit.endsWith("s") >= 0) {
            fromunit = fromunit.replace("s", "")
        }
        if (tounit.endsWith("s") >= 0) {
            tounit = tounit.replace("s", "")
        }
        if (tounit.indexOf("feet") >= 0) {
            tounit = "foot"
        }
        if (fromunit.indexOf("feet") >= 0) {
            fromunit = "foot"
        }
        convertions = fromunit + " to " + tounit
        if (fromunit.indexOf("milliliter") >= 0 || fromunit.indexOf("milliliters") >= 0 || fromunit.indexOf("liter") >= 0 || fromunit.indexOf("liters") >= 0 || fromunit.indexOf("centiliter") >= 0 || fromunit.indexOf("centiliters") >= 0 || fromunit.indexOf("deciliter") >= 0 || fromunit.indexOf("deciliters") >= 0 || fromunit.indexOf("decaliter") >= 0 || fromunit.indexOf("decaliters") >= 0 || fromunit.indexOf("hecoliter") >= 0 || fromunit.indexOf("hecoliters") >= 0 || fromunit.indexOf("cubic meter") >= 0 || fromunit.indexOf("cubic meters") >= 0 || fromunit.indexOf("cubic inch") >= 0 || fromunit.indexOf("cubic inches") >= 0 || fromunit.indexOf("gallon") >= 0 || fromunit.indexOf("gallons") >= 0 || fromunit.indexOf("cubic foot") >= 0 || fromunit.indexOf("cubic feet") >= 0 || fromunit.indexOf("pint") >= 0 || fromunit.indexOf("pints") >= 0 || fromunit.indexOf("quart") >= 0 || fromunit.indexOf("barrel") >= 0) {
            convertFind = jsonData.convert.volume.find(element => element.conversionlabel == convertions);
        }
        if (fromunit.indexOf("yard") >= 0 || fromunit.indexOf("centimeter") >= 0 || fromunit.indexOf("millimeter") >= 0 || fromunit.indexOf("meter") >= 0 || fromunit.indexOf("kilometer") >= 0 || fromunit.indexOf("inch") >= 0 || fromunit.indexOf("inches") >= 0 || fromunit.indexOf("foot") >= 0 || fromunit.indexOf("feet") >= 0 || fromunit.indexOf("yard") >= 0 || fromunit.indexOf("mile") >= 0 || fromunit.indexOf("nautrical mile") >= 0) {
            convertFind = jsonData.convert.length.find(element => element.conversionlabel == convertions);
        }
        if (fromunit.indexOf("kilogram") >= 0 || fromunit.indexOf("gram") >= 0 || fromunit.indexOf("pound") >= 0 || fromunit.indexOf("grain") >= 0 || fromunit.indexOf("ounce") >= 0 || fromunit.indexOf("carrat") >= 0 && fromunit.indexOf("yard") >= 0 || fromunit.indexOf("ton") >= 0 || fromunit.indexOf("long ton") >= 0 || fromunit.indexOf("tonne") >= 0) {
            convertFind = jsonData.convert.weight.find(element => element.conversionlabel == convertions);
        }


        conversionnumber = convertFind.conversion;
        number = Number(number)
        conversionnumber = Number(conversionnumber)
        calc = number * conversionnumber
        var result = (calc - Math.floor(calc)) !== 0;

        if (result) {

        } else {
            calc = Math.round(calc)
        }


        buffer = calc + ' ' + copy
        starttextanimation(buffer, question = copylol);
        speak(buffer);


    });
}