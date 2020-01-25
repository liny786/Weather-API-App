
var OAuth = require('oauth');
var header = {
    "X-Yahoo-App-Id": "Saz9Ib6k"
};
var request = new OAuth.OAuth(
    null,
    null,
    'dj0yJmk9ZWhlMEMwN0ZHTlVHJmQ9WVdrOVUyRjZPVWxpTm1zbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PWRj',
    '7ee7816f913183b108ba4698c8c6fab0ac7974d4',
    '1.0',
    null,
    'HMAC-SHA1',
    null,
    header
);

request.get('https://weather-ydn-yql.media.yahoo.com/forecastrss?location=mumbai&format=json',null, null,  function(err, data, result){


   /*
    // function(error, response, body)//
    if(!error && response.statuscode==200){

        var parsedData = JSON.parse(body);
        console.log(parsedData);
    }
    if(error)
        console.log("error is produced!!");  */

    if (err) {
        console.log(err);
    } else {
        var parsedData = JSON.parse(data);
        console.log("The sunrise time in the city of Mumbai is: ");
        console.log(parsedData["current_observation"]["astronomy"]["sunrise"]);
    }
});