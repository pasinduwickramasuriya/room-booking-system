// const express = require("express");
// const router = express.Router();
// const Booking = require("../models/booking");

// router.post("/bookroom", async (req, res) => {
//   const { room, userid, fromdate, todate, totalamout, totaldays } = req.body;

//   try {
//     const newbooking = new Booking({
//       room: room.name,
//       roomid: room._id,
//       userid,
//       fromdate,
//       todate,
//       totalamout,
//       totaldays,
//       transactionId: "1234",
//     });

//     const booking = await newbooking.save();
//   } catch (error) { }
// });

// module.exports = router;


const express = require("express");
const router = express.Router();
const Booking = require("../models/booking");
const Room = require("../models/room")
const moment = require("moment")

router.post("/bookroom", async (req, res) => {
  const { room, userid, fromdate, todate, totalamount, totaldays } = req.body;

  try {
    const newbooking = new Booking({
      room: room.name,
      roomid: room._id,
      userid,
      fromdate: moment(fromdate).format('DD-MM-YYYY'),
      todate: moment(todate).format('DD-MM-YYYY'),
      totalamount,  // Corrected typo
      totaldays,
      transactionId: "1234",
    });

    const booking = await newbooking.save();

    const roomtemp = await Room.findOne({ _id: room._id })

    roomtemp.currentbookings.push({
      bookingid: booking._id,
      fromdate: moment(fromdate).format('DD-MM-YYYY'),
      todate: moment(todate).format('DD-MM-YYYY'),
      userid: userid,
      status: booking.status
    })
    await roomtemp.save()
    res.send('Room Booked Successfully')
  } catch (error) {
    //   console.error("Error booking room:", error);
    //   res.status(500).json({ message: "Booking failed", error });
    return res.status(400).json({ error });
  }
});

module.exports = router;

