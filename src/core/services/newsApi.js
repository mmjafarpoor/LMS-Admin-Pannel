import apiClient from "../interceptor/interceptor";

export const getNews = () => {
    return apiClient.get("News");
};