var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("landing");
});

app.get("/campgrounds", function(req, res){
	var campgrounds = [
		{name: "Bola2", image:"https://images.unsplash.com/photo-1486082570281-d942af5c39b7?auto=format&fit=crop&w=1502&q=80"},
		{name: "Sa2ara", image: "https://images.unsplash.com/photo-1496545672447-f699b503d270?auto=format&fit=crop&w=1502&q=80"},
		{name: "Faisal", image: "https://images.unsplash.com/photo-1478810810369-07072c5ef88b?auto=format&fit=crop&w=1500&q=80"}
	];

	res.render("campgrounds", {campgrounds: campgrounds});
});

app.listen(3000, function(){
	console.log("The YelpCamp Server has Started");
});