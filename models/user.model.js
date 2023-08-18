const mongoose = require("mongoose");

const userschema = new mongoose.Schema(
  {
    user_name: {
      type: String,
      required: true,
    },
    user_email: {
      type: String,
      required: true,
    },
    user_password: {
      type: String,
      required: true,
    },
    user_mobile: {
      type: String,
      required: true,
    },
    user_gender: {
      type: String,
      enum: {
        values: ["male", "female"],
        message: "choose one options",
      },
    },

    token: {
      type: String,
      default: " ",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userschema);
