var express = require('express');
var app = express();
var fs = require("fs");

app.get('/homes/:id/data', function (req, res) {
    fs.readFile( __dirname + "/" + "rooms.json", 'utf8', function (err, data) {
        if(err) {
            console.log(err);
        }
        var rooms = JSON.parse( data );
        var room = rooms[req.params.id];

        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.end(JSON.stringify(room));
    });
});

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Server listening at http://%s:%s", host, port)
})