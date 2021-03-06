//setup mongoose
const mongoose = require('mongoose');
const connectionString = "mongodb://localhost:27017/gameplayer"


module.exports = function () {
  mongoose.connect(connectionString, {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:false
    }, (err) => {
        if(err) {
            console.log(err);
        } else {
            console.log("database connection sucessful");
        }
    })
}

