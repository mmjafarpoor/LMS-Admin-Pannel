import apiClient from "../interceptor/interceptor";

export const getCourses = ({ pageNumber, rowOfPage, techCount=0 } = {}) => {
    return apiClient.get("/Home/GetCoursesWithPagination", {
        params: {
            PageNumber: pageNumber,
            RowsOfPage: rowOfPage,
            SortingCol: "Active",
            SortType: "DESC",
            TechCount: techCount,
        }
    });
};

export const getTechnologies = () => {
    return apiClient.get("/Home/GetTechnologies");
};

export const createTechnology = (data) => {
    return apiClient.post("/Technology", data);
};

export const getStatus = () => {
    return apiClient.get("/Status");
};

export const createStatus = (data) => {
    return apiClient.post("/Status", data);
};

export const getLevels = () => {
    return apiClient.get("/CourseLevel/GetAllCourseLevel");
};

export const createLevel = (data) => {
    return apiClient.post("/CourseLevel", data);
};

export const getClasses = () => {
    return apiClient.get("/ClassRoom");
};

export const getTerms = () => {
    return apiClient.get("/Term");
};

export const createTerm = (data) => {
    return apiClient.post("/Term", data);
};

export const getCourseDetails = (CourseId) => {
    return apiClient.get(`Course/${CourseId}`);
};

export const getCreateCourse = () => {
    return apiClient.get("Course/GetCreate");
};

export const createCourse = (data) => {
    return apiClient.post("Course", data);
};

export const activeCourseById = (courseId, active) => {
    console.log(active)
    return apiClient.put("Course/ActiveAndDeactiveCourse", {
       id: courseId,
       active: active, 
    });
};

export const deleteCourseById = (courseId) => {
    return apiClient.delete("Course/DeleteCourse", {
        data: {
            id: courseId,
            active: false,
        },
    })
}

