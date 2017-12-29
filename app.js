var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var campgrounds = [	
	{name: "Bola2", image:"https://images.unsplash.com/photo-1486082570281-d942af5c39b7?auto=format&fit=crop&w=1502&q=80"},
	{name: "Sa2ara", image: "https://images.unsplash.com/photo-1496545672447-f699b503d270?auto=format&fit=crop&w=1502&q=80"},
	{name: "Faisal", image: "https://images.unsplash.com/photo-1478810810369-07072c5ef88b?auto=format&fit=crop&w=1500&q=80"},
	{name: "Bola2", image:"https://images.unsplash.com/photo-1486082570281-d942af5c39b7?auto=format&fit=crop&w=1502&q=80"},
	{name: "Sa2ara", image: "https://images.unsplash.com/photo-1496545672447-f699b503d270?auto=format&fit=crop&w=1502&q=80"},
	{name: "Faisal", image: "https://images.unsplash.com/photo-1478810810369-07072c5ef88b?auto=format&fit=crop&w=1500&q=80"},
	{name: "Bola2", image:"https://images.unsplash.com/photo-1486082570281-d942af5c39b7?auto=format&fit=crop&w=1502&q=80"},
	{name: "Sa2ara", image: "https://images.unsplash.com/photo-1496545672447-f699b503d270?auto=format&fit=crop&w=1502&q=80"},
	{name: "Faisal", image: "https://images.unsplash.com/photo-1478810810369-07072c5ef88b?auto=format&fit=crop&w=1500&q=80"}
];

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("landing");
});

app.get("/campgrounds", function(req, res){
	res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
	// get data from form and add to campground array
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, image: image};
	campgrounds.push(newCampground);
	// redirect back to campgrounds page
	res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
	res.render("new");
});

app.listen(3000, function(){
	console.log("The YelpCamp Server has Started");
});