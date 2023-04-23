const express = require("express");
const cors = require('cors')
const bodyParser = require("body-parser")
const app = express();
const path = require("path");
require('dotenv').config()

const PORT = process.env.PORT || 8080;


//Cors to allow frontend API
app.use(cors()) 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Import routes from routes folder and file
require("./API/post.js")(app, bodyParser);

app.get("/", (req, res) => {
    res.send("Hello world");
})

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));