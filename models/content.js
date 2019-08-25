const mongoose = require("mongoose");
const contentSchema = require("../shcemas/contents");

module.exports = mongoose.model("content", contentSchema);