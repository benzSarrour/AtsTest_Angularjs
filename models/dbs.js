var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/mean');
mongoose.Promise=global.Promise;
console.log("connected to db");