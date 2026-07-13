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

export const getStatus = () => {
    return apiClient.get("/Status");
};

export const getLevels = () => {
    return apiClient.get("/CourseLevel/GetAllCourseLevel");
};

export const getClasses = () => {
    return apiClient.get("/ClassRoom");
};

export const getTerms = () => {
    return apiClient.get("/Term");
};