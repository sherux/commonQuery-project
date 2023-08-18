const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new mongoose.Schema(
  {
    course_name: {
      type: String,
      required: true,
    },
    course_description: {
      type: String,
      required: true,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", courseSchema);
