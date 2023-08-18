const express = require("express");
const route = express.Router();
const Course = require("../controller/course.controller");

// user route
// route.get("/getseraching", User.getSerachData);

// route.get("/auth", userauth, User.auth);
route.get("/", Course.getAllCourse);
route.get("/:id", Course.getCourseDetails);
route.post("/add", Course.addCourse);
// route.post("/login", User.logindata);
route.put("/:id", Course.updateCourse);
route.delete("/:id", Course.deleteCourse);
// route.post("/change-password", userauth, User.changepassword);
// route.post("/forget-password", User.forgetpassword);
// route.post("/Reset-password", User.resetpassword);
// route.post("/logout", userauth, User.logout);

module.exports = route;
