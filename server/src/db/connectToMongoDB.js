const mongoose = require('mongoose') 

function connectToMongoDB() {
    mongoose.connect(process.env.MONGO_URL)
}

module.exports = connectToMongoDB