const mongoDBConnections = require("./MongoDB.js").connections;
const mongooseSchemas = require('./MongoDB.js').schemas;
const mongoose = require("mongoose");

const customerModel = mongoDBConnections.UsersDBConnection.model("Customers", mongooseSchemas.signUpSchema);

async function customerExists(email) {
    const user = customerModel.findOne({ email });
    console.log(!!user)
    if(user) console.log("hello")
    console.log(email)
    return !!user; // returns true if user exists, false otherwise
}

module.exports = {customerExists}