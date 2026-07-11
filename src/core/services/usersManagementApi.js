import apiClient from "../interceptor/interceptor";

export const getUsers = ({ pageNumber = 1, rowOfPage = 10 } = {}) => {
    return apiClient.get("User/UserMannage", {
        params: {
            PageNumber: pageNumber,
            RowsOfPage: rowOfPage,
            SortingCol: "DESC",
            SortType: "InsertDate",
            Query: "",
            IsActiveUser: true,
            IsDeletedUser: false,
            // roleId: ,
        }
    });
};