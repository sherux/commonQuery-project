const USER = require("../models/user.model");
const bcrypt = require("bcryptjs");
const commonQuerys = require("../controller/commonQuery.controller");

// call commonQuery
const commonQuery = new commonQuerys(USER);

const getAllUser = async (req, res) => {
  try {
    const userData = await commonQuery.getAllData();

    res.status(200).json({ message: "Data Fetch succesfully", data: userData });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getUserDetails = async (req, res) => {
  try {
    const userData = await commonQuery.getData(req.params.id);

    res.status(200).json({ message: "Data Fetch succesfully", data: userData });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const addUser = async (req, res) => {
  try {
    const emailexist = await USER.findOne({ user_email: req.body.userEmail });
    if (emailexist)
      return res.status(400).json({ message: "email alredy exists" });

    // hashpassword
    const hashpassword = await bcrypt.hash(req.body.userPassword, 12);

    const users = await commonQuery.create({
      user_name: req.body.userName,
      user_email: req.body.userEmail,
      user_password: hashpassword,
      user_mobile: req.body.userMobile,
      user_gender: req.body.userGender,
    });

    const userData = await users.save();
    res
      .status(200)
      .json({ message: "user create succesfully", data: userData });
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

const updateUser = async (req, res) => {
  try {
    const checkUser = await commonQuery.getData(req.params.id);
    if (!checkUser) return res.status(200).json({ message: "user not found" });

    const users = await commonQuery.updatedData(req.params.id, {
      user_mobile: req.body.userMobile,
    });

    const userData = await users.save();
    res
      .status(200)
      .json({ message: "user create succesfully", data: userData });
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

const deleteUser = async (req, res) => {
  try {
    const checkUser = await commonQuery.getData(req.params.id);
    if (!checkUser) return res.status(200).json({ message: "user not found" });
    const userData = await commonQuery.deletedData(req.params.id);

    res.status(200).json({ message: "Data Deleted succesfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  addUser,
  getAllUser,
  getUserDetails,
  deleteUser,
  updateUser,
};
