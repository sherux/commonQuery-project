const COURSE = require("../models/course.model");
const commonQuerys = require("../controller/commonQuery.controller");

const commonQuery = new commonQuerys(COURSE);

const getAllCourse = async (req, res) => {
  try {
    const courseData = await commonQuery.getAllData();

    res
      .status(200)
      .json({ message: "Data Fetch succesfully", data: courseData });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getCourseDetails = async (req, res) => {
  try {
    const courseData = await commonQuery.getData(req.params.id);

    res
      .status(200)
      .json({ message: "Data Fetch succesfully", data: courseData });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
const addCourse = async (req, res) => {
  try {
    const courseExist = await COURSE.findOne({
      course_name: req.body.courseName,
    });
    if (courseExist)
      return res.status(400).json({ message: "Course Name already exists" });

    const course = await commonQuery.create({
      course_name: req.body.courseName,
      course_description: req.body.courseDescription, // Fixed typo here
      user_id: req.body.userId,
    });
    res
      .status(200)
      .json({ message: "course created successfully", data: course });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateCourse = async (req, res) => {
  try {
    const course = await commonQuery.updatedData(req.params.id, {
      course_name: req.body.courseName,
      course_description: req.body.courseDescription,
    });

    const courseData = await course.save();
    res
      .status(200)
      .json({ message: "course update succesfully", data: courseData });
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

const deleteCourse = async (req, res) => {
  try {
    const course = await commonQuery.deletedData(req.params.id);

    res.status(200).json({ message: "Data Deleted succesfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
module.exports = {
  getAllCourse,
  getCourseDetails,
  addCourse,
  updateCourse,
  deleteCourse,
};
