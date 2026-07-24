import apiClient from "../interceptor/interceptor";

export const getNews = () => {
    return apiClient.get("News");
};

export const getNewsCategories = () => {
    return apiClient.get("News/GetListNewsCategory");
};

export const editNewsCategories = (data) => {
    const formData = new FormData();

    formData.append("Id", data.Id);
    formData.append("CategoryName", data.CategoryName);
    formData.append("GoogleTitle", data.GoogleTitle);
    formData.append("GoogleDescribe", data.GoogleDescribe);

    return apiClient.put("/News/UpdateNewsCategory",formData);
};

export const getNewsDetails = (NewsId) => {
    return apiClient.get(`News/${NewsId}`);
};

export const createNews = (data) => {
    return apiClient.post("News/CreateNews", data);
};