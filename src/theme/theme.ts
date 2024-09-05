// src/theme/theme.ts

import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        mode: 'light', // Specify light mode
        primary: {
            main: '#FFFC00',  // Snapchat yellow
        },
        secondary: {
            main: '#000000',  // Black for icons and text
        },
        background: {
            default: '#FFFFFF', // White background for the app
        },
    },
    typography: {
        fontFamily: '"Segoe UI", "Helvetica", "Arial", sans-serif',
        fontWeightRegular: 400,
        fontWeightBold: 700,
    },
    shape: {
        borderRadius: 10,
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark', // Specify dark mode
        primary: {
            main: '#FFFC00',  // Snapchat yellow
        },
        secondary: {
            main: '#FFFFFF',  // White for text/icons in dark mode
        },
        background: {
            default: '#575757', // Dark background for the app
        },
    },
    typography: {
        fontFamily: '"Segoe UI", "Helvetica", "Arial", sans-serif',
        fontWeightRegular: 400,
        fontWeightBold: 700,
    },
    shape: {
        borderRadius: 10,
    },
});

export { lightTheme, darkTheme };
