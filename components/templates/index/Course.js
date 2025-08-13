import CoursesItem from "@/components/modules/coursesItem/CoursesItem";
import { useState } from "react";
import AddCourseModal from "./AddCourseModal";
import styles from "@/styles/Course.module.css";

const Courses = ({courses}) => {
  const [showAddCourseModal, setShowAddCourseModal] = useState(false);
  const [data,setData]=useState([...courses])
  const hideAddCourseModal = () => setShowAddCourseModal(false);

  //get courses
  const handleGetCourses=async()=>{
    const res=await fetch("/api/courses");
    const courseData=await res.json();
    if(res.status==200){
      setData(courseData);
    }
  }
  return (
    <>
      <section className={styles.courses}>
        <div className={styles.courses_top}>
          <h2 className={styles.courses_title}>دوره ها</h2>
          <a
            href="#"
            className={styles.new_course_btn}
            onClick={() => setShowAddCourseModal(true)}
          >
            اضافه کردن دوره جدید
          </a>
        </div>
        <ul className={styles.courses_list}>
          {data.map(item=>(
            <CoursesItem key={item._id} {...item} handleGetCourses={handleGetCourses} />
            
          ))}

        </ul>
      </section>

      {showAddCourseModal && (
        <AddCourseModal hideAddCourseModal={hideAddCourseModal}  handleGetCourses={handleGetCourses}/>
      )}
    </>
  );
};

export default Courses;
