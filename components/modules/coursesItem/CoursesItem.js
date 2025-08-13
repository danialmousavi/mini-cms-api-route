import DeleteModal from "@/components/templates/index/DeleteModal";
import EditModal from "@/components/templates/index/EditModal";
import { useState } from "react";
import styles from "@/styles/Course.module.css";
import Swal from "sweetalert2";
const CoursesItem = ({ title, price,_id,teacher,handleGetCourses }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const hideEditModal = () => setShowEditModal(false);
  const hideDeleteModal = () => setShowDeleteModal(false);
  //delete course 
  const handleDeleteCourse=async(e)=>{
    e.preventDefault();
    const res =await fetch(`/api/courses/${_id}`,{
      method:"DELETE",
      headers:{
        "Content-Type":"application/json"
      }
    })
    if(res.status==200){
      Swal.fire({
        title:"دوره با موفقیت حذف شد",
        icon:"success"
      })
      handleGetCourses();
    }else{
      Swal.fire({
        title:"متاسفیم مشکلی پیش آمده است",
        icon:"error"
      })      
    }
    setShowDeleteModal(false);
  }

  return (
    <>
      <li className={styles.courses_item}>
        <div className={styles.courses_img_title}>
          <img
            src={'/images/courses/js.png'}
            alt="course-item-img"
            className={styles.courses_img}
          />
          <h5 className={styles.courses_name}>{title}</h5>
        </div>
        <div className={styles.courses_btns}>
                    <a
            href="#"
            className={styles.courses_btn_price}
          >
            {price}$
          </a>
          <a
            href="#"
            className={styles.courses_btn_edit}
            onClick={() => setShowEditModal(true)}
          >
            {" "}
            ویرایش{" "}
          </a>
          <a
            href="#"
            className={styles.courses_btn_delete}
            onClick={() => setShowDeleteModal(true)}
          >
            {" "}
            حذف{" "}
          </a>
        </div>
      </li>
      {showEditModal && <EditModal hideEditModal={hideEditModal} title={title} price={price} teacher={teacher} id={_id} handleGetCourses={handleGetCourses}/> }
      {showDeleteModal && <DeleteModal handleDeleteCourse={handleDeleteCourse} hideDeleteModal={hideDeleteModal} />}
    </>
  );
};

export default CoursesItem;
