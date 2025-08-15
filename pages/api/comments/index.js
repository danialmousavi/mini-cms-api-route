import commentModel from "@/models/comment";
import connectDB from "@/utils/db";
const handler = async (req, res) => {
  connectDB();
  if(req.method=="GET"){
          const comments=await commentModel.find({}).populate("course")
          if(comments){
            return res.status(200).json(comments)
          }
  }
  else if (req.method == "POST") {
    try {
      const {body,course} = req.body;
      if (body.trim() == "" || body.trim().length < 3) {
        return res.status(402).json({ message: "invalid value" });
      }
      const data = await commentModel.create({body,course});
      if (data) {
        return res.status(201).json({ message: "course created succesfully" });
      } else {
        return res.status(409).json({ message: "unknown error" });
      }
    } catch (error) {
        return res.status(500).json({message:"server Error !"})
    }
  }
};
export default handler;
