const { default: mongoose } = require("mongoose");
const  teacherModel= require("./teacher");
import commentModel from "./comment";
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
schema.virtual("comments",{
  ref:"Comment",
  localField:"_id",
  foreignField:"course"
})
schema.set("toJSON", { virtuals: true });
schema.set("toObject", { virtuals: true });
const courseModel = mongoose.models.Course || mongoose.model("Course", schema);
export default courseModel;
