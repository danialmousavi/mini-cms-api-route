import { isValidObjectId } from "mongoose";
import teacherModel from "@/models/teacher";
const handler =async (req, res) => {
    if(req.method=="DELETE"){
        const { id } = req.query;
        if(isValidObjectId(id)){
            try {
                await teacherModel.findOneAndDelete({_id:id});
                return res.status(200).json({message:"teacher deleted successfully"});
            } catch (error) {
                return  res.status(500).json({message:"500 internal server Error"});
            }
        }else{
            return res.status(404).json({message:"teacher id is not valid"})
        }
    }else if(req.method=="PUT"||req.method=="PATCH"){
        const {id}=req.query;
        const {name}=req.body;
        if(isValidObjectId(id)){
            try {
             await teacherModel.findOneAndUpdate({_id:id},{name});
             return res.status(200).json({message:"teacher updated successfully"})   
            } catch (error) {
                return  res.status(500).json({message:"500 internal server Error"}); 
            }
        }else{
            return res.status(404).json({message:"teacher id is not valid"})
        }
    }
};
export default handler;
