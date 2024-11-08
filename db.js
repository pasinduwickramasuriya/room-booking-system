// const mongoose = require("mongoose");

// var mongoURl = 'mongodb+srv://pasindu:mynameispasindu@cluster0.yzlk1.mongodb.net/Rooms'

// mongoose.connect(mongoURl, { useUnifiedTopology: true, useNewUrlParser: true })


// var connection = mongoose.connection

// connection.on('error', () => {
//     console.log('Mongo DB Connection failed')
// })

// connection.on('connected', () => {
//     console.log('Mongo DB Connection successful')
// })

// module.exports = mongoose


const mongoose = require("mongoose");

const mongoURL = 'mongodb+srv://pasindu:mynameispasindu@cluster0.yzlk1.mongodb.net/Rooms?retryWrites=true&w=majority';

mongoose.connect(mongoURL);

const connection = mongoose.connection;

connection.on('error', () => {
    console.log('MongoDB Connection failed');
});

connection.on('connected', () => {
    console.log('MongoDB Connection successful');
});

module.exports = mongoose;
