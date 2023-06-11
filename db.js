const mongoose = require("mongoose");

const connection = mongoose.connect(
  "mongodb+srv://dwipayan:barman@cluster0.m53osop.mongodb.net/deployData"
);

module.exports = { connection };
