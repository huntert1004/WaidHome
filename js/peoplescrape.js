const rp = require('request-promise');
const clipboardy = require('clipboardy');
const url = 'https://www.biography.com/search?query=axl+rose';

rp(url)
    .then(function(html) {
        //success!
        console.log(html);


        // Copy
        clipboardy.writeSync(html);
    })
    .catch(function(err) {
        //handle error
    });