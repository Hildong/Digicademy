const WriteToDB = require("../DB/WriteToDB.js");
const ReadFromDB = require("../DB/ReadFromDB.js");

module.exports = app => {

    app.post("/signup", async (req, res) => {
        if(await ReadFromDB.customerExists(req.body.email)) {
            res.json({exists: true});
        } else {
            WriteToDB.signup(req.body.email, req.body.password);
            res.json({exists: false});
        }
    })

    app.post("/login", async (req, res) => {
        const userLoginInfo = await ReadFromDB.loginUser(req.body.email, req.body.password);
        if(!userLoginInfo.exists) {
            res.status(400).send("Email doesn't exist") //HTTP 400 status for bad request
        } else if(!userLoginInfo.authenticated) {
            res.status(400).send("Login information not valid") //HTTP 400 status for bad request
        } else {
            res.cookie("auth", userLoginInfo.accessToken, {httpOnly: true})
            res.json({authenticated: userLoginInfo.authenticated, exists: userLoginInfo.exists})
        }
        
    })
    
    
}