// src/pages/_app.tsx

import "@/styles/globals.css";
import type {AppProps} from "next/app";
import {CssBaseline} from "@mui/material";
import {ThemeProvider} from "@mui/material/styles";
import {lightTheme, darkTheme} from "@/theme/theme";
import {useEffect, useState} from "react";
import AppLevelLayout from "@/components/layout/appLevelLayout";
import AxiosInterceptor from "@/guards/axios-interceptor";
import {AuthProvider} from '@/context/auth-context';


export default function App({Component, pageProps}: AppProps) {
    const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        // You can dynamically check the system preference for dark mode
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        // setThemeMode(prefersDarkMode ? 'dark' : 'light');
        setThemeMode(prefersDarkMode ? 'light' : 'light');
    }, []);

    const currentTheme = themeMode === 'light' ? lightTheme : darkTheme;

    // @ts-ignore
    return (
        <AuthProvider>
            <AxiosInterceptor>
                <AppLevelLayout>
                    <ThemeProvider theme={currentTheme}>
                        <CssBaseline/>
                        <Component {...pageProps} />
                    </ThemeProvider>
                </AppLevelLayout>
            </AxiosInterceptor>
        </AuthProvider>
    );
}
