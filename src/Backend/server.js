// const port = 5000;
// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
// const multer = require("multer");
// const path = require("path");
// const cors = require("cors");

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB connection
// mongoose.connect("mongodb+srv://hk0600961:9344774067hemanth@cluster0.sj7sx.mongodb.net/Intellisoft_Backend", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }); 


// // Define a route for the root URL
// app.get("/", (req, res) => {
//     res.send("Intellisoft is Running");
// });


// // Multer setup for file uploads
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/images'); // Specify the directory where files will be stored
//     },
//     filename: function (req, file, cb) {
//         // Generate a unique filename using the current timestamp and original file extension
//         cb(null, Date.now() + path.extname(file.originalname));
//     }
// });

// // Create the uploads/images directory if it doesn't exist
// const fs = require("fs");
// const dir = 'uploads/images';
// if (!fs.existsSync(dir)) {
//     fs.mkdirSync(dir, { recursive: true });
// }

// // Route to handle file uploads
// app.post("/upload", upload.single("file"), (req, res) => {
//     res.send("File uploaded successfully!");
// });

// // Start the server and listen on the specified port
// app.listen(port, (error) => {
//     if (!error) {
//         console.log("Server Running on Port " + port);
//     } else {
//         console.error("Error occurred: ", error);
//     }
// });

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Course = require('./models/Course');
const CourseCart = require('./models/CourseCart');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/courseDB', { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/add-to-cart', async (req, res) => {
  const { username, courseName } = req.body;

  try {
    const course = await Course.findOne({ courseName });
    if (!course) {
      return res.status(404).send('Course not found');
    }

    const courseCart = new CourseCart({ username, courseName });
    await courseCart.save();

    res.status(200).send('Course added to cart');
  } catch (error) {
    res.status(500).send('Error adding course to cart');
  }
});

app.get('/cart/:username', async (req, res) => {
  const { username } = req.params;

  try {
    const cartItems = await CourseCart.find({ username }).populate('courseName');
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).send('Error fetching cart items');
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
