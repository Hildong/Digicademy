const mongoDBConnections = require("./MongoDB.js").connections;
const mongooseSchemas = require('./MongoDB.js').schemas;
const JWT = require("jsonwebtoken")
const mongoose = require("mongoose");

const customerModel = mongoDBConnections.UsersDBConnection.model("Customers", mongooseSchemas.signUpSchema);

async function customerExists(email) {
    const data = await customerModel.findOne({email})
    return !!data; //If null, return false, otherwise return true
}

async function loginUser(email, pwd, res) {
    const data = await customerModel.findOne({email})
    if(!data) return {exists: false}

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

        await customerModel.updateOne({email}, { $set: {"refreshToken": refreshToken}})
        return {exists: true, authenticated: true, accessToken}
    } 
    return {exists: false, authenticated: false};
}

module.exports = {customerExists, loginUser}