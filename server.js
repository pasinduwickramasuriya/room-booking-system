// const express = require("express");
// const { Server } = require("http");

// const app = express();

// const dbconfig = require('./db')
// const roomsRoute = require('./routes/roomsRoute')

// app.use('/api/rooms/', roomsRoute)

// const port = process.env.PORT || 5000;


// app.listen(port, () => console.log('node Server Startred pasindu wickramasuriya'))



const express = require("express");
const cors = require("cors"); // Import CORS to allow cross-origin requests

const app = express();

app.use(cors()); // Use CORS middleware
app.use(express.json()); // Parse JSON payloads

const dbconfig = require('./db'); // Ensure your database connection works
const roomsRoute = require('./routes/roomsRoute');
const usersRoute = require('./routes/usersRoute')
const bookingsRoute = require('./routes/bookingsRoute')

app.use(express.json())

app.use('/api/rooms/', roomsRoute);
app.use('/api/users', usersRoute);
app.use('/api/bookings', bookingsRoute)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Node Server Started on port ${port}`));
