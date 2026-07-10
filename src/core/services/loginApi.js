import apiClient from "../interceptor/interceptor";

export const loginGmail = (data) =>
    apiClient.post("Sign/Login", data);

