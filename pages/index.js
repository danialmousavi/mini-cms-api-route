import Course from "@/components/templates/index/Course";
import courseModel from "@/models/course";
import connectDB from "@/utils/db";

const index = () => {
  return <Course />;
};

export default index;

export async function getStaticProps() {
  connectDB();
  const data =courseModel.find({});
  console.log(data);
  
  return{
    props:{
      
    }
  }
}