var express = require('express') 


var app = express(); 

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {
    res.send("<h1>Home page</h1>"); 
}); 

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
    var date = new Date();
    return {
        "unix": getUnixDate(num),
        "natural": getNaturalDate(num)
    }
}; 

function getUnixDate(num) {
    
    var date = new Date(num);
    
        if (typeof num == "number") {
            return date.getTime(); 
        }
        else {
            return date.parse(num); 
        }
    }


function getNaturalDate(num) {
    
    var date = new Date(num*1000);
    
    if (typeof num == "number") {
        return monthString(date.getMonth())+" "+date.getDate()+", "+date.getFullYear();
    }
    else {
        return num; 
    }
}


function monthString(num) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return months[num]; 
}

