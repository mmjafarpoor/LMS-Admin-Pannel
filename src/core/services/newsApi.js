import apiClient from "../interceptor/interceptor";

export const getNews = ({pageNumber , rowsOfPage}) =>{
    return apiClient.get("/News",{
        params:{
            PageNumber:pageNumber,
            RowsOfPage:rowsOfPage,
        }
    });
}

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

export const activeNewsById = (newsId, active) => {
    console.log(active, newsId)
    return apiClient.put("News/ActiveDeactiveNews", {
       Id: newsId,
       Active: active, 
    });
};

export const createCategory = (data) => {
    return apiClient.post("News/CreateNewsCategory", data);
};