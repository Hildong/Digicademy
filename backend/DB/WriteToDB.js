const mongoDBConnections = require("./MongoDB.js").connections;
const mongooseSchemas = require('./MongoDB.js').schemas;
const mongoose = require("mongoose");
const ReadFromDB = require("../DB/ReadFromDB.js");


//Import models from MongoDB.js
const customerSignupModel = mongoDBConnections.UsersDBConnection.model("UserDB", mongooseSchemas.signUpSchema);

async function signup(email, password) {
    //let userSignedUp = false;
    let user = new customerSignupModel({
        _id: new mongoose.Types.ObjectId(),
        email: email,
        password: password,
        refreshToken: ""
    })

    //
    user.save().then((err, doc) => {
        //
        if(err) return console.log(err);
        console.log("User successfully created")
    })

}

module.exports = { signup }