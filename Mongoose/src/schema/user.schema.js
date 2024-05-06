const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    full_name: {type: String, required: true},
    age: {type: Number, required: true},
    gender: {
        type: String, 
        required: true,
        enum:["Male", "Female"]
        }
 
 },

 {
    versionKey: false
 }
)

 //to use schema we need Model
const TestUser = mongoose.model("users", userSchema)

module.exports = TestUser;