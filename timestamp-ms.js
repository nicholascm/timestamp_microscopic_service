var express = require('express') 


var app = express(); 

var date = new Date(); 

app.set('port', (process.env.PORT || 5000));

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
    res.end("hello world"); 
}); 

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
