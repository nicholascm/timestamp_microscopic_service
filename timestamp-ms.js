var express = require('express') 


var app = express(); 

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {
    res.send("<h1>Home page</h1><br><p>Unix/Natural Date Microservice</p> "); 
}); 

app.get('/fun', function (req,res) {
    res.send("hello world"); 
}); 

app.get('/:dateString', function (req, res) {
    var dateString = req.params.dateString; 
    res.json(getTimes(dateString)); 
}); 

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

//var timeProvided = 1450137600; 

function getTimes(dateString) {
    var date = new Date();
    return {
        "unix": getUnixDate(dateString),
        "natural": getNaturalDate(dateString)
    }
}; 


function getUnixDate(dateString) {
    
    var date = new Date(dateString);
    
        if (isNumeric(dateString)) {
            return Number(dateString); 
        }
        else {
            return Date.parse(dateString); 
        }
    }


function getNaturalDate(dateString) {
    
    var date = new Date(dateString*1000);
    
    if (isNumeric(dateString)) {
        return monthString(date.getMonth())+" "+date.getDate()+", "+date.getFullYear();
    }
    else {
        return dateString; 
    }
}

function isNumeric(dateString) {
    if (typeof Number(dateString)== "number" && !isNaN(Number(dateString))) {
        return true; 
    }
}


function monthString(num) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return months[num]; 
}

