import Courses from "@/components/templates/index/Course";
import courseModel from "@/models/course";
import connectDB from "@/utils/db";

const index = ({courses}) => {
  return <Courses  courses={courses}/>;
};

export default index;

export async function getStaticProps() {
  connectDB();
  const data =await courseModel.find({});
  
  return{
    props:{
      courses:JSON.parse(JSON.stringify(data))
    },
    revalidate:60
  }
}