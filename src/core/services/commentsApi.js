import apiClient from "../interceptor/interceptor";

export const getComments = ({ pageNumber, rowsOfPage, accept } = {}) => {
    return apiClient.get("Course/CommentManagment", {
        params: {
            PageNumber: pageNumber,
            RowsOfPage: rowsOfPage,
            Accept: accept
        }
    })
};

export const acceptCourseComment = (commentId) => {
    return apiClient.post(`Course/AcceptCourseComment?CommentCourseId=${commentId}`)
}

export const deleteCourseComment = (commentId) => {
    return apiClient.delete(`Course/DeleteCourseComment?CourseCommandId=${commentId}`)
}