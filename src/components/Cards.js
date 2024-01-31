import React, { useState } from 'react';
import Card from "./Card";

 const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;

    const [likedCourses, setLikedCourses] = useState([]);
    

    //returns us a list of all courses received from the api response

     const getCourses = () => {
      if(category == "All"){
        let allCourses = [];
        Object.values(courses).forEach( (courseCategory) => {
            courseCategory.forEach( (course) => {
                allCourses.push(course);
            })
        })
        return allCourses;
      }
      else{
        //passing only specific category array
        return courses[category];
      }
      
     }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4 ">{
        getCourses().map( (course) => {
        return <Card key = {course.id} course = {course} likedCourses = {likedCourses} setLikedCourses = {setLikedCourses}/>
       })
    }
       
    </div>
  )
}


export default Cards