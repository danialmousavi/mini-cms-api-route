import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCashRegister, faFile, faTag, faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/Modal.module.css";
import { useState } from "react";
import Swal from "sweetalert2";

const AddCourseModal = ({ hideAddCourseModal ,handleGetCourses}) => {
    const [title,setTitle]=useState("");
    const [teacher,setTeacher]=useState("");
    const [price,setPrice]=useState("");
    const handleCreateCourse=async(e)=>{
        e.preventDefault();
        const newCourse={
            title,
            teacher,
            price
        }
        const res=await fetch("/api/courses",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newCourse)
        })
        if(res.status==201){
            handleGetCourses()
            setTitle("");
            setTeacher("");
            setPrice("");
            Swal.fire({
                title:"دوره با موفقیت ایجاد شد",
                icon:"success"
            }).then(()=>{
                hideAddCourseModal();                
            })
        }else{
            Swal.fire({
                title:"مشکلی پیش آمده است",
                icon:"error"
            }).then(()=>{
                hideAddCourseModal();                
            })            
        }      
    }
    return (
        <div className={styles.modal_container} id="add-new-course-modal">
            <div className={styles.modal_bg} onClick={hideAddCourseModal}></div>
            <div className={styles.modal_content}>

                <h1 className={styles.modal_title}>اضافه کردن دوره جدید</h1>
                <form action="#" className={styles.edit_user_form}>
                    <div className={styles.input_field}>
                        <span><FontAwesomeIcon icon={faTag} /></span>
                        <input
                            type="text"
                            placeholder="نام دوره"
                            spellCheck="false"
                            value={title}
                            onChange={(e)=>setTitle(e.target.value)}
                        />
                    </div>
                    <div className={styles.input_field}>
                        <span><FontAwesomeIcon icon={faCashRegister} /> </span>
                        <input
                            type="text"
                            placeholder="قیمت دوره"
                            spellCheck="false"
                            value={price}
                            onChange={(e)=>setPrice(e.target.value)}                            
                        />
                    </div>
                    <div className={styles.input_field}>
                        <span><FontAwesomeIcon icon={faUser} /></span>
                        <input
                            type="text"
                            placeholder="مدرس دوره"
                            spellCheck="false"
                            value={teacher}
                            onChange={(e)=>setTeacher(e.target.value)}                            
                        />
                    </div>

                    <button type="submit" className={styles.update_btn} onClick={handleCreateCourse}>
                        ایجاد دوره
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddCourseModal
