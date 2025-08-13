import courseModel from "@/models/course";
import connectDB from "@/utils/db";

const handler = async (req, res) => {
  connectDB();
  if(req.method=="GET"){
    const {q}=req.query;
    if(q){
      console.log("q",q);
      const courses=await courseModel.find({title:{$regex:q}});
          if(courses){
            return res.status(200).json(courses)
          }
    }else{
          const courses=await courseModel.find()
          if(courses){
            return res.status(200).json(courses)
          }
    }
  }
  else if (req.method == "POST") {
    try {
      const {title ,price,teacher} = req.body;
      if (title.trim() == "" || title.trim().length < 3||price== ""||teacher.trim() == "" || teacher.trim().length < 3) {
        return res.status(402).json({ message: "invalid value" });
      }
      const data = await courseModel.create({ title,teacher,price });
      if (data) {
        return res.status(201).json({ message: "user created succesfully" });
      } else {
        return res.status(409).json({ message: "unknown error" });
      }
    } catch (error) {
        return res.status(500).json({message:"server Error !"})
    }
  }
};
export default handler;
