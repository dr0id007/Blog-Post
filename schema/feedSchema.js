const mongoose = require("mongoose");

const feedSchema = new mongoose.Schema(
  {
    url: String,
    caption: String,
    desc: String,
    likes: Number,
    dislikes: Number
  },
  { versionKey: false }
);

const model = mongoose.model("post", feedSchema);

module.exports = model;
