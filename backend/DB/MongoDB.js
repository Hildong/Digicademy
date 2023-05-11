const mongoose = require("mongoose");

const mongoDBURI = `mongodb+srv://admin:${process.env.MONGODB_ATLAS_ADMIN_PASSWORD}@cluster0.clwophd.mongodb.net/`
const UsersDBURI = mongoDBURI + 'UsersDB?retryWrites=true&w=majority'

const connectivityOptions = { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
};

const UsersDBConnection = mongoose.createConnection(UsersDBURI, connectivityOptions);

const signUpSchema = mongoose.Schema({
    _id: {type: mongoose.Types.ObjectId, auto: true},
    email: String,
    password: String,
    refreshToken: String
}, {collection: 'Customers'})

module.exports.schemas = {signUpSchema}
module.exports.connections = { UsersDBConnection }