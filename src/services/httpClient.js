import axios from 'axios';

const httpClient = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
});

const getAuthToken = () => localStorage.getItem('tkambio-token');

const authInterceptor = (config) => {
    config.headers['Authorization'] = 'Bearer ' + getAuthToken();
    return config;
}

httpClient.interceptors.request.use(authInterceptor);

export default httpClient;