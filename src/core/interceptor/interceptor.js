import axios from "axios";
// import { toast } from "react-toastify";

const API_BASE_URL = import.meta.env.VITE_BASE_URL;

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    timeout: 25000,
});

    const onSuccess = (response) => response;

    const onError = (error)=>{
        if (!error.response) {
            // toast.error("ارتباط با سرور برقرار نشد");
            return Promise.reject(error);
        }

        const status = error.response.status;

        if (status >= 500) {
            // toast.error("خطایی در سرور رخ داده است، لطفاً بعداً دوباره تلاش کنید.");
        }
        if (status == 400 && status == 402 && status >= 404 && status < 500) {
            // toast.error("درخواست نامعتبر است.");
        }
        if (status === 401) {
            localStorage.removeItem("token");
            // toast.error("لطفاً دوباره وارد حساب کاربری خود شوید.");

            setTimeout(() => {
                window.location.href = "/login";
            }, 1500);
            
            return Promise.reject(error);
        }
        if (error.response.status === 403) {
            // toast.error("مجوز دسترسی به این بخش را ندارید");
            setTimeout(()=>{
                window.location.href = "/login";
            },2000)
        }
        
        return Promise.reject(error);
    }
    apiClient.interceptors.response.use(onSuccess , onError);

    apiClient.interceptors.request.use((config)=>{
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config
    });

export default apiClient
