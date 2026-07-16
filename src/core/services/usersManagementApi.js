import apiClient from "../interceptor/interceptor";

export const getUsers = ({ pageNumber, rowsOfPage, roleId, isActiveUser } = {}) => {
    return apiClient.get("User/UserMannage", {
        params: {
            PageNumber: pageNumber,
            RowsOfPage: rowsOfPage,
            SortingCol: "DESC",
            SortType: "InsertDate",
            Query: "",
            IsActiveUser: isActiveUser,
            IsDeletedUser: false,
            roleId: roleId,
        }
    });
};

export const createUser = (data) => {
    return apiClient.post("User/CreateUser", data);
};