<h1>Daily Journal Blog</h1>

<p>
  This project is a daily website blog. This uses Node.js, Express.js, EJS, MongoDB, Mongoose, Lodash, Body-Parser, and DOTENV. In short summary, you can compose a daily post which will then be stored on the backend database.
</p>

---

<h2>Homepage<h2>

<p>
  The homepage has some static writing along with every other post stored in the MongoDB. You can access the homepage via "http://localhost:3000/" url or clickling the "HOME" option in the navigation bar. The posts will show from oldest to newest and have a summary of 100 characters. Each post will also have a hyperlink which will take the them directly to that post.
</p>

<p>
  <img src="public/images/homepage-screenshot.png">
</p>

<p>
  The posts will show from oldest to newest and have a summary of 100 characters. Each post will also have a hyperlink which will take the them directly to that post.
</p>

<p>
  <img src="public/images/homepage-post-preview.png">
</p>

<p>
  <img src="public/images/composed-post-page.png">
</p>

---

<h2>Compose Post<h2>

<p>
  To compose a new daily blog post navigate to the compose messsage page at "http://localhost:3000/compose" url or click "COMPOSE" option in the navigation bar. This will then take you to the compose page where you can select a title and message for your post.
</p>

<p>
  <img src="public/images/compose-post.png">
</p>

---

<h2>About Page<h2>

<p>
  There is an about page which can be accessed by going to "http://localhost:3000/about" or clicking the "ABOUT US" link in nav bar. Here you can update more info about you or your blog.
</p>

<p>
  <img src="public/images/about-page.png">
</p>

---

<h2>Contact Page<h2>

<p>
  There is a contact page which can be accessed by going to "http://localhost:3000/constact" or clicking the "CONTACT US" link in nav bar. Here you can provide the best method for you to be contacted.
</p>

<p>
  <img src="public/images/contact-page.png">
</p>

---

<h2>Header Nav Bar<h2>

<p>
  The header nav bar for daily journal has options to go to "HOME", "COMPOSE", "ABOUT US", "CONTACT US". When hovering over the options it will change color.
</p>

<p>
  <img src="public/images/daily-journal-nav-bar.png">
</p>

---

<h2>Footer Bar<h2>

<p>
  The footer bar changes up the color slightly and can be adjusted to whatever you like.
</p>

<p>
  <img src="public/images/footer-bar.png">
</p>

---

<h3>.env</h3>

<p>
  You will notice the .env_sample file. This is an example file used to store your personal MongoDB Atlas user and cluster info. You will need to create your own .env file with this info provided.
</p>
