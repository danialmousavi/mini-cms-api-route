const { default: mongoose } = require("mongoose");

const schema = mongoose.Schema({
  title: {
    type: String,
    requierd: true,
  },
  teacher: {
    type: String,
    requierd: true,
  },
  price: {
    type: String,
    requierd: true,
  },
});

const courseModel = mongoose.models.Course || mongoose.model("Course", schema);
export default courseModel;
