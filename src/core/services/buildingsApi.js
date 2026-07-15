import apiClient from "../interceptor/interceptor";

export const getBuildings = () => {
    return apiClient.get("Building");
};

export const createBuilding = (data) => {
    return apiClient.post("Building", data);
};