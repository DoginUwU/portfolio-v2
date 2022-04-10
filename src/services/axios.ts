/* eslint-disable no-param-reassign */
import axios from 'axios';

const instance = axios.create({
    baseURL: import.meta.env.VITE_CMS_URL as string,
});

instance.interceptors.request.use((config) => {
    // @ts-ignore
    config.headers.Authorization = `Bearer ${import.meta.env.VITE_CMS_TOKEN}`;
    return config;
});

export { instance as api };
