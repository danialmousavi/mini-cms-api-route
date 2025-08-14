const { default: mongoose } = require("mongoose");

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
},{
  timestamps:true
});

const teacherModel = mongoose.models.Teacher || mongoose.model("Teacher", schema);
export default teacherModel;
