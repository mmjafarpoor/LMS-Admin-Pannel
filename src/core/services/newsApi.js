import apiClient from "../interceptor/interceptor";

export const getNews = () => {
    return apiClient.get("News");
};

export const getNewsCategories = () => {
    return apiClient.get("News/GetListNewsCategory");
};

export const getNewsDetails = (NewsId) => {
    return apiClient.get(`News/${NewsId}`);
};