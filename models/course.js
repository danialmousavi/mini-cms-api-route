const { default: mongoose } = require("mongoose");
const  teacherModel= require("./teacher")
import { schema as teacherSchema } from "./teacher";
const schema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  teacher: {
      type:teacherSchema,
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
