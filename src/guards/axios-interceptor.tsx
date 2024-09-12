// src/api/axios-interceptor.ts
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export const publicAxios = axios.create({
    baseURL: 'http://localhost:4000',
});

export const privateAxios = axios.create({
    baseURL: 'http://localhost:4000',
});

const AxiosInterceptor = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        const requestInterceptor = privateAxios.interceptors.request.use(config => {
            const token = sessionStorage.getItem('token');
            if (token) config.headers['Authorization'] = `Bearer ${token}`;
            return config;
        });

        const responseInterceptor = privateAxios.interceptors.response.use(
            response => response,
            error => {
                if (error.response?.status === 401) {
                    sessionStorage.clear();
                    router.push('/auth/login');
                }
                return Promise.reject(error);
            }
        );

        setFlag(true);

        return () => {
            privateAxios.interceptors.request.eject(requestInterceptor);
            privateAxios.interceptors.response.eject(responseInterceptor);
            setFlag(false);
        };
    }, [router]);

    return flag ? <>{children}</> : null;
};

export default AxiosInterceptor;
