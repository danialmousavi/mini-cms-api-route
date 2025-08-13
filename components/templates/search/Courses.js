import CoursesItem from "@/components/modules/coursesItem/CoursesItem";
import styles from "@/styles/Course.module.css";

const Courses = ({ courses }) => {
  console.log(courses);

  return (
    <>
      <section className={styles.courses}>
        <div className={styles.courses_top}>
          <h2 className={styles.courses_title}>نتیجه جستجو دوره ها</h2>
        </div>
        <ul className={styles.courses_list}>
          {courses.map((item) => (
            <CoursesItem key={item} {...item} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default Courses;
