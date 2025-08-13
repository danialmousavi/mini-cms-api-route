import courseModel from "@/models/course";
import { isValidObjectId } from "mongoose";

const handler =async (req, res) => {
    if(req.method=="DELETE"){
        const { id } = req.query;
        if(isValidObjectId(id)){
            try {
                await courseModel.findOneAndDelete({_id:id});
                return res.status(200).json({message:"course deleted successfully"});
            } catch (error) {
                return  res.status(500).json({message:"500 internal server Error"});
            }
        }else{
            return res.status(404).json({message:"course id is not valid"})
        }
    }else if(req.method=="PUT"||req.method=="PATCH"){
        const {id}=req.query;
        const {title,price,teacher}=req.body;
        if(isValidObjectId(id)){
            try {
             await courseModel.findOneAndUpdate({_id:id},{title,teacher,price});
             return res.status(200).json({message:"course updated successfully"})   
            } catch (error) {
                return  res.status(500).json({message:"500 internal server Error"}); 
            }
        }else{
            return res.status(404).json({message:"course id is not valid"})
        }
    }
};
export default handler;
