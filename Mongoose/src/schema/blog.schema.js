const { default: mongoose } = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    author:{
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }
},

 {
    versionKey: false
 }
)

 //to use schema we need Model
const Blog = mongoose.model("blog", blogSchema)

module.exports = Blog;