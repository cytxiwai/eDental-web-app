const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);

const connection = mongoose.connection;

connection.on("connected", () => {
    console.log("MongoDB connection is successful");
});

connection.on("error", (error) => {
    console.log("Error in MongoDB connection", error);
});

module.exports = mongoose;
/*const mongoose = require('mongoose');

const connect = mongoose.connect(process.env.MONGO_URL)

const connection = mongoose.connection;


//test connection status
connection.on('connected', () => {
    console.log('MongoDB is connected');
})

connection.on('error', (error) => {
    console.log(error);
});

module.exports = mongoose;*/