// src/api/api.ts

import {privateAxios, publicAxios} from "@/guards/axios-interceptor";

export const login = async (email: string, password: string) => {
    const response = await publicAxios.post('/auth/login', { email, password });
    return response.data;
};

export const signup = async (email: string, password: string) => {
    const response = await publicAxios.post('/auth/signup', { email, password });
    return response.data;
};

export const getProfile = async () => {
    const response = await privateAxios.get('/profile');
    return response.data;
};
