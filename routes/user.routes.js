const express = require("express");
const route = express.Router();
const User = require("../controller/user.controller");
// const userauth = require("../controllers/verifytoken.control");
// const { uploadS3 } = require("../controllers/fileupload.control");

// user route
// route.get("/getseraching", User.getSerachData);

// route.get("/auth", userauth, User.auth);
route.get("/:id", User.getUserDetails);
route.get("/", User.getAllUser);
route.post("/add", User.addUser);
// route.post("/login", User.logindata);
route.put("/:id", User.updateUser);
route.delete("/:id", User.deleteUser);
// route.post("/change-password", userauth, User.changepassword);
// route.post("/forget-password", User.forgetpassword);
// route.post("/Reset-password", User.resetpassword);
// route.post("/logout", userauth, User.logout);

module.exports = route;
