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
    
    
}