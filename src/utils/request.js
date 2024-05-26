//进行axios二次封装
import axios from 'axios';
import {ElMessage} from "element-plus";

let request = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 5000
});
request.interceptors.request.use((config) => {
    return config;
});
request.interceptors.response.use((response) => {
    return response.data;
}, (error) => {
    let message = "";
    switch (error.response.status) {
        case 401:
            message = "TOKEN过期";
            break;
        case 403:
            message = "权限不足";
            break;
        case 404:
            message = "请求地址错误";
            break;
        case 500:
            message = "服端错误";
        default:
            message = "网络错误";
    }
    ElMessage({
        type: "error",
        message: message,
    })
    Promise.reject(error);
});
export default request;