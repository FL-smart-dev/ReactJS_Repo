import axios from "axios";
import {BASE_URL } from '../constants/env';
  
const axiosClient = axios.create({
    baseURL: BASE_URL,
    headers:{
        "Content-Type" : "application/json",
        "Accept": "application/json",
    }
});

// axiosClient.interceptors.request.use((config) => {
//     // config.headers.Authorization = `Bearer ${store.state.user.token}`;
//     config.headers.ContentType = "application/json";
//     config.headers.Accept = "application/json";
//     return config;
// });

export default axiosClient;