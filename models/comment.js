const { default: mongoose } = require("mongoose");
import courseModel from "./course";
export const schema = mongoose.Schema({
  body: {
    type: String,
    required: true,
  },
  course: {
    type: mongoose.Types.ObjectId,
    ref:"Course",
    required: true,
  },  
},{
  timestamps:true
});

const commentModel = mongoose.models.Comment || mongoose.model("Comment", schema);
export default commentModel;
