// components/templates/search/Courses.js
"use client"; // چون از state و fetch استفاده می‌کنیم
import CoursesItem from "@/components/modules/coursesItem/CoursesItem";
import styles from "@/styles/Course.module.css";
import { useRouter } from "next/router";
import { useState } from "react";

const Courses = ({ courses }) => {
  const [data, setData] = useState(courses);
  const router = useRouter();
  const { q } = router.query;

  const handleGetCourses = async () => {
    const res = await fetch(`/api/courses?q=${q}`);
    const updated = await res.json();
    setData(updated);
  };
  return (
    <section className={styles.courses}>
      <div className={styles.courses_top}>
        <h2 className={styles.courses_title}>نتیجه جستجو دوره ها</h2>
      </div>
      <ul className={styles.courses_list}>
        {data.map((item) => (
          <CoursesItem
            key={item._id}
            {...item}
            handleGetCourses={handleGetCourses}
          />
        ))}
      </ul>
    </section>
  );
};

export default Courses;
