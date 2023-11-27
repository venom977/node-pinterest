const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/node-pinterest");
mongoose.connect("mongodb+srv://amitjangirr977:Amit%407976@amitcluster.acbb5gj.mongodb.net/node-pinterest");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Posts'
  }],
  dp: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  fullname: {
    type: String,
    required: true,
  }
})
userSchema.plugin(plm);

module.exports = mongoose.model("Users", userSchema);
