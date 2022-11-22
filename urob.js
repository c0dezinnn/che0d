

async function fetcheveryfivemin() {
    var fetchUrl = require("fetch").fetchUrl;
    fetchUrl("https://Statuscord.c0dezin.repl.co", function(error, meta, body){
        console.log("Ping nos sites")
    });

    fetchUrl("https://chernobyl.c0dezin.repl.co", function(error, meta, body){
        console.log("Ping nos sites")
    });

}
fetcheveryfivemin()
setInterval(function(){
    fetcheveryfivemin()}, 10000)