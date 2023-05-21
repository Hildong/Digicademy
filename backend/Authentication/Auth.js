const jwt = require("jsonwebtoken");
require("dotenv").config();

const authToken = (req) => {

  // Save httponly cookie to variable
  const token = req.cookies.auth
  // If token not found, send false
  if (!token) {
    return false
  }
  
  try {
    console.log(token)
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    return true;
  } catch(e) {
    console.log(e);
    return false;
  }
};

module.exports = authToken;