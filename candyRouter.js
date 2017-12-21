
var express = require('express');
var bodyParser = require('body-parser');
router = express.Router();


var candies = [{"id":1,"name":"Chewing Gum","color":"Red"},
{"id":2,"name":"Pez","color":"Green"},
{"id":3,"name":"Marshmallow","color":"Pink"},
{"id":4,"name":"Candy Stick","color":"Blue"}]
//What would need to go into candies
//in order to pass our first test?

router.get('/', function(req,res){

	res.json(candies);
});


router.post('/', function(req,res) {
	req.body.id = candies.length + 1;
	candies.push(req.body);
	res.send(req.body);
	
});



router.get('/:id', function(req, res){
    var parsedData = parseInt(req.params.id);
    console.log(typeof(parsedData))
    for(let i =0; i < candies.length; i++){
        if(parsedData === candies[i].id){
            res.json(candies[i]);
        }
    }
});




// Fill out the rest of the routes here

module.exports = router;