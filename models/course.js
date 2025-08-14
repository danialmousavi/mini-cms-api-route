const { default: mongoose } = require("mongoose");
const  teacherModel= require("./teacher")
const schema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  teacher: {
      type: mongoose.Types.ObjectId, // اصلاح Schema.Types
      ref: 'Teacher',                       // اشاره به مدل Teacher
      required: true
  },
  price: {
    type: Number,
    // requierd: true,
    default:0,
    min:0
  },
},{
  timestamps:true
});

const courseModel = mongoose.models.Course || mongoose.model("Course", schema);
export default courseModel;
