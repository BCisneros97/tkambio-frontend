import axios from 'axios';
import { getUser, removeUser } from './auth-storage.service.js';

const httpClient = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
});

const authInterceptor = (config) => {
    const user = getUser();
    if (user) {
        config.headers['Authorization'] = 'Bearer ' + user.access_token;
    }
    return config;
}

const errorInterceptor = (error) => {
    if (error.response.status == 400) {
        removeUser();
        location.href = '/login';
    }
    return Promise.reject(error);
}

httpClient.interceptors.request.use(authInterceptor);
httpClient.interceptors.response.use((response) => response, errorInterceptor)

export default httpClient;