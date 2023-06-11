const mongoose = require("mongoose");

const connection = mongoose.connect(
  "mongodb+srv://dwipayan:dwipayan@cluster0.k1vgwtf.mongodb.net/deployData"
);

module.exports = { connection };
