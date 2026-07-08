import apiClient from "../interceptor/interceptor";

export const userApiData = (data) =>
    apiClient.get("/SharePanel/GetProfileInfo", data);