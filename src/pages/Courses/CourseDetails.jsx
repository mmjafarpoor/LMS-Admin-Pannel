import React from "react";
import { Outlet, useParams } from "react-router-dom";
import CourseView from "../../components/CoursesManagement/CourseDetails/view";

const CourseDetails = () => {

  const { CourseId } = useParams()

  return (
    <>
      <CourseView CourseId={CourseId}/>
    </>
  );
};

export default CourseDetails;