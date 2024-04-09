const mongoose = require('mongoose');


const connectDB =  async (db) => { 
   mongoose.connect(db).then(() => console.log("Connected to the db")).catch((e) => console.log(e));
}


module.exports = {connectDB}

