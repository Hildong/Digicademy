const WriteToDB = require("../DB/WriteToDB.js");
const ReadFromDB = require("../DB/ReadFromDB.js");
const validateToken = require('../Authentication/Auth.js');

module.exports = app => {

    app.get("/validateJWT", async (req, res) => {
        res.json({authorized: validateToken(req)});
    })
    
    
}