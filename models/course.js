const { default: mongoose } = require("mongoose");

const schema=mongoose.Schema({
    title:{
        type:String,
        requierd:true
    }
})

const courseModel=mongoose.models.Course||mongoose.model("Course",schema);
export default courseModel