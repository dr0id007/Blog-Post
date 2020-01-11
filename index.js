const express = require("express");
const mongoose = require("mongoose");
const parser = require("body-parser");
const cors = require("cors");
const Feed = require("./schema/feedSchema");
const PORT = process.env.PORT || 4000;
const path = require("path");
const app = express();
app.use(cors());
app.use(parser.json());

mongoose
  .connect(
    process.env.MONGODB_URI ||
      "mongodb://admin:admin123@ds155396.mlab.com:55396/reddit",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => {
    console.log("db connected...");
  })
  .catch(err => console.log("db error"));
mongoose.set("useFindAndModify", false);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build/"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.get("/feed", async (req, res) => {
  const feed = await Feed.find({}).then(async (err, data) => {
    if (err) return err;
    return data;
  });
  console.log(feed);
  return res.send(feed);
});

app.post("/add", (req, res) => {
  console.log("add called");
  if (req.body == null) {
    return res.send("no data provided..");
  }
  console.log(req.body);
  const data = new Feed({
    caption: req.body.caption,
    desc: req.body.desc,
    url: req.body.url,
    likes: req.body.likes,
    dislikes: req.body.dislikes
  });
  data
    .save()
    .then(val => {
      return res.send(val);
    })
    .catch(err => {
      return res.send(err);
    });
});

app.post("/edit", async (req, res) => {
  console.log("edit called");
  if (req.body == null) {
    return res.send("no data provided..");
  }
  console.log(req.body);

  const result = await Feed.findByIdAndUpdate(req.body.id, {
    $set: {
      caption: req.body.caption,
      desc: req.body.desc,
      url: req.body.url
    }
  })
    .then(res => {
      console.log("result:-", res);
      return res;
    })
    .catch(err => {
      console.log(err);
      return err;
    });
  return res.send(result);
});

app.post("/delete", async (req, res) => {
  console.log("delete called");
  if (req.body == null) {
    return res.send("no data provided..");
  }
  console.log(req.body);

  const result = await Feed.findByIdAndDelete(req.body.id)
    .then(res => {
      console.log("result:-", res);
      return res;
    })
    .catch(err => {
      console.log(err);
      return err;
    });
  return res.send(result);
});

app.get("/", (req, res) => {
  return res.send("hello world..");
});

app.listen(PORT);
