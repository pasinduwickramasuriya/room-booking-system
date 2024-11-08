// const express = require("express")
// const router = express.Router()

// const Room = require('../models/room')

// router.get("/getallrooms", async (req, res) => {

//     try {

//         const rooms = await Room.find({})
//         res.send(rooms)
//         return res.json({ rooms })

//     } catch (error) {

//         return res.status(400).json({ message: error })

//     }

// })

// module.exports = router;

const express = require("express");
const router = express.Router();
const Room = require("../models/room"); // Assuming Room is your MongoDB model

router.get("/getallrooms", async (req, res) => {
  try {
    const rooms = await Room.find(); // Fetch data from MongoDB
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch rooms", error });
  }
});

router.post("/getroombyid", async (req, res) => {
  const roomid = req.body.roomid;

  try {
    const room = await Room.findOne({ _id: roomid }); // Fetch data from MongoDB
    res.json(room);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch rooms", error });
  }
});

module.exports = router;
