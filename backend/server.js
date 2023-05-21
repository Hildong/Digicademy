const express = require("express");
const cors = require('cors')
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const app = express();
const path = require("path");
require('dotenv').config()

const PORT = process.env.PORT || 8080;


/* Middleware */

// Enable use of parsing cookies
app.use(cookieParser());

//Cors to allow frontend API
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
})) 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/* Middleware */

//Import routes from routes folder and file
require("./API/post.js")(app, bodyParser);

app.get("/", (req, res) => {
    res.send("Hello man")
})

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));