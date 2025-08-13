import Courses from '@/components/templates/search/Courses'
import courseModel from '@/models/course'
import connectDB from '@/utils/db'
import React from 'react'

export default function index({courses}) {
  return (
    <Courses courses={courses}/>
    )
}
export async function getServerSideProps(context) {
    connectDB()
    const {query}=context;
    const courses=await courseModel.find({title:{$regex:query.q}}); 
    return{
        props:{
            courses:JSON.parse(JSON.stringify(courses))
        }
    }
}