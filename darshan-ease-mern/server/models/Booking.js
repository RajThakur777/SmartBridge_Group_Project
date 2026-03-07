const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  temple: String,
  date: String,
  slot: String
});

module.exports = mongoose.model("Booking",bookingSchema);

// const mongoose = require("mongoose");

// const bookingSchema = new mongoose.Schema({

//   temple:{
//     type:String,
//     required:true
//   },

//   slot:{
//     type:String,
//     required:true
//   },

//   userEmail:{
//     type:String,
//     required:true
//   },

//   bookingDate:{
//     type:Date,
//     default:Date.now
//   }

// });

// module.exports = mongoose.model("Booking", bookingSchema);