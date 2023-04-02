const express = require("express");
const {
  getPosts,
  deleteData,
  updateData,
  addPost,
  getPostsAdmin,
} = require("../controller/order.controller");
const order = express.Router();

const { verifyUser } = require("../middleware/posts.middleware");
// {addPost,getPosts,  getTopData, updateData, deleteData}

order.use(verifyUser);

order.post("/add", addPost);

order.get("/", getPosts);

order.get("/admin", getPostsAdmin);

// order.get('/top', getTopData )

order.patch("/update/:_id", updateData);

order.delete("/delete/:_id", deleteData);

module.exports = { order };
