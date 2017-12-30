var express 	= require("express"),
	app 		= express(),
	bodyParser = require("body-parser"),
	mongoose 	= require("mongoose");


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost/yelp_camp");

// schema setup
var campgroundSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);
/*
Campground.create(
	{
		name: "Granite Hill",
		image: "https://images.unsplash.com/photo-1439123414876-0717652a92a9?auto=format&fit=crop&w=1504&q=80",
		description: "This a huge granite hill. Absolutely beautiful. No water, no bathrooms."
	}, function(err, newlyCreated){
		if(err){
			console.log(err);
		} else {
			console.log(newlyCreated);
		}
});
*/
app.get("/", function(req, res){
	res.render("landing");
});

// INDEX - show all campgrounds
app.get("/campgrounds", function(req, res){
	// Get all campgrounds from DB
	Campground.find({}, function(err, allCampgrounds){
		if(err){
			console.log(err);
		} else {
			res.render("index", {campgrounds: allCampgrounds});
		}
	});
/*	res.render("campgrounds", {campgrounds: campgrounds});
*/});

// CREATE - add new campground to db
app.post("/campgrounds", function(req, res){
	// get data from form and add to campground array
	var name = req.body.name;
	var image = req.body.image;
	var desc = req.body.description;
	var newCampground = {name: name, image: image, description: desc};
	// Create a new campground and save to DB
	Campground.create(newCampground, function(err, newlyCreated){
		if(err){
			console.log(err);
		} else {
			// redirect back to campgrounds page
			res.redirect("/campgrounds");
		}
	});
});

// NEW - show form to create new campground
app.get("/campgrounds/new", function(req, res){
	res.render("new");
});

// SHOW - shows info about one campground
app.get("/campgrounds/:id", function(req, res){
	// find the campground with provided ID
	Campground.findById(req.params.id, function(err, foundCampground){
		if(err){
			console.log(err);
		} else {
			// render show template with that campground
			res.render("show", {campground: foundCampground});
		}
	});
});


app.listen(3000, function(){
	console.log("The YelpCamp Server has Started");
});