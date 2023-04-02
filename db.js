const mongoose = require("mongoose");
require("dotenv").config();
const connection = mongoose.connect(process.env.mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  socketTimeoutMs: 30000, // set the buffer time to 30 sec
});

module.exports = { connection };
