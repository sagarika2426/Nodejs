const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    full_name: {type: String, required: true},
    age: {type: Number, required: true},
    gender: {
        type: String, 
        required: true,
        enum:["Male", "Female"]
        },
    balance: {type: String, required: false},
    native: {type: String, required: true},
    reloacte_to: {type: String, required: true},
    family_members: {type: Number, required: false}
 
 })

 //to use schema we need Model
const TestUser = mongoose.model("testuser", userSchema)

module.exports = TestUser;