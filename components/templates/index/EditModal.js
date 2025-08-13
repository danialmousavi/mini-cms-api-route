import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCashRegister, faTag, faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/Modal.module.css";
import { useState } from "react";
import Swal from "sweetalert2";

const EditModal = ({ hideEditModal ,title,price,teacher,id,handleGetCourses}) => {

    const [updateTitle,setUpdateTitle]=useState(title||"");
    const [updatePrice,setUpdatePrice]=useState(price||"");
    const [updateTeacher,setUpdateTeacher]=useState(teacher||"");
    const handleUpdateCourse=async(e)=>{
        e.preventDefault();
        const updatecourse={
            title:updateTitle,
            teacher:updateTeacher,
            price:updatePrice,
        }
        console.log(updatecourse);
        const res=await fetch(`/api/courses/${id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(updatecourse)
        })
        console.log(res);
        if(res.status==200){
            Swal.fire({
                title:"دوره با موفقیت ویرایش شد",
                icon:"success"
            })
            handleGetCourses()
        }else{
            Swal.fire({
                title:"متاسفیم مشکلی پیش آمده است",
                icon:"error"
            })
        }
        hideEditModal();
    }
    return (
        <div className={styles.modal_container} id="edit-modal">
            <div className={styles.modal_bg} onClick={hideEditModal}></div>
            <div className={styles.modal_content}>

                <h1 className={styles.modal_title}>اطلاعات جدید را وارد کنید</h1>
                <form action="#" className={styles.edit_user_form}>
                    <div className={styles.input_field}>
                        <span><FontAwesomeIcon icon={faTag} /></span>
                        <input
                            type="text" 
                            placeholder="نام دوره"
                            spellCheck="false"
                            value={updateTitle}
                            onChange={(e)=>setUpdateTitle(e.target.value)}
                        />
                    </div>
                    <div className={styles.input_field}>
                        <span><FontAwesomeIcon icon={faCashRegister} /> </span>
                        <input
                            type="text" 
                            placeholder="قیمت دوره"
                            spellCheck="false"
                            value={updatePrice}
                            onChange={(e)=>setUpdatePrice(e.target.value)}

                        />
                    </div>
                    <div className={styles.input_field}>
                        <span><FontAwesomeIcon icon={faUser} /></span>
                        <input
                            type="text" 
                            placeholder="مدرس دوره"
                            spellCheck="false"
                            value={updateTeacher}
                            onChange={(e)=>setUpdateTeacher(e.target.value)}

                        />
                    </div>

                    <button type="submit" className={styles.update_btn } onClick={handleUpdateCourse}>
                        اپدیت دوره
                    </button>
                </form>
            </div>
        </div>
    )
}

export default EditModal
