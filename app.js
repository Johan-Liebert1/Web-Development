var express = require("express");
var app = express();
var request = require("request");

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("search");
})

app.get("/results", function(req, res){
	var query = req.query.search;
	var url = "http://www.omdbapi.com/?s=" + query + "&apikey=thewdb"
	request(url, function(error, response, body){
		if (!error && response.statusCode == 200){
			var result = JSON.parse(body);
			var key = Object.keys(result["Search"][0]);
			res.render("results", {result: result, key:key});
		}
	})
})

app.listen(7000, function(){
	console.log("Server has started")
})