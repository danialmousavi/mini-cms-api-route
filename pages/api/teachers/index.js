import connectDB from "@/utils/db";
import teacherModel from "@/models/teacher";
const handler = async (req, res) => {
  connectDB();
  if(req.method=="GET"){
          const teachers=await teacherModel.find()
          if(teachers){
            return res.status(200).json(teachers)
          }
  }
  else if (req.method == "POST") {
    try {
      const {name} = req.body;
      if (name.trim() == "" || name.trim().length < 3) {
        return res.status(402).json({ message: "invalid value" });
      }
      const data = await teacherModel.create({name});
      if (data) {
        return res.status(201).json({ message: "teacher created succesfully" });
      } else {
        return res.status(409).json({ message: "unknown error" });
      }
    } catch (error) {
        return res.status(500).json({message:"server Error !"})
    }
  }
};
export default handler;
