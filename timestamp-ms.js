var express = require('express') 

var port = 8080; 

var app = express(); 

/*

var date = Date()

app.get('/', function(req, res) {
    var query = req.query; 
    res.send({
            "unixtime": date.getTime()
        })
    
})
*/
app.get('/', function (req,res) {
    res.send("hello world"); 
    res.end();
})

app.listen(port); 