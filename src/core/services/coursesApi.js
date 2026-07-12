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