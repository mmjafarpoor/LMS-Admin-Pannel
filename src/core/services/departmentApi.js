import apiClient from "../interceptor/interceptor";

export const getDepartments = () => {
    return apiClient.get("Department");
};

export const createDepartment = (data) => {
    return apiClient.post("Department", data);
};