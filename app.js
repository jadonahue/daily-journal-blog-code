const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

// Lodash
const { has, includes } = require("lodash");
const _ = require('lodash');

// Mongoose
const mongoose = require("mongoose");

// Import and configure dotenv.
require('dotenv').config()

// Insert your own AtlasDB URL and User info in .env file.
const atlasDBInfo = process.env.ATLAS_URL_INFO;

// Connect to Atlas DB and creates todolistDB
mongoose.connect(atlasDBInfo + "blogDB");

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

// Global posts are added to this array as they are composed.
// let posts = [];

app.set('view engine', 'ejs');

// Enables us to use body-parser.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Post schema
const postSchema = {
  title: String,
  content: String
};

// Create a mongoose model based on this schema.
const Post = mongoose.model("Post", postSchema);

// Render the starting and composed blog summary on home page.
app.get("/", function (req, res) {

  // Find all items in posts collection and render it to home.
  Post.find({})
    .then(function (posts) {
      res.render("home", { 
        startingContent: homeStartingContent, 
        posts: posts,
      });
  });
});

// Render compose page.
app.get("/compose", function (req, res) {
  res.render("compose");
});

// Post compose page and gather user input information from compose postTitle & postBody. Add new post using Post schema.
app.post("/compose", function (req, res) {
  const post = new Post ({
    title: req.body.postTitle,
    content: req.body.postBody
  });

  // Save the post through our compose route and redirecting back into the home route. A message will be displayed in our console when a post is being saved.
  post.save()
    .then(function () {
      console.log("Post successfully added to DB.");

      // Redirect to root/home page.
      res.redirect("/");
    })
    .catch(function (err) {
      res.status(400).send("Unable to save post to DB.");
    });

});

// Checks for post id name. If name exists then renders the full post.
app.get("/posts/:postId", function (req, res) {

  // Store the Post Id or _id of our created post in variable.
  const requestedPostId = req.params.postId;

  // Using the findOne() method and promises (.then and .catch), we render the post into the designated page.
  Post.findOne({_id: requestedPostId})
    .then(function (post) {
      res.render("post", {
        title: post.title,
        content: post.content
        });
    })
    .catch(function (err){
      console.log(err);
    })

});

// Render about page with about content.
app.get("/about", function (req, res) {
  res.render("about", { aboutContent: aboutContent });
});

// Render contact page with contact info.
app.get("/contact", function (req, res) {
  res.render("contact", { contactContent: contactContent });
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
