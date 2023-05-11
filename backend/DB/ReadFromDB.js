const mongoDBConnections = require("./MongoDB.js").connections;
const mongooseSchemas = require('./MongoDB.js').schemas;
const JWT = require("jsonwebtoken")
const mongoose = require("mongoose");

const customerModel = mongoDBConnections.UsersDBConnection.model("Customers", mongooseSchemas.signUpSchema);

async function customerExists(email) {
    const data = await customerModel.findOne({email})
    return !!data; //If null, return false, otherwise return true
}

async function loginUser(email, pwd) {
    const data = await customerModel.findOne({email})

    if(data.password === pwd) {
        // Send JWT access token
        const accessToken = await JWT.sign(
            { email },
            process.env.ACCESS_TOKEN_SECRET,
            {
            expiresIn: "10s",
            }
        );

        // Refresh token
        const refreshToken = await JWT.sign(
            { email },
            process.env.REFRESH_TOKEN_SECRET,
            {
            expiresIn: "1m",
            }
        );
            console.log(refreshToken)
        await customerModel.updateOne({email}, { $set: {"refreshToken": refreshToken}})
        return true
    } 
    return false;
}

module.exports = {customerExists, loginUser}