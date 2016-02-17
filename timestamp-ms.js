var express = require('express') 


var app = express(); 

app.set('port', (process.env.PORT || 5000));


app.get('/fun', function (req,res) {
    res.send("hello world"); 
}); 

app.get('/:dateString', function (req, res) {
    var dateString = req.params.dateString; 
    res.json(getTimes(Number(dateString))); 
}); 

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

//var timeProvided = 1450137600; 

function getTimes(num) {
    return {
        "unix": getUnixDate(num),
        "natural": getNaturalDate(num)
    }
}; 

function getUnixDate(num) {
    var date = new Date(num);
    return date.getTime(); 
}


function getNaturalDate(num) {
    var date = new Date(num);
    return monthString(date.getMonth())+" "+date.getDay()+","+date.getFullYear(); 
}




function monthString(num) {
    var months = ["January", "February", "March", "April", "May", "June"]
    return months[num]; 
}