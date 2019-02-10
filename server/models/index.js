require('dotenv').config();
const mongoose = require("mongoose");

mongoose.set('debug', true);
mongoose.Promise = global.Promise;
mongoose
.connect(process.env.DATABASE,{ useNewUrlParser: true })
.then(() =>console.log("mongoDB conttected!"))
.catch(err =>console.log(err));

 //module.exports.User = require("./users");
// module.exports.Polls = require("./polls");